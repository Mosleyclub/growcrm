// Solo lectura. Usa EXACTAMENTE la misma logica de matching que la app real
// (copiada tal cual del App.jsx) contra los titulos de manana, para saber
// sin ambiguedad que cliente le va a tocar a cada uno y en que estado esta.

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// --- Copiado tal cual del App.jsx real ---
function normalizeForMatch(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/growshop/g, "grow")
    .replace(/grow shop/g, "grow")
    .replace(/[^a-z0-9 ]/g, "");
}
function wordsOf(str) {
  return normalizeForMatch(str).split(/\s+/).filter(w => w.length >= 3);
}
function compactOf(str) {
  return normalizeForMatch(str).replace(/\s+/g, "");
}
function getMatchedClient(title, clients) {
  const titleWords = wordsOf(title);
  const titleCompact = compactOf(title);
  let bestClient = null;
  let bestScore = 0;
  let segundo = null;
  let segundoScore = 0;

  for (const c of clients) {
    const nameWords = [...new Set(wordsOf(c.name))];
    const nameCompact = compactOf(c.name);
    if (!nameWords.length) continue;

    const wordScore = nameWords.filter(w => titleWords.includes(w)).length;
    const compactMatch = nameCompact.length >= 5 && titleCompact.includes(nameCompact);
    const score = wordScore * 10 + (compactMatch ? nameCompact.length : 0);

    if (score > bestScore) {
      segundo = bestClient; segundoScore = bestScore;
      bestScore = score; bestClient = c;
    } else if (score > segundoScore) {
      segundo = c; segundoScore = score;
    }
  }
  return { match: bestScore > 0 ? bestClient : null, score: bestScore, segundo, segundoScore };
}
// --- fin de la logica copiada ---

// EDITAR: los titulos reales de los eventos de manana, tal cual aparecen en "Hoy"
const TITULOS_DE_MANANA = [
  "visitar bernal mint growshop",
  "visitar desde la raiz growshop",
  "visitar vatolux growshop",
  "visitar wood growshop",
  "visitar maria chuzena growshop",
  "visitar kaya growshop",
  "visitar wally growshop",
  "visitar casa jungla growshop",
  "visitar begui growshop",
  "visitar germinate growshop",
  "visitar mario growshop",
];

async function main() {
  const snapshot = await db.collection('clients').get();
  const clients = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.deleted) return;
    clients.push({ id: doc.id, name: data.name, lat: data.lat, lng: data.lng, address: data.address });
  });

  console.log(`Total de clientes activos: ${clients.length}\n`);
  console.log('='.repeat(70));

  TITULOS_DE_MANANA.forEach(titulo => {
    const { match, score, segundo, segundoScore } = getMatchedClient(titulo, clients);
    console.log(`\nTITULO: "${titulo}"`);
    if (!match) {
      console.log('  -> NO ENCONTRO NINGUN CLIENTE (esto rompe el recorrido, hay que revisar el nombre)');
      return;
    }
    const estado = (match.lat && match.lng) ? 'OK coordenada guardada' :
      (match.address && /^https?:\/\//i.test(match.address)) ? 'tiene LINK sin resolver (va a buscar por nombre)' :
      (match.address) ? 'tiene direccion de TEXTO sin geocodificar' :
      'SIN NADA (va a buscar por nombre, riesgo de fallar)';
    console.log(`  -> Matcheo con: "${match.name}" (id: ${match.id})  [puntaje: ${score}]`);
    console.log(`     Estado: ${estado}`);
    console.log(`     lat/lng: ${match.lat}, ${match.lng}`);
    console.log(`     address: ${match.address || '(vacio)'}`);
    if (segundo && segundoScore >= score * 0.7) {
      console.log(`  !! ALERTA: casi empata con "${segundo.name}" (puntaje: ${segundoScore}) - matching ambiguo, revisar nombres`);
    }
  });

  console.log('\n' + '='.repeat(70));
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
