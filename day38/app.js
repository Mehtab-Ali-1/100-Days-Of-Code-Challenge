// DAY 38
// Q112
var countries = new Map();
countries.set("USA", "washington,D.C");
countries.set("france", "paris");
countries.set("Japan", "Tokyo");
console.log(countries);
// Q113
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the map");
    }
}
logCapitalOfCanada(countries);
// Q114
var students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach(function (name, id) {
    console.log("\tStudent Id: ".concat(id, " \n\tName: ").concat(name));
});
