// DAY36
// Q106
function isLeapYear(year: number):boolean{
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}
console.log(isLeapYear(1800));
console.log(isLeapYear(2024));
// Q107
function isDivideByTwoOrThree(name: number): boolean{
    return name %2 ===0 && name % 3 === 0;
}
console.log(isDivideByTwoOrThree(12));
console.log(isDivideByTwoOrThree(14));
// Q108
function areStringEqualIgnoreCase(str1: string,str2: string):boolean{
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringEqualIgnoreCase("Hello", "hello"));
console.log(areStringEqualIgnoreCase("hello", "hello"));
console.log(areStringEqualIgnoreCase("Hello", "hlo"));
