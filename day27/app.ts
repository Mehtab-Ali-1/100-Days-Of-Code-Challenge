// DAY 27
// Q79
let car1 = {
    name : "toyota",
    model: "corolla",
    year: 2020
};
console.log(car1.model);
// Q80
let car2 = {
    name : "toyota",
    model: "corolla",
    year: 2020,
    color: "black",
};
car2.color = "blue";
car2.year = 2021;
console.log(car2);
// Q81
function logObjectProperty ( obj:{[key:string]:any}){
    for (let property in obj){
        console.log(`${property} : ${obj[property]}`);  
    }
}
logObjectProperty({make:"car",model:"corolla",year:2020});