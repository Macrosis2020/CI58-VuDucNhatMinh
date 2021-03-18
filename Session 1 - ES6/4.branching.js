const foo = {};
if (foo) {
    console.log("The foo is true");
} else {
    console.log("False");
}
//switch case
const bar = "bar2"
switch(bar) {
    case "bar":
        console.log("first case");
        break
    case "bar2":
        console.log("second case");
        break;
    default: 
        console.log("default");
}
//Tertiary Operator
let isEven = "even";
const x = 1;
// if (x%2 === 1) {
//     isEven = "odd";
// } else {
//     isEven = "even";
// }

isEven = x % 2 === 0 ? "even" : "odd";

console.log(isEven);