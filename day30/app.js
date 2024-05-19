// DAY 30 
// Q88
function roundToNearestInteger(n) {
    return Math.round(n);
}
console.log(roundToNearestInteger(0.4));
console.log(roundToNearestInteger(3.8));
// Q89
function convertStringToNumber(str) {
    return parseFloat(str);
}
console.log(convertStringToNumber("10.9"));
console.log(convertStringToNumber("356"));
// Q90
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("hello"));
console.log(isValueNaN(786));
