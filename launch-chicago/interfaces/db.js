const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const firebase = require('firebase-admin')
const serviceAccount = require('./key.json');

module.exports = {
  addApplication,
  getApplication
}

if (!firebase.apps.length) {
  firebase.initializeApp({credential: cert(serviceAccount)});
}else {
  firebase.app(); // if already initialized, use that one
}

const db = getFirestore();

async function addApplication(app, id) {
  console.log("addApplication")
  console.log(app);
  const docRef = db.collection('application').doc(`${id}`);
  //app.id = id;
  await docRef.set(app);
  
}

async function getApplication(id) {
  console.log("getApplication")
  console.log(id);
  const docRef = db.collection('application').doc(`${id}`);
  const doc = await docRef.get();
  return doc.data();
}