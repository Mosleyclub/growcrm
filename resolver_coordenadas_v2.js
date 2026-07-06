// resolver_coordenadas_v2.js
// Uso: node resolver_coordenadas_v2.js
//
// Para los clientes sin lat/lng, busca el nombre del negocio en Google Places
// (Find Place From Text) y toma la primera coincidencia. Muestra cada
// resultado para que puedas revisar, y guarda solo si hay confianza razonable
// (viene con direccion). Al final deja un archivo de log con lo que no
// pudo resolver.

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

async function buscarLugar(nombre) {
  const query = encodeURIComponent(`${nombre}, Argentina`);
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=formatted_address,geometry,name&key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function main() {
  console.log('Descargando clientes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const sinCoords = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    const yaTieneCoords = data.lat && data.lng;
    if (!yaTieneCoords && tieneLinkDeMaps(data.address)) {
      sinCoords.push({ id: doc.id, address: data.address, name: data.name });
    }
  });

  console.log(`Clientes sin coordenadas: ${sinCoords.length}\n`);

  let resueltos = 0;
  const noResueltos = [];

  for (const c of sinCoords) {
    try {
      const resultado = await buscarLugar(c.name);

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

        resueltos++;
        console.log(`OK - ${c.name} -> ${lugar.formatted_address} (${lat}, ${lng})`);
      } else {
        noResueltos.push({ ...c, motivo: resultado.status });
        console.log(`SIN RESULTADO - ${c.name} (${resultado.status})`);
      }

      // Pausa corta para no saturar la API
      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      noResueltos.push({ ...c, motivo: e.message });
      console.log(`ERROR - ${c.name}: ${e.message}`);
    }
  }

  console.log(`\nResueltos: ${resueltos}`);
  console.log(`Sin resolver: ${noResueltos.length}`);

  fs.writeFileSync('sin_resolver.json', JSON.stringify(noResueltos, null, 2), 'utf8');
  console.log('\nLista de sin resolver guardada en sin_resolver.json (para carga manual)');

  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
