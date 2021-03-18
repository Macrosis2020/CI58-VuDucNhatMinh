const myMath = {
    sum: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
};

function multi(a, b) {
    return a * b;
}
function pow(a, b) {
    return a ** b;
}
export default myMath; //Default Export
//ONLY USE EXPORT DEFAULT ONCE
export {multi, pow}; //Named Export