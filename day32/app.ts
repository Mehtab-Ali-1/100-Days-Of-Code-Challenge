// DAY 32
// Q94
const words : string[]=[`hello`,`world`,`hello world`,`typescript`];
const length1: number[] = words.map( name => name.length);
console.log(length1);
// Q95
function filterGreaterThanTen (numbers : number[]) : number[]{
    return numbers.filter(number => number > 10);
}
const numbers : number[] = [5,3,4,55,15,55,38];
console.log(filterGreaterThanTen(numbers));
// Q96
function calculateNum ( numbers2 : number[]) : number{
    return numbers2.reduce((accumulator ,current) => accumulator + current , 0);
}
const numbers2 : number[] = [1,2,3,4,5];
console.log(calculateNum(numbers2));
