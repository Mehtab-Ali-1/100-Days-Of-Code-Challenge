// generic function with different types
function returnTypeValue(val) {
    return val;
}
var value1 = returnTypeValue(100);
var value2 = returnTypeValue("100");
console.log("Number Value: ".concat(value1));
console.log("String Value: ".concat(value2));
// Arrow Function with Generics
var arrowFunction = function (arrowVal) { return arrowVal; };
console.log(arrowFunction(100));
// Generic function multipul types
function returnMultipul(valOne, valTwo) {
    return "The first value is ".concat(valOne, " and the second value is ").concat(valTwo);
}
console.log(returnMultipul("Ali", 1000));
console.log(returnMultipul("Ahmed", true));
// ******** Generic Class *********
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    User.prototype.show = function (mess) {
        console.log("".concat(mess, " - ").concat(this.value));
    };
    return User;
}());
var user11 = new User("Hello");
console.log(user11.value);
user11.show("Hi");
