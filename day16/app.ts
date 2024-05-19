// DAY 16
// Q46
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}`);
    }
};
laptop.describe();
// Q47
let laptops = [
    {make: "Dell",model: "XPS 15",year:2021},
    {make: "Apple",model: "Macbook Pro",year:2020},
    {make: "Dell",model: "XPS 15",year:2021} 
];
let [laptop1,laptop2]=laptops
console.log(laptop1);
console.log(laptop2);
// Q48
let prices1 =[1200,1500,1100];
let prices2 =[1200,1500,1100];
let combinePrices =[...prices1, ...prices2].sort((a, b,) => a - b );
console.log(combinePrices);