const config = require('./config.js');
var myWeatherKey = config.config.DARK_SKY_KEY;

const request = require('request');

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        lat: {
            demand: true,
            alias: 'latitude',
            describe: 'Latitude to fetch weather for'
        },
        lng: {
            demand: true,
            alias: 'longitude',
            describe: 'Longitude to fetch weather for'
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);


request({
    url: `https://api.darksky.net/forecast/${myWeatherKey}/${argv.lat},${argv.lng}`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log('Temp: ', body.currently.temperature);
    } else {
        console.log('Unable to fetch weather');
    }
    // if (error) {
    //     console.log('Unable to connect to Forecast.io servers');
    // } else if (response.statusCode === 400) {
    //     console.log('Unable to fetch weather');
    // } else if (response.statusCode === 200) {
    //     console.log('Temp: ', body.currently.temperature);
    // }
});

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// // console.log(argv);

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//         return;
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//         return results;
//     }
// });