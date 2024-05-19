// DAY 25
// Q73
function updatedValue (){
    let number = 10;
    console.log("first value:",number);
    
    number = 15;
    console.log("Update value:",number);
}
updatedValue();
// Q74
function swapValue(){
    let a = 5 , b = 10;
    console.log(`before swap a = ${a} , b = ${b}`);
    let temp = b;
    b = a;
    a = temp;
    console.log(`after swap a = ${a} , b = ${b}`);   
}
swapValue();
// Q75
// Compound Assignment Operators:
function useCompoundOperators(){
    let x = 4;
    console.log(`initial x`,x);
    x = x += 2;
    console.log(`after addition`,x);
    x = x -= 2;
    console.log(`after subtraction`,x);
    x = x *= 2;
    console.log(`after multiplication`,x);
    x = x /= 2;
    console.log(`after division`,x);   
}
useCompoundOperators();