var twit = require('twitter'),
    twitter = new twit({
        consumer_key: '92fYuIjTYFksHZ5g7PW94qsCX',
        consumer_secret: 'RatdOrMCzzyNF8QMs7hTMV9eFqxxivyOygyf1WlgMMB71dGl7I',
        bearer_token: ''
        /*access_token_key: '2269508659-zexCzGiSt4CwjzrWMgOx7wDkX4QwlaNI5EWSix1',
        access_token_secret: '7fSmiTT2GTGns4A1bZ5YUEEZqAMD5kOapKjITtbD8Bayk' */
    });
    module.exports = twitter;
    /*
    var count = 0, util = require('util');
    twitter.stream('filter', {track: 'love'}, function(stream){
        stream.on('data', function(data){
            console.log(util.inspect(data));
            stream.destroy();
            process.exit(0);
        });
    });*/