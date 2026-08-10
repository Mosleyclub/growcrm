// Mejora los que se geocodificaron "a ciegas" por nombre de negocio (sin
// direccion), usando el buscador de LUGARES de Google (mucho mas preciso
// para nombres de comercios que el geocodificador de direcciones postales).
// Reprocesa TODOS los clientes con link de Maps, para unificar con el metodo
// mas preciso. Solo escribe lat/lng, no toca ningun otro campo.

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
  return decodeURIComponent(m[1].replace(/\+/g, ' '));
}

// Buscador de LUGARES (no de direcciones postales) - mucho mejor para nombres de negocios
async function buscarLugar(texto) {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(texto + ', Argentina')}&inputtype=textquery&fields=formatted_address,geometry,name&key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === 'OK' && data.candidates && data.candidates.length > 0) {
      const lugar = data.candidates[0];
      return { lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng, nombre: lugar.name, direccion: lugar.formatted_address };
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
    if (directas) return { ...directas, metodo: 'coordenada directa del link (ya era precisa)' };

    const texto = extraerTextoDePlace(finalUrl);
    if (texto) {
      const lugar = await buscarLugar(texto);
      if (lugar) return { lat: lugar.lat, lng: lugar.lng, metodo: `lugar encontrado: "${lugar.nombre}" - ${lugar.direccion}` };
    }
    return null;
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
      conLink.push({ id: doc.id, name: data.name, address: data.address, latActual: data.lat, lngActual: data.lng });
    }
  });

  console.log(`Clientes con link de Maps a reprocesar: ${conLink.length}\n`);

  let actualizados = 0;
  let sinCambios = 0;
  const noResueltos = [];

  for (let i = 0; i < conLink.length; i++) {
    const c = conLink[i];
    const resultado = await resolverLink(c.address);
    if (resultado) {
      await db.collection('clients').doc(c.id).update({ lat: resultado.lat, lng: resultado.lng });
      actualizados++;
      console.log(`OK - ${c.name} -> (${resultado.lat}, ${resultado.lng}) [${resultado.metodo}]`);
    } else {
      sinCambios++;
      noResueltos.push(c);
      console.log(`SIN RESOLVER - ${c.name} (quedo como estaba: ${c.latActual}, ${c.lngActual})`);
    }
    if ((i + 1) % 20 === 0) console.log(`... ${i + 1}/${conLink.length}`);
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nActualizados con lugar preciso: ${actualizados}`);
  console.log(`No se pudieron resolver esta vez: ${sinCambios}`);
  fs.writeFileSync('sin_resolver_v4.json', JSON.stringify(noResueltos, null, 2), 'utf8');
  console.log('Lista de los que no se pudieron resolver: sin_resolver_v4.json');
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
