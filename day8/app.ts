// DAY 08
// Q22
let error : string[] =[`Ahmed`,`Ali`,`Owais`,`Daniyal`,`Atiq`];
console.log(error[5]);    //Showing undefined error: because arrays are 0 index;
error[4] = `Atiq`;        //Correcting the error;
// Q23
let car : string = "toyota";           //false
console.log(car === "subaru");         //false
console.log(car === "mercedes");       //false
console.log(car === "toyota");         //true
// Q24
// Equility with string
console.log(`apple` == `apple`);    //true
// console.log(`Apple` == `apple`);    //false
//Using the lowercase function 
console.log(`Apple`.toLocaleLowerCase() == `apple`);
// Numerica testing
console.log(5>6);               //false
console.log(10<11);             //true
//Using add and or operators
console.log(true && false);
console.log(true, false); // True
// Test whether an item in Array
let fruits=[`banana`,`mango`,`orange`];
console.log(`Is "banana" in fruits`);
console.log(!fruits.includes("banana"));
console.log(fruits.includes("banana"));
