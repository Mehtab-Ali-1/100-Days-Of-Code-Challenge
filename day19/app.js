// DAY 19
// Q55
var numbers1 = [1, 2, 3, 4, 5];
var doubleNumber = numbers1.map(function (number) { return number * 2; });
console.log(doubleNumber);
// Q56
var mixedArray = ["fahad", "Kashan", 1, 58, true, "Ali", "Ahmed"];
var Strings = mixedArray.filter(function (sting) { return typeof sting === 'string'; });
console.log(Strings);
// Q57
var grades = [33, 64, 88, 46, 28, 97];
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrades);
