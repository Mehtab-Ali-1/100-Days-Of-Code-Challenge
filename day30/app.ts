// DAY 30 
// Q88
function roundToNearestInteger(n: number):number{
    return Math.round(n);
}
console.log(roundToNearestInteger(0.4));
console.log(roundToNearestInteger(3.8));
// Q89
function convertStringToNumber(str: string): number{
    return parseFloat(str);
}
console.log(convertStringToNumber("10.9"));
console.log(convertStringToNumber("356"));
// Q90
function isValueNaN(value: any): boolean{
    return isNaN(value);
}
console.log(isValueNaN("hello"));
console.log(isValueNaN(786));