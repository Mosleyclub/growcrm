// Reintenta SOLO los que quedaron en sin_resolver_por_link_v2.json, esta vez
// simulando un navegador real (algunos links de Maps rechazan pedidos sin eso).
// Solo escribe lat/lng si lo consigue resolver.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

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
    const res = await fetch(link, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
      }
    });
    return extraerCoordsDeUrl(res.url);
  } catch (e) {
    return null;
  }
}

async function main() {
  if (!fs.existsSync('sin_resolver_por_link_v2.json')) {
    console.log('No encuentro sin_resolver_por_link_v2.json en esta carpeta.');
    process.exit(1);
  }
  const pendientes = JSON.parse(fs.readFileSync('sin_resolver_por_link_v2.json', 'utf8'));
  console.log(`Reintentando ${pendientes.length} clientes...\n`);

  let resueltos = 0;
  const siguenSinResolver = [];

  for (const c of pendientes) {
    const coords = await resolverLink(c.address);
    if (coords) {
      await db.collection('clients').doc(c.id).update({ lat: coords.lat, lng: coords.lng });
      resueltos++;
      console.log(`OK - ${c.name} -> (${coords.lat}, ${coords.lng})`);
    } else {
      siguenSinResolver.push(c);
      console.log(`SIGUE SIN RESOLVER - ${c.name}`);
    }
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nResueltos en este reintento: ${resueltos}`);
  console.log(`Siguen sin resolver: ${siguenSinResolver.length}`);
  fs.writeFileSync('sin_resolver_definitivo.json', JSON.stringify(siguenSinResolver, null, 2), 'utf8');
  console.log('Lista final (para cargar a mano): sin_resolver_definitivo.json');
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
