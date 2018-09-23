const config = require('../config.js');
var myWeatherKey = config.config.DARK_SKY_KEY;
const request = require('request');

const getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/${myWeatherKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        // if (!error && response.statusCode === 200) {
        //     callback(undefined, {
        //         temp: body.currently.temperature
        //     });
        // } else {
        //     callback('Unable to fetch weather');
        // }
        if (error) {
            callback('Unable to connect to Forecast.io servers');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.temperature
            });
        }
    });

};

module.exports.getWeather = getWeather;