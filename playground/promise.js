var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('it worked:');
        reject('it did not worked');
    }, 2500);
});

somePromise.then((message) => {
    console.log('success:', message);
}, (errorMessage) => {
    console.log('Error:',
        errorMessage);

});