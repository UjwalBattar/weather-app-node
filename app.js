const config = require('./config.js');
var myMapKey = config.config.MAP_KEY;
const request = require('request');

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${myMapKey}&address=1301%20lombard%20street%20philadelphia`,
    json: true
}, (error, response, body) => {
    console.log(body);
});