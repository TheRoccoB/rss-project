const functions = require('firebase-functions');
const feedparser = require('./feedparser');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {

    feedparser('https://blog.simmer.io/rss').then(({meta, items}) => {
        response.status(200).send((items));
    }).catch((e) => {
        response.status(500).send('error', e);
    });
    // response.status(200);
    // axios.get('https://blog.simmer.io/rss/').then((rssResponse) => {
    //     console.log(rssResponse);
    //     response.send(rssResponse.data.xyz);
    // }).catch((e) => {
    //     console.log('error getting RSS feed');
    //     response.status('404').send(e);
    // });
    // response.send("Hello from Firebase!!");
});

