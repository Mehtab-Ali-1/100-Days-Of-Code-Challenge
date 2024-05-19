// DAY 26
// Q76
// Function Parameters and Return Values
function addNumber (num1 : number, num2 : number): number{
    return num1 + num2;
}
console.log(addNumber(3,4));
// Q77
// Default Parameters
function greetUser(name : string = "Ahmed"){
    console.log(`Hello ${name}`);
}
greetUser("Ali");
// Q78
function squareDeclaration (number : number): number{
    return number * number;
}
let  squareExpression = function(number : number){
    return number * number;
}
console.log(squareDeclaration(2));
console.log(squareExpression(2));