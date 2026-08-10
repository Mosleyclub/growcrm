// Completa lat/lng para TODOS los clientes con link de Maps sin resolver.
// Ahora entiende dos formatos de link:
//   1) el que trae la coordenada directa en la URL (como antes)
//   2) el que trae "/maps/place/NOMBRE,+DIRECCION/data=..." (sin coordenada
//      visible, pero con la direccion en texto) -> lo geocodifica
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

function extraerCoordsDeUrl(url) {
  let m = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+),\d+z/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  m = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  m = url.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  return null;
}

function extraerTextoDePlace(url) {
  const m = url.match(/\/maps\/place\/([^\/]+)\/data=/);
  if (!m) return null;
  const texto = decodeURIComponent(m[1].replace(/\+/g, ' '));
  return texto;
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

async function resolverLink(link) {
  try {
    const res = await fetch(link, { redirect: 'follow' });
    const finalUrl = res.url;

    const directas = extraerCoordsDeUrl(finalUrl);
    if (directas) return { ...directas, metodo: 'coordenada directa' };

    const texto = extraerTextoDePlace(finalUrl);
    if (texto) {
      const geo = await geocodeAddress(texto);
      if (geo) return { lat: geo.lat, lng: geo.lng, metodo: `geocodificado desde "${texto}"` };
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
    if ((!data.lat || !data.lng) && tieneLinkDeMaps(data.address)) {
      pendientes.push({ id: doc.id, name: data.name, address: data.address });
    }
  });

  console.log(`Clientes sin coordenada con link de Maps: ${pendientes.length}\n`);

  let resueltos = 0;
  const noResueltos = [];

  for (let i = 0; i < pendientes.length; i++) {
    const c = pendientes[i];
    const coords = await resolverLink(c.address);
    if (coords) {
      await db.collection('clients').doc(c.id).update({ lat: coords.lat, lng: coords.lng });
      resueltos++;
      console.log(`OK - ${c.name} -> (${coords.lat}, ${coords.lng}) [${coords.metodo}]`);
    } else {
      noResueltos.push(c);
      console.log(`SIN RESOLVER - ${c.name}`);
    }
    if ((i + 1) % 20 === 0) console.log(`... ${i + 1}/${pendientes.length}`);
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nResueltos: ${resueltos}`);
  console.log(`Sin resolver: ${noResueltos.length}`);
  fs.writeFileSync('sin_resolver_v3.json', JSON.stringify(noResueltos, null, 2), 'utf8');
  console.log('Lista final de los que no se pudieron resolver: sin_resolver_v3.json');
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
