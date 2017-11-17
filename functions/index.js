const functions = require('firebase-functions');
const axios = require('axios');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {

 axios.get('https://blog.simmer.io/rsssss/').then((rssResponse) => {
  console.log(rssResponse);
  response.send(rssResponse.data.xyz);
 }).catch((e) => {
  console.log('error getting RSS feed');
  response.status('404').send(e);
 });
 // response.send("Hello from Firebase!!");
});
