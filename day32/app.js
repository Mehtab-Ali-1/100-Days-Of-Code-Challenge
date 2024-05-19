// DAY 32
// Q94
var words = ["hello", "world", "hello world", "typescript"];
var length1 = words.map(function (name) { return name.length; });
console.log(length1);
// Q95
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [5, 3, 4, 55, 15, 55, 38];
console.log(filterGreaterThanTen(numbers));
// Q96
function calculateNum(numbers2) {
    return numbers2.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers2 = [1, 2, 3, 4, 5];
console.log(calculateNum(numbers2));
