// DAY 43
// Q127
const traditionalFunction = function (a,b){
    return a+b
}
const arrowFunction = (a,b)=> a+b
console.log(traditionalFunction(3,5));
console.log(arrowFunction(3,5));
// Q128
const multipulParameters = (...numbers :number[]) =>
    numbers.reduce((a,b) => a*b , 1);
console.log(multipulParameters(3,3,2));
// Q129
const traditionalVsArrow = {
    value: "Hello World",
    traditionalFunction: function(){
    console.log(`traditional function:`,this.value);
},
arrowFunction: () => {
    console.log(`arrow function:`,this.value);
}
}
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();