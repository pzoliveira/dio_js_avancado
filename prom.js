const dosome = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('first data');
        }, 1500);
});
const doother = () =>
    new Promise((resolve, reject) => {
        //throw new Error('Something went wrong!');
        setTimeout(function() {
            resolve('second data');
        }, 1000);
});

// Invoking one function that calls the other one in a sequence
/*
dosome()
    .then(data1 => {
        console.log(data1.split(''));
        return doother();
    })
    .then(data2 => {
        console.log(data2.split(''));
    })
    .catch(err => console.log('Ops', err));
*/

// Invoking all the functions simultaneously
/*
Promise.all([dosome(), doother()])
    .then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
    })
    .catch(err => console.log(err));
*/

// Concurrents
Promise.race([dosome(), doother()])
    .then(data => console.log(data.split('')));