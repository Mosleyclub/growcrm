// subir_contactos.js
// Uso: node subir_contactos.js
//
// Lee candidatos_nuevos.json y los sube a Firestore, coleccion 'clients'.
// Cada uno queda marcado con importBatch para poder identificarlos y
// borrarlos en bloque despues si hace falta.

const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const IMPORT_BATCH = `whatsapp_${new Date().toISOString().slice(0, 10)}`;

async function main() {
  const candidatosPath = path.join(__dirname, 'candidatos_nuevos.json');
  if (!fs.existsSync(candidatosPath)) {
    console.error('No encuentro candidatos_nuevos.json. Corre primero comparar_contactos.js');
    process.exit(1);
  }

  const candidatos = JSON.parse(fs.readFileSync(candidatosPath, 'utf8'));

  console.log(`Subiendo ${candidatos.length} clientes nuevos a Firestore...`);
  console.log(`Etiqueta de este lote: ${IMPORT_BATCH}\n`);

  let subidos = 0;

  for (const c of candidatos) {
    const telefonoPrincipal = c.telefonos[0] || '';

    await db.collection('clients').add({
      name: c.nombre,
      phone: telefonoPrincipal,
      phone_display: telefonoPrincipal,
      importBatch: IMPORT_BATCH,
      createdAt: FieldValue.serverTimestamp(),
      lastModified: FieldValue.serverTimestamp()
    });

    subidos++;
    console.log(`${subidos}/${candidatos.length} - ${c.nombre}`);
  }

  console.log(`\nListo. Se subieron ${subidos} clientes nuevos.`);
  console.log(`\nSi despues necesitas borrar este lote entero, avisame el codigo:`);
  console.log(IMPORT_BATCH);

  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
