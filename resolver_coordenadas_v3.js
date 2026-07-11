// resolver_coordenadas_v3.js
// Uso: node resolver_coordenadas_v3.js
//
// Para clientes cuya direccion es un link de Google Maps, sigue el link
// (redirect) y extrae la coordenada real desde la URL resuelta.
// Es mucho mas preciso que buscar por nombre, porque es el lugar exacto
// que se compartio originalmente. Si no logra extraer coordenadas del link,
// cae como respaldo a la busqueda por nombre (igual que el script v2).
// Sobreescribe tambien los que ya tenian coordenadas resueltas por nombre
// en el script anterior, porque esta forma es mas confiable.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const API_KEY = 'AIzaSyCKieIR_467GcFB3pDXLyDac_bp6lsnpFk';

function tieneLinkDeMaps(texto) {
  if (!texto) return false;
  return /maps\.app\.goo\.gl|google\.com\/maps|goo\.gl\/maps/i.test(texto);
}

// Extrae lat/lng de una URL de Google Maps ya resuelta (sin redirects)
function extraerCoordsDeUrl(url) {
  // Formato mas comun: .../@-34.612345,-58.412345,17z/...
  let m = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };

  // Formato alternativo: !3d-34.612345!4d-58.412345
  m = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };

  // Formato query: ?q=-34.612345,-58.412345
  m = url.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };

  return null;
}

async function resolverLink(link) {
  try {
    const res = await fetch(link, { redirect: 'follow' });
    // La URL final (despues de seguir todos los redirects) trae la coordenada
    return extraerCoordsDeUrl(res.url);
  } catch (e) {
    return null;
  }
}

async function buscarLugarPorNombre(nombre) {
  const query = encodeURIComponent(`${nombre}, Argentina`);
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=formatted_address,geometry,name&key=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
}

async function main() {
  console.log('Descargando clientes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const conLink = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    if (tieneLinkDeMaps(data.address)) {
      conLink.push({ id: doc.id, address: data.address, name: data.name });
    }
  });

  console.log(`Clientes con link de Maps: ${conLink.length}\n`);

  let resueltosPorLink = 0;
  let resueltosPorNombre = 0;
  const noResueltos = [];

  for (const c of conLink) {
    try {
      const coordsLink = await resolverLink(c.address);

      if (coordsLink) {
        await db.collection('clients').doc(c.id).update({ lat: coordsLink.lat, lng: coordsLink.lng });
        resueltosPorLink++;
        console.log(`OK (link) - ${c.name} -> (${coordsLink.lat}, ${coordsLink.lng})`);
      } else {
        // Respaldo: buscar por nombre
        const resultado = await buscarLugarPorNombre(c.name);

        if (resultado.status === 'REQUEST_DENIED') {
          console.error('ERROR: la API key no tiene habilitada Places API.');
          console.error(resultado.error_message || '');
          process.exit(1);
        }

        if (resultado.status === 'OK' && resultado.candidates && resultado.candidates.length > 0) {
          const lugar = resultado.candidates[0];
          const lat = lugar.geometry.location.lat;
          const lng = lugar.geometry.location.lng;
          await db.collection('clients').doc(c.id).update({ lat, lng });
          resueltosPorNombre++;
          console.log(`OK (nombre, respaldo) - ${c.name} -> ${lugar.formatted_address} (${lat}, ${lng})`);
        } else {
          noResueltos.push({ ...c, motivo: 'no se pudo ni por link ni por nombre' });
          console.log(`SIN RESULTADO - ${c.name}`);
        }
      }

      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      noResueltos.push({ ...c, motivo: e.message });
      console.log(`ERROR - ${c.name}: ${e.message}`);
    }
  }

  console.log(`\nResueltos por link (precisos): ${resueltosPorLink}`);
  console.log(`Resueltos por nombre (respaldo, revisar): ${resueltosPorNombre}`);
  console.log(`Sin resolver: ${noResueltos.length}`);

  fs.writeFileSync('sin_resolver_v3.json', JSON.stringify(noResueltos, null, 2), 'utf8');
  console.log('\nLista de sin resolver guardada en sin_resolver_v3.json');

  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
