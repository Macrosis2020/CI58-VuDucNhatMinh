// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log('World');
//         setTimeout(()=> {
//             console.log('this');
//             setTimeout(() => {
//                 console.log('is');
//                 setTimeout(() => {
//                     console.log('CI58');
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);
let arr = ['Hello', 'World', 'this', 'is', 'CI58'];
let i = 0;
const lol = setInterval(() => {
    if (i < 5) {
        console.log(arr[i]);
        i++;
    } else {
        clearInterval(lol);
    }
}, 1000);
//Promise
const delay1s = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}

delay1s(1000)
    .then(() => { console.log('Hello') })
    .then(() => {
        return delay1s(1000);
    })
    .then(() => { console.log('World') })
    .then(() => {
        return delay1s(1000);
    })
    .then(() => { console.log('this') })
    .then(() => {
        return delay1s(1000);
    })
    .then(() => { console.log('is') })
    .then(() => {
        return delay1s(1000);
    })
    .then(() => { console.log('hell') })
    .then(() => {
        return delay1s(1000);
    })