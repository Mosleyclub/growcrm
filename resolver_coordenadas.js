// resolver_coordenadas.js
// Uso: node resolver_coordenadas.js
//
// Busca clientes sin lat/lng que tengan un link de Google Maps en 'address',
// sigue el redirect (funciona con maps.app.goo.gl y links largos), extrae
// las coordenadas reales de la URL final, y actualiza el cliente en Firestore.
// No borra ni toca nada mas del cliente.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

function extraerCoordenadas(url) {
  // Prioridad 1: patron !3d<lat>!4d<lng> (coordenada exacta del pin)
  let match = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (match) return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };

  // Prioridad 2: patron @<lat>,<lng>,<zoom>z (centro del mapa)
  match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (match) return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };

  // Prioridad 3: patron ?q=<lat>,<lng>
  match = url.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (match) return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };

  return null;
}

function tieneLinkDeMaps(texto) {
  if (!texto) return false;
  return /maps\.app\.goo\.gl|google\.com\/maps|goo\.gl\/maps/i.test(texto);
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

  console.log(`Clientes sin coordenadas pero con link de Maps: ${sinCoords.length}\n`);

  let resueltos = 0;
  let fallidos = [];

  for (const c of sinCoords) {
    try {
      const match = c.address.match(/(https?:\/\/[^\s]+)/);
      if (!match) {
        fallidos.push({ ...c, motivo: 'no se encontro URL en el texto' });
        continue;
      }
      const urlOriginal = match[1];

      const res = await fetch(urlOriginal, { redirect: 'follow' });
      const urlFinal = res.url;

      const coords = extraerCoordenadas(urlFinal);

      if (coords) {
        await db.collection('clients').doc(c.id).update({
          lat: coords.lat,
          lng: coords.lng
        });
        resueltos++;
        console.log(`OK - ${c.name}: ${coords.lat}, ${coords.lng}`);
      } else {
        fallidos.push({ ...c, motivo: 'no se encontraron coordenadas en la URL final: ' + urlFinal });
      }
    } catch (e) {
      fallidos.push({ ...c, motivo: 'error: ' + e.message });
    }
  }

  console.log(`\nResueltos automaticamente: ${resueltos}`);
  console.log(`No se pudieron resolver: ${fallidos.length}`);

  if (fallidos.length > 0) {
    console.log('\n--- Estos quedan pendientes de carga manual ---');
    fallidos.forEach(f => {
      console.log(`- ${f.name} (${f.address}) -> ${f.motivo}`);
    });
  }

  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
