// Agrega el "Place ID" de Google (identificador unico del negocio) a todos los
// clientes con link de Maps. Con esto, el recorrido va a poder mostrar el
// NOMBRE real del negocio en vez de solo la direccion o coordenada.
// Solo escribe lat, lng y placeId. No toca ningun otro campo.

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

function extraerTextoDePlace(url) {
  const m = url.match(/\/maps\/place\/([^\/]+)\/data=/);
  if (!m) return null;
  return decodeURIComponent(m[1].replace(/\+/g, ' '));
}

function extraerCoordsDeUrl(url) {
  let m = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+),\d+z/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  m = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
  return null;
}

// Busca el lugar por texto y devuelve tambien su Place ID (el identificador unico)
async function buscarLugarConId(texto) {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(texto + ', Argentina')}&inputtype=textquery&fields=formatted_address,geometry,name,place_id&key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === 'OK' && data.candidates && data.candidates.length > 0) {
      const lugar = data.candidates[0];
      return { lat: lugar.geometry.location.lat, lng: lugar.geometry.location.lng, placeId: lugar.place_id, nombre: lugar.name };
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function resolverConPlaceId(link) {
  try {
    const res = await fetch(link, { redirect: 'follow' });
    const finalUrl = res.url;
    const texto = extraerTextoDePlace(finalUrl);
    if (texto) {
      const lugar = await buscarLugarConId(texto);
      if (lugar) return lugar;
    }
    // respaldo: si no se pudo por texto, al menos intentar la coordenada directa
    const directas = extraerCoordsDeUrl(finalUrl);
    if (directas) return { ...directas, placeId: null, nombre: null };
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
      conLink.push({ id: doc.id, name: data.name, address: data.address });
    }
  });

  console.log(`Clientes con link de Maps: ${conLink.length}\n`);

  let conPlaceId = 0;
  let soloCoordenada = 0;
  const sinResolver = [];

  for (let i = 0; i < conLink.length; i++) {
    const c = conLink[i];
    const resultado = await resolverConPlaceId(c.address);
    if (resultado) {
      const datos = { lat: resultado.lat, lng: resultado.lng };
      if (resultado.placeId) { datos.placeId = resultado.placeId; conPlaceId++; }
      else soloCoordenada++;
      await db.collection('clients').doc(c.id).update(datos);
      console.log(`OK - ${c.name} -> ${resultado.placeId ? 'con Place ID (' + resultado.nombre + ')' : 'solo coordenada'}`);
    } else {
      sinResolver.push(c);
      console.log(`SIN RESOLVER - ${c.name}`);
    }
    if ((i + 1) % 20 === 0) console.log(`... ${i + 1}/${conLink.length}`);
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nCon Place ID (van a mostrar el nombre del negocio): ${conPlaceId}`);
  console.log(`Solo con coordenada (sin nombre, pero ubicacion exacta): ${soloCoordenada}`);
  console.log(`Sin resolver: ${sinResolver.length}`);
  fs.writeFileSync('sin_resolver_placeid.json', JSON.stringify(sinResolver, null, 2), 'utf8');
  process.exit(0);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
