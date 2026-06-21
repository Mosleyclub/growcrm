import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFYtOo_23sBn-5-C0VGTaITHXtYnfPexQ",
  authDomain: "growcrm-highpro.firebaseapp.com",
  projectId: "growcrm-highpro",
  storageBucket: "growcrm-highpro.firebasestorage.app",
  messagingSenderId: "382190286267",
  appId: "1:382190286267:web:be784fc9415801a5ae409e"
};

const GEOCODING_API_KEY = 'AIzaSyCKieIR_467GcFB3pDXLyDac_bp6lsnpFk';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function esLinkDeMaps(direccion) {
  if (!direccion) return false;
  return direccion.includes('maps.app.goo.gl') ||
         direccion.includes('google.com/maps') ||
         direccion.includes('goo.gl/maps');
}

async function geocodificarTexto(direccion) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(direccion + ', Argentina')}&key=${GEOCODING_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.status === 'OK' && data.results.length > 0) {
    const loc = data.results[0].geometry.location;
    return { lat: loc.lat, lng: loc.lng };
  }
  console.warn(`  No se pudo geocodificar: "${direccion}" (status: ${data.status})`);
  return null;
}

async function resolverLinkDeMaps(link) {
  try {
    const res = await fetch(link, { redirect: 'follow' });
    const urlFinal = res.url;

    let match = urlFinal.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (match) {
      return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
    }

    match = urlFinal.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
    if (match) {
      return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
    }

    const pathMatch = urlFinal.match(/\/maps\/place\/([^/]+)\//);
    if (pathMatch) {
      const direccionDeUrl = decodeURIComponent(pathMatch[1].replace(/\+/g, ' '));
      console.log(`  Direccion extraida del link: "${direccionDeUrl}"`);
      const coords = await geocodificarTexto(direccionDeUrl);
      if (coords) return coords;
    }

    console.warn(`  No se encontraron coordenadas ni direccion en la URL resuelta`);
    return null;
  } catch (err) {
    console.warn(`  Error siguiendo el link: ${err.message}`);
    return null;
  }
}

async function procesarTodos() {
  const snapshot = await getDocs(collection(db, 'clients'));
  const lista = snapshot.docs;

  console.log(`Total de clientes: ${lista.length}`);

  let geocodificadosTexto = 0;
  let resueltosDeLink = 0;
  let saltadosSinDireccion = 0;
  let yaTenianCoords = 0;
  let fallidos = 0;

  for (const docSnap of lista) {
    const data = docSnap.data();
    const nombre = data.name || docSnap.id;

    if (data.lat && data.lng) {
      yaTenianCoords++;
      continue;
    }

    const direccion = data.address;

    if (!direccion) {
      saltadosSinDireccion++;
      continue;
    }

    let coords = null;

    if (esLinkDeMaps(direccion)) {
      console.log(`Resolviendo link: ${nombre}`);
      coords = await resolverLinkDeMaps(direccion);
      if (coords) resueltosDeLink++;
    } else {
      console.log(`Geocodificando texto: ${nombre} -> "${direccion}"`);
      coords = await geocodificarTexto(direccion);
      if (coords) geocodificadosTexto++;
    }

    if (coords) {
      await updateDoc(doc(db, 'clients', docSnap.id), {
        lat: coords.lat,
        lng: coords.lng,
        geocodificadoEn: new Date().toISOString()
      });
    } else {
      fallidos++;
    }

    await new Promise(r => setTimeout(r, 150));
  }

  console.log('\n--- Resumen ---');
  console.log(`Geocodificados desde texto: ${geocodificadosTexto}`);
  console.log(`Resueltos desde link de Maps: ${resueltosDeLink}`);
  console.log(`Ya tenian coordenadas: ${yaTenianCoords}`);
  console.log(`Saltados (sin direccion): ${saltadosSinDireccion}`);
  console.log(`Fallidos: ${fallidos}`);
}

procesarTodos().then(() => {
  console.log('\nListo.');
  process.exit(0);
});
