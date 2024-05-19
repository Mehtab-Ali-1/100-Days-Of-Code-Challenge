// DAY 26
// Q76
// Function Parameters and Return Values
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(3, 4));
// Q77
// Default Parameters
function greetUser(name) {
    if (name === void 0) { name = "Ahmed"; }
    console.log("Hello ".concat(name));
}
greetUser("Ali");
// Q78
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(2));
console.log(squareExpression(2));
