// DAY 19
// Q55
let numbers1 = [1,2,3,4,5];
let doubleNumber = numbers1.map(number => number * 2);
console.log(doubleNumber);
// Q56
let mixedArray = [`fahad`,`Kashan`,1,58,true,`Ali`,`Ahmed`];
let Strings= mixedArray.filter(sting => typeof sting === 'string');
console.log(Strings);
// Q57
let grades = [33,64,88,46,28,97];
let averageGrades = grades.reduce((total, grade) => total + grade, 0) /grades.length;
console.log(averageGrades);