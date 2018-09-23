const config = require('../config.js');
var myMapKey = config.config.MAP_KEY;

const request = require('request');

var geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=${myMapKey}&address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitute: body.results[0].geometry.location.lng
            });
        }
    });
};


module.exports = {
    geocodeAddress
};