// var myMapKey = config.MAP_KEY
// `https://maps.googleapis.com/maps/api/geocode/json?key=${myMapKey}&address=1301 lombard street philadelphia`

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Bikram'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userObj) => {
    console.log(userObj);
});