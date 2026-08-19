// Para los clientes que YA tienen coordenada exacta pero les falta el Place ID
// (nombre del negocio), busca el nombre cerca de esa coordenada -- como ya
// sabemos el lugar preciso, la busqueda es muy confiable.
// Solo escribe placeId (y lat/lng si mejora), no toca ningun otro campo.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const API_KEY = 'AIzaSyCKieIR_467GcFB3pDXLyDac_bp6lsnpFk';

// Busca el negocio por nombre, pero "cerca" de la coordenada que ya confirmamos
// que es correcta -- mucho mas confiable que buscar por nombre solo.
async function buscarCercaDeCoordenada(nombre, lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(nombre)}&location=${lat},${lng}&radius=150&key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === 'OK' && data.results && data.results.length > 0) {
      const lugar = data.results[0];
      return { placeId: lugar.place_id, nombreEncontrado: lugar.name, lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng };
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('Descargando clientes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const pendientes = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    if (data.lat && data.lng && !data.placeId) {
      pendientes.push({ id: doc.id, name: data.name, lat: data.lat, lng: data.lng });
    }
  });

  console.log(`Clientes con coordenada pero sin nombre: ${pendientes.length}\n`);

  let resueltos = 0;
  const sinResolver = [];

  for (let i = 0; i < pendientes.length; i++) {
    const c = pendientes[i];
    const resultado = await buscarCercaDeCoordenada(c.name, c.lat, c.lng);
    if (resultado) {
      await db.collection('clients').doc(c.id).update({ placeId: resultado.placeId });
      resueltos++;
      console.log(`OK - ${c.name} -> "${resultado.nombreEncontrado}" (place id encontrado)`);
    } else {
      sinResolver.push(c);
      console.log(`SIN NOMBRE - ${c.name} (se queda con la coordenada nomas)`);
    }
    if ((i + 1) % 20 === 0) console.log(`... ${i + 1}/${pendientes.length}`);
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nAhora tienen nombre: ${resueltos}`);
  console.log(`Se quedan solo con coordenada: ${sinResolver.length}`);
  fs.writeFileSync('sin_nombre_final.json', JSON.stringify(sinResolver, null, 2), 'utf8');
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
