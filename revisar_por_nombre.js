// Reconstruye (sin tocar Firestore) la lista de clientes que en su momento
// se resolvieron por NOMBRE (respaldo, menos preciso) en vez de por LINK.
// No actualiza ninguna coordenada, solo lee y arma un archivo para revisar.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

function tieneLinkDeMaps(texto) {
  if (!texto) return false;
  return /maps\.app\.goo\.gl|google\.com\/maps|goo\.gl\/maps/i.test(texto);
}

function extraerCoordsDeUrl(url) {
  let m = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+),\d+z/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  m = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  m = url.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  return null;
}

async function resolverLink(link) {
  try {
    const res = await fetch(link, { redirect: 'follow' });
    return extraerCoordsDeUrl(res.url);
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('Descargando clientes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const conLink = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    if (tieneLinkDeMaps(data.address)) {
      conLink.push({ id: doc.id, address: data.address, name: data.name, lat: data.lat, lng: data.lng });
    }
  });

  console.log(`Clientes con link de Maps: ${conLink.length}`);

  const probablementePorNombre = [];
  let revisados = 0;

  for (const c of conLink) {
    const coordsLink = await resolverLink(c.address);
    revisados++;
    if (!coordsLink) {
      probablementePorNombre.push({
        id: c.id,
        name: c.name,
        address: c.address,
        lat: c.lat,
        lng: c.lng,
        mapsActual: (c.lat && c.lng) ? `https://www.google.com/maps?q=${c.lat},${c.lng}` : null,
      });
      console.log(`REVISAR (posible por nombre) - ${c.name}`);
    }
    if (revisados % 20 === 0) console.log(`... ${revisados}/${conLink.length}`);
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\nTotal a revisar: ${probablementePorNombre.length}`);
  fs.writeFileSync('revisar_por_nombre.json', JSON.stringify(probablementePorNombre, null, 2), 'utf8');
  console.log('Guardado en revisar_por_nombre.json');
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
