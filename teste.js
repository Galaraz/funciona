import { collection, getDocs } from "firebase/firestore";
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();

// const querySnapshot = await getDocs(collection(db, "paginas"));
// querySnapshot.forEach((doc) => {
// console.log(`${doc.id} => ${doc.data()}`);
// });  

const snapshot = await db.collection('paginas').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});