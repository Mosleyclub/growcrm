// Solo lectura: no modifica nada. Busca clientes por nombre (parcial, sin importar mayúsculas)
// y muestra su lat/lng guardada, para ver si varios coinciden en el mismo punto por error.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const NOMBRES_A_BUSCAR = ["cañada", "vatolux", "wood", "hash", "bernal mint", "raiz", "raíz", "tras la sierra", "aralex", "kaya", "chuzena"];

async function main() {
  const snapshot = await db.collection('clients').get();
  const encontrados = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    const nombreLower = (data.name || "").toLowerCase();
    if (NOMBRES_A_BUSCAR.some(n => nombreLower.includes(n))) {
      encontrados.push({ id: doc.id, name: data.name, lat: data.lat, lng: data.lng, address: data.address });
    }
  });

  encontrados.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  console.log(`Encontrados: ${encontrados.length}\n`);
  encontrados.forEach(c => {
    console.log(`${c.name}`);
    console.log(`  id: ${c.id}`);
    console.log(`  lat/lng: ${c.lat}, ${c.lng}`);
    console.log(`  address guardado: ${c.address}`);
    console.log('');
  });

  // Agrupar por coordenada exacta para ver cuáles chocan
  const porCoord = {};
  encontrados.forEach(c => {
    if (!c.lat || !c.lng) return;
    const key = `${c.lat},${c.lng}`;
    if (!porCoord[key]) porCoord[key] = [];
    porCoord[key].push(c.name);
  });
  console.log('--- Clientes que comparten EXACTAMENTE la misma coordenada ---');
  Object.entries(porCoord).forEach(([coord, nombres]) => {
    if (nombres.length > 1) console.log(`${coord} -> ${nombres.join(' | ')}`);
  });

  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
