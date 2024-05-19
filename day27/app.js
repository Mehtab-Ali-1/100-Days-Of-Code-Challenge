// DAY 27
// Q79
var car1 = {
    name: "toyota",
    model: "corolla",
    year: 2020
};
console.log(car1.model);
// Q80
var car2 = {
    name: "toyota",
    model: "corolla",
    year: 2020,
    color: "black",
};
car2.color = "blue";
car2.year = 2021;
console.log(car2);
// Q81
function logObjectProperty(obj) {
    for (var property in obj) {
        console.log("".concat(property, " : ").concat(obj[property]));
    }
}
logObjectProperty({ make: "car", model: "corolla", year: 2020 });
