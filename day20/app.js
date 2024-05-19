// DAY 20
// Q58
function averageScore() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (sum, score) { return sum + score; }, 0);
    return total / score.length;
}
console.log(averageScore(28, 36, 53, 63));
// Q59
function makeAdder(adder) {
    return function (number) {
        return number + adder;
    };
}
var addValue = makeAdder(5);
console.log(addValue(10));
// Q60
var userProfile = (function () {
    name: "john";
    age: 30;
    return {
        displayInfo: function () {
            console.log("name: ".concat(name, " age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
