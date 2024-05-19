// DAY 12
// Q34
var pizzas = ["fajita", "tikka", "vegetable"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
// Q35
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
// Q36
function makeTshirt(size, message) {
    console.log("Making a ".concat(size, " size T-shirt with the message of ").concat(message));
}
makeTshirt("medium", "Code is life");
