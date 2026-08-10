// Marca como "recien modificados" a todos los clientes que tienen coordenada
// guardada, para que el proximo sync con Sheets no los pise con datos viejos
// de la planilla (el sync compara fechas, y hasta ahora los scripts anteriores
// no actualizaban esa fecha al corregir la coordenada).
// Solo toca el campo lastModified, nada mas.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function main() {
  console.log('Descargando clientes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const conCoords = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    if (data.lat && data.lng) conCoords.push({ id: doc.id, name: data.name });
  });

  console.log(`Clientes con coordenada a proteger: ${conCoords.length}\n`);

  const ahora = Date.now();
  let actualizados = 0;

  for (let i = 0; i < conCoords.length; i++) {
    const c = conCoords[i];
    await db.collection('clients').doc(c.id).update({ lastModified: ahora });
    actualizados++;
    if ((i + 1) % 50 === 0) console.log(`... ${i + 1}/${conCoords.length}`);
    await new Promise(r => setTimeout(r, 80));
  }

  console.log(`\nProtegidos: ${actualizados}`);
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
