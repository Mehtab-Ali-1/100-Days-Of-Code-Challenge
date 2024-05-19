// DAY 23
// Q67
function addNumberAndString(num1 : number, num2String: string):number{
    return num1 + Number(num2String);
}
console.log(addNumberAndString(10,"20"));
// Q68
function multiplyDecimal (num1 : number, num2 : number) : number{
    return Math.round((num1 * num2) *100) /100;
}
console.log(multiplyDecimal (2.3, 4.1));
// Q69
function dividedAndRemainder (divide1 : number, divide2 :number):{quotient: number;remainder: number;}{
    let quotient = Math.floor(divide1 / divide2);
    let remainder = divide1 % divide2;
    return {quotient ,remainder}
}
console.log(dividedAndRemainder(20,10));