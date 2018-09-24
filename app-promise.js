const config = require('./config.js');
var myMapKey = config.config.MAP_KEY;
var myWeatherKey = config.config.DARK_SKY_KEY;

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${myMapKey}&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${myWeatherKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It is currently ${temperature} degrees fahrenheit.`);
    console.log(`It feels like ${apparentTemperature} degrees fahrenheit`);
}).catch((error) => {
    if (error.code === 'ECONNREFUSED') {
        console.log('Unable to connect to API server');
    } else {
        console.log(error.message);
    }
});

// load in more information (hi-lo temps, chance of percipitation)
// default weather location