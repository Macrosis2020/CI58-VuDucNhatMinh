function sum(a, b) {
    return a + b;
}
let sumValue = sum(1, 2);
console.log(sumValue);

const sub = function (a, b) {
    return a - b;
}
console.log(sub(4, 2));
//Arrow Function
const multi = (a, b) => {
    return a * b;
}
console.log(multi(4, 5));
//Shorthand Return
const divide = (a, b) => a / b;
console.log(divide(3, 6));

const myMath = {};

myMath.sum = sum;
myMath.sub = () => a - b;
myMath.multi = multi;
myMath.divide = divide;

console.log(myMath.sum(2, 3));

//write a funct: Solve ax + b = 0
myMath.linear = (a, b) => {
    if (a === 0) {
        if (b === 0) {
            return "infinite roots";
        } else {
            return "no roots";
        }
    } else {
        return -b / a;
    }
}
console.log(myMath.linear(1, 2));
//write a funct: Solve ax^2 + bx + c = 0
myMath.quad = (a, b, c) => {
    if (a === 0) {
        return myMath.linear(b, c);
    } else {
        let delta = b ** 2 - 4 * a * c;
        if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return [x1, x2];
        } else if (delta === 0) {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            return x1;
        } else {
            return "no roots";
        }
    }
}
console.log(myMath.quad(1, 3, 2));
//write a funct: Calc the area of a triangle
myMath.triangleA = (h, l) => {
    return h * l / 2;
}
console.log(myMath.triangleA(3, 5));
const btnClickme = document.getElementById("clkme");
btnClickme.addEventListener('click', () => {
    console.log(this);
})

