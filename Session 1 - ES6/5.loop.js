const arr = [1, 2, 3];
const obj = {foo: "foo value", bar: "bar value"};

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// for (let i of arr) {
//     console.log(i);
// }

for (let key in obj) {
    console.log(key);
}