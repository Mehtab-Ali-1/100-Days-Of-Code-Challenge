// DAY 43
// Q127
var traditionalFunction = function (a, b) {
    return a + b;
};
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(3, 5));
console.log(arrowFunction(3, 5));
// Q128
var multipulParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a * b; }, 1);
};
console.log(multipulParameters(3, 3, 2));
