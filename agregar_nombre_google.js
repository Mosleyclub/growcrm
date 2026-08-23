// Para los clientes que ya tienen Place ID, busca el nombre OFICIAL completo
// y la direccion formateada de Google (fields=name,formatted_address), y las
// guarda por separado. Esto se va a usar como texto en las paradas del
// recorrido, para intentar que Google muestre el nombre del negocio ahi
// tambien (no solo en el boton individual).
// Solo escribe nombreGoogle y direccionGoogle. No toca ningun otro campo.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const API_KEY = 'AIzaSyCKieIR_467GcFB3pDXLyDac_bp6lsnpFk';

async function getDetallesLugar(placeId) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address&key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === 'OK' && data.result) {
      return { nombre: data.result.name, direccion: data.result.formatted_address };
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('Descargando clientes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const conPlaceId = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    if (data.placeId) conPlaceId.push({ id: doc.id, name: data.name, placeId: data.placeId });
  });

  console.log(`Clientes con Place ID: ${conPlaceId.length}\n`);

  let resueltos = 0;

  for (let i = 0; i < conPlaceId.length; i++) {
    const c = conPlaceId[i];
    const detalle = await getDetallesLugar(c.placeId);
    if (detalle) {
      await db.collection('clients').doc(c.id).update({ nombreGoogle: detalle.nombre, direccionGoogle: detalle.direccion });
      resueltos++;
      console.log(`OK - ${c.name} -> "${detalle.nombre}" - ${detalle.direccion}`);
    } else {
      console.log(`SIN RESOLVER - ${c.name}`);
    }
    if ((i + 1) % 20 === 0) console.log(`... ${i + 1}/${conPlaceId.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nCompletados: ${resueltos}`);
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
