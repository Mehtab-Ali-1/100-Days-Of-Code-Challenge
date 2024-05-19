// DAY 12
// Q34
let pizzas : string[] = [`fajita`,`tikka`,`vegetable`];
pizzas.forEach(pizza =>{
    console.log(`I like ${pizza} pizza.`);
});
// Q35
let animals : string[] = [`dog`,`cat`,`rabbit`];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
// Q36
function makeTshirt(size : string, message : string){
    console.log(`Making a ${size} size T-shirt with the message of ${message}`);
}
makeTshirt(`medium`,`Code is life`);
