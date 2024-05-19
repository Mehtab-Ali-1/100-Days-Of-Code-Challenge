// DAY 45
// Q133
var person = {
    name: "Ahmed",
    age: 23,
    country: "Iceland"
};
var jsonString = JSON.stringify(person);
console.log(jsonString);
// Q134 
var jsonString1 = "{\"name\":\"Ahmed\",\"age\":23,\"country\":\"Iceland\"}";
var person1 = JSON.parse(jsonString1);
console.log(jsonString1);
// Q135
var person2 = {
    name: "Ahmed",
    age: 30,
    city: "Iceland",
};
var jsonString2 = JSON.stringify(person2, null, 2);
console.log(jsonString2);
