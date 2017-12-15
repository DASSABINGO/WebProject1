var request = require('request');
var config = require('config');

functions = {
    authorize : function(req, res){
        var header = config.consumer_key + ':' + config.consumer_secret;
        var encheader = new Buffer(header).toString(base64);
        var finalHeader = 'Basic ' + encheader;

        request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'},
    });
    }
}