import * as v1 from 'firebase-functions/v1';
import * as v2 from 'firebase-functions/v2';
import admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

export const newUserSignUp = v1.auth.user().onCreate((user) => {
  return db.collection('users').doc(user.uid).set({
    email: user.email,
    displayName: null,
  });
});

export const userDeleted = v1.auth.user().onDelete((user) => {
  const doc = db.collection('users').doc(user.uid);
  return doc.delete();
});

// export const addGame = v2.https.onCall((req) => {
//   if (!req.auth) {
//     throw new v2.https.HttpsError(
//       'unauthenticated',
//       'only authenticated users can update data',
//     );
//   }
// other checks -- determine if connections data or strands and update global params

// db.collection('users').doc(req.auth.uid).collection('games').add
// });
