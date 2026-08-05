// Completa lat/lng SOLO para clientes que no tienen coordenada, siguiendo el link
// de Maps que ya tienen guardado en "address". No toca visits, notes, ni ningún
// otro campo. No usa la API de Google (gratis, sin límite de cuota).

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

  const pendientes = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    if ((!data.lat || !data.lng) && tieneLinkDeMaps(data.address)) {
      pendientes.push({ id: doc.id, name: data.name, address: data.address });
    }
  });

  console.log(`Clientes sin coordenada PERO con link de Maps: ${pendientes.length}\n`);

  let resueltos = 0;
  const noResueltos = [];

  for (let i = 0; i < pendientes.length; i++) {
    const c = pendientes[i];
    const coords = await resolverLink(c.address);
    if (coords) {
      // SOLO actualiza lat/lng, nada más (updateDoc no toca otros campos)
      await db.collection('clients').doc(c.id).update({ lat: coords.lat, lng: coords.lng });
      resueltos++;
      console.log(`OK - ${c.name} -> (${coords.lat}, ${coords.lng})`);
    } else {
      noResueltos.push(c);
      console.log(`SIN RESOLVER - ${c.name}`);
    }
    if ((i + 1) % 25 === 0) console.log(`... ${i + 1}/${pendientes.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nResueltos: ${resueltos}`);
  console.log(`Sin resolver: ${noResueltos.length}`);
  fs.writeFileSync('sin_resolver_por_link_v2.json', JSON.stringify(noResueltos, null, 2), 'utf8');
  console.log('Lista de los que no se pudieron resolver: sin_resolver_por_link_v2.json');
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
