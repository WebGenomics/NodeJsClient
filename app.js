//Request module
var request = require('request');

// Username and password which you get when you registerd on the WebGenomics
var username = 'demo';
var password = 'demo';
//The target website
var website  = 'facebook.com';

var options = {
    method: 'GET',
    url: 'http://websitegenomics.cloudapp.net/Classify/?uri=' + website,
    headers: {
        ////Accept header must be specified
        'Accept': 'application/json'
    },
    auth: {
        username: username,
        password: password,
        sendImmediately: true
    }

};


request(options, function(error, response, body){
    if (!error && response.statusCode == 200) {
        var result = JSON.parse(body);
        //Debug
        console.log(body);
    } else {
        console.error('statusCode:' + response.statusCode + ', error: ' + error);
    }
});
