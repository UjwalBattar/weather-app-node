var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(2, 3).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 44);
}).then((res) => {
    console.log('Should be 49', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('it worked:');
//         reject('it did not worked');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('success:', message);
// }, (errorMessage) => {
//     console.log('Error:',
//         errorMessage);

// });