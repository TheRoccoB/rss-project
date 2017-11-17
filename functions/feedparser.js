var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed

module.exports = (url) =>{
    return new Promise((resolve, reject) => {
        var req = request(url);
        var feedparser = new FeedParser(); //[options]
        var items = [];
        req.on('error', function (error) {
            // handle any request errors
        });

        req.on('response', function (res) {
            var stream = this; // `this` is `req`, which is a stream

            if (res.statusCode !== 200) {
                this.emit('error', new Error('Bad status code'));
            }
            else {
                stream.pipe(feedparser);
            }
        });

        feedparser.on('error', function (error) {
            reject(error);
        });

        feedparser.on('readable', function () {
            // This is where the action is!
            var stream = this; // `this` is `feedparser`, which is a stream
            var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
            var item = stream.read();
            console.log('ccc')
            while (item){
                items.push(item);
                item = stream.read();
            }
        });
        feedparser.on('done', function(){
            console.log('ddd')
            resolve({meta: this.meta, items});
        });
    });
};
