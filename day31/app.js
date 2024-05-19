// DAY 31
// Q91
var favouriteFruit = ["apple", "mango", "banana"];
favouriteFruit.push("orange");
console.log(favouriteFruit);
// Q92
var fruits = ["apple", "mango", "banana"];
function removeLastElement(fruits) {
    return fruits.pop();
}
console.log(removeLastElement(fruits));
console.log(fruits);
// Q93
var fruits1 = ["apple", "mango", "banana"];
function replaceBananaWithCherry(fruits1) {
    var index = fruits.indexOf("mango");
    if (index !== -1)
        fruits1[index] = "cherry";
}
replaceBananaWithCherry(fruits1);
console.log(fruits1);
