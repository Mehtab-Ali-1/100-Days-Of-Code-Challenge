// DAY 49
// Q145
// This function accepts a callback function and invokes it with given arguments
function executeCallback(callBack, arg1, arg2) {
    callBack(arg1, arg2);
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b);
};
executeCallback(add, 3, 4);
// Q146
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
var filterNumbers = numbers.filter(function (num) { return num > 5; });
console.log(filterNumbers);
// Q147
function fetchData(callBack) {
    var error = new Error("failed to fetch data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callBack(null, data);
    }
    else {
        callBack(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data);
    }
});
