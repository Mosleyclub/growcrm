const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function main() {
  const snapshot = await db.collection("clients").get();
  let total = 0;
  let sinCoords = 0;
  let sinVisitas = 0;
  let conAddressPeroSinCoords = 0;

  snapshot.forEach(doc => {
    const d = doc.data();
    if (d.deleted) return;
    total++;
    if (!d.lat || !d.lng) sinCoords++;
    if (!d.visits || d.visits.length === 0) sinVisitas++;
    if (d.address && (!d.lat || !d.lng)) conAddressPeroSinCoords++;
  });

  console.log("Total clientes activos:", total);
  console.log("Sin coordenadas:", sinCoords);
  console.log("Con dirección pero SIN coordenadas:", conAddressPeroSinCoords);
  console.log("Sin visitas registradas:", sinVisitas);
}

main().catch(e => console.error(e));