const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function main() {
  const snapshot = await db.collection("clients").get();
  const porId = {};
  snapshot.forEach(doc => {
    const data = doc.data();
    const id = String(data.id);
    if (!porId[id]) porId[id] = [];
    porId[id].push({ docId: doc.id, name: data.name, deleted: !!data.deleted });
  });

  let encontrados = 0;
  for (const id in porId) {
    if (porId[id].length > 1) {
      encontrados++;
      console.log(`\nID DUPLICADO: ${id}`);
      porId[id].forEach(c => console.log(`  - docId: ${c.docId} | name: ${c.name} | deleted: ${c.deleted}`));
    }
  }

  if (encontrados === 0) {
    console.log("No se encontraron IDs duplicados.");
  } else {
    console.log(`\nTotal de IDs duplicados: ${encontrados}`);
  }
}

main().catch(e => console.error(e));