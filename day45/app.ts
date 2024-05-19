// DAY 45
// Q133
const person = {
    name: "Ahmed",
    age: 23,
    country: "Iceland"
};
const jsonString = JSON.stringify(person);
console.log(jsonString);
// Q134 
const jsonString1 = `{"name":"Ahmed","age":23,"country":"Iceland"}`;
const person1 = JSON.parse(jsonString1);
console.log(jsonString1);
// Q135
const person2 = {
    name: "Ahmed",
    age: 30,
    city: "Iceland",
  };
const jsonString2 = JSON.stringify(person2,null,2);
console.log(jsonString2);

  