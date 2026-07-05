// comparar_contactos.js
// Uso: node comparar_contactos.js
//
// Lee filtrados.json (generado por parsear_contactos.js), compara los
// telefonos contra los clientes que ya existen en Firestore, y muestra
// SOLO los que parecen nuevos (no estan en la base). No sube nada todavia.

const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// Normaliza un telefono para poder comparar (saca espacios, guiones, +54, 9, etc)
function normalizarTelefono(tel) {
  if (!tel) return '';
  let limpio = tel.replace(/[^\d]/g, ''); // deja solo numeros
  if (limpio.startsWith('54')) limpio = limpio.substring(2);
  if (limpio.startsWith('9')) limpio = limpio.substring(1);
  return limpio;
}

async function main() {
  const filtradosPath = path.join(__dirname, 'filtrados.json');
  if (!fs.existsSync(filtradosPath)) {
    console.error('No encuentro filtrados.json. Corre primero parsear_contactos.js');
    process.exit(1);
  }

  const filtrados = JSON.parse(fs.readFileSync(filtradosPath, 'utf8'));

  console.log('Descargando clientes existentes de Firestore...');
  const snapshot = await db.collection('clients').get();

  const telefonosExistentes = new Set();
  snapshot.forEach(doc => {
    const data = doc.data();
    const posiblesCampos = [data.telefono, data.phone, data.tel, data.whatsapp];
    posiblesCampos.forEach(t => {
      if (t) telefonosExistentes.add(normalizarTelefono(t));
    });
  });

  console.log(`Clientes existentes en Firestore: ${snapshot.size}`);
  console.log(`Telefonos unicos existentes: ${telefonosExistentes.size}`);

  const nuevos = [];
  const yaExisten = [];

  filtrados.forEach(c => {
    const tieneMatch = c.telefonos.some(t => telefonosExistentes.has(normalizarTelefono(t)));
    if (tieneMatch) {
      yaExisten.push(c);
    } else {
      nuevos.push(c);
    }
  });

  console.log(`\nYa existen en la base (se saltean): ${yaExisten.length}`);
  console.log(`CANDIDATOS NUEVOS para revisar: ${nuevos.length}\n`);

  nuevos.forEach((c, i) => {
    console.log(`${i + 1}. ${c.nombre} - Tel: ${c.telefonos.join(' / ')}`);
  });

  const outPath = path.join(__dirname, 'candidatos_nuevos.json');
  fs.writeFileSync(outPath, JSON.stringify(nuevos, null, 2), 'utf8');
  console.log(`\nGuardado en: ${outPath}`);
  console.log('\nRevisa la lista. Si hay nombres que reconoces como YA BORRADOS antes,');
  console.log('avisame los numeros de la lista (ej: "sacar el 3, 15 y 22") y te doy');
  console.log('el script final de carga sin esos.');

  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
