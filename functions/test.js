// const cheerio = require('cheerio');
// const feedparser = require('./feedparser.js');
// // const
// console.log('xxx')
// feedparser('https://blog.simmer.io/rss/').then(({meta, items}) => {
//
//     console.log('it', items);
//     const processedItems = items.map((item) => {
//         const $ = cheerio.load(item.description);
//         return {img: $('img:first').attr('src'), description:$.text()};
//     });
//     console.log(processedItems);
//
// }).catch(e => {console.log( 'xxx',  e);});
// console.log('yyy');

const feedparser = require('feedparser-promised');

const url = 'http://feeds.feedwrench.com/JavaScriptJabber.rss';

feedparser.parse(url).then( (items) => {
    items.forEach(item => console.log('title:', item.description));
}).catch(error => console.error('error: ', error));