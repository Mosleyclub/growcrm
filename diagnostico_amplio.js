// Solo lectura: no modifica nada.
// Revisa TODOS los clientes (sin filtrar por nombre) y agrupa por coordenada
// EXACTA compartida, para encontrar grupos de clientes con la misma lat/lng mal puesta.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function main() {
  const snapshot = await db.collection('clients').get();
  const todos = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    todos.push({ id: doc.id, name: data.name, lat: data.lat, lng: data.lng, address: data.address });
  });

  console.log(`Total de clientes activos: ${todos.length}\n`);

  const porCoord = {};
  todos.forEach(c => {
    if (!c.lat || !c.lng) return;
    const key = `${c.lat},${c.lng}`;
    if (!porCoord[key]) porCoord[key] = [];
    porCoord[key].push(c);
  });

  console.log('=== Grupos de 2 o más clientes con la MISMA coordenada exacta ===\n');
  let gruposEncontrados = 0;
  Object.entries(porCoord).forEach(([coord, lista]) => {
    if (lista.length > 1) {
      gruposEncontrados++;
      console.log(`Coordenada: ${coord}  (${lista.length} clientes)`);
      console.log(`  Ver en Maps: https://www.google.com/maps?q=${coord}`);
      lista.forEach(c => console.log(`  - ${c.name}  (id: ${c.id})  address guardado: ${c.address || '(vacío)'}`));
      console.log('');
    }
  });

  if (gruposEncontrados === 0) {
    console.log('No se encontraron coordenadas exactas compartidas entre 2+ clientes.');
  } else {
    console.log(`\nTotal de grupos problemáticos: ${gruposEncontrados}`);
  }

  const sinCoords = todos.filter(c => !c.lat || !c.lng);
  console.log(`\n=== Clientes sin ninguna coordenada guardada: ${sinCoords.length} ===`);
  sinCoords.forEach(c => console.log(`  - ${c.name} (id: ${c.id})`));

  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
