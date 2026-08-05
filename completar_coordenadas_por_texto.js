// Para los clientes que TODAVIA no tienen lat/lng despues del paso anterior:
// - Si tienen una direccion de TEXTO (no link) -> la geocodifica con la API de Google
// - Si no tienen direccion de ningun tipo -> los deja en una lista aparte para carga manual
// Solo escribe lat/lng, no toca ningun otro campo.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const API_KEY = 'AIzaSyCKieIR_467GcFB3pDXLyDac_bp6lsnpFk';

function tieneLinkDeMaps(texto) {
  if (!texto) return false;
  return /maps\.app\.goo\.gl|google\.com\/maps|goo\.gl\/maps/i.test(texto);
}

async function geocodeAddress(address) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address + ', Argentina')}&key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === 'OK' && data.results && data.results.length > 0) {
      const loc = data.results[0].geometry.location;
      return { lat: loc.lat, lng: loc.lng, formatted: data.results[0].formatted_address };
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('Descargando clientes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const conTexto = [];
  const sinNada = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    if (data.lat && data.lng) return;
    const addr = (data.address || '').trim();
    if (!addr) {
      sinNada.push({ id: doc.id, name: data.name });
    } else if (!tieneLinkDeMaps(addr)) {
      conTexto.push({ id: doc.id, name: data.name, address: addr });
    }
  });

  console.log(`Con direccion de texto para geocodificar: ${conTexto.length}`);
  console.log(`Sin ninguna direccion (necesitan carga manual): ${sinNada.length}\n`);

  let resueltos = 0;
  const noResueltos = [];

  for (let i = 0; i < conTexto.length; i++) {
    const c = conTexto[i];
    const coords = await geocodeAddress(c.address);
    if (coords) {
      await db.collection('clients').doc(c.id).update({ lat: coords.lat, lng: coords.lng });
      resueltos++;
      console.log(`OK - ${c.name} -> (${coords.lat}, ${coords.lng}) [${coords.formatted}]`);
    } else {
      noResueltos.push(c);
      console.log(`SIN RESOLVER - ${c.name} (direccion: "${c.address}")`);
    }
    if ((i + 1) % 25 === 0) console.log(`... ${i + 1}/${conTexto.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nGeocodificados por texto: ${resueltos}`);
  console.log(`Sin resolver por texto: ${noResueltos.length}`);

  fs.writeFileSync('sin_resolver_por_texto.json', JSON.stringify(noResueltos, null, 2), 'utf8');
  fs.writeFileSync('sin_direccion_ninguna.json', JSON.stringify(sinNada, null, 2), 'utf8');
  console.log('Guardado: sin_resolver_por_texto.json y sin_direccion_ninguna.json');
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
