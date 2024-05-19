// DAY 17
// Q49
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
logHobbies("reading", "coding", "cycling");
// Q50
var myRoutine = "My ideal day would involve:\n1. Walking up early and going for a job.\n2. Spending a few hour coding on my personal project.\n3. Ending the day by reading a good book.";
console.log(myRoutine);
// Q51
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(5, 7));
