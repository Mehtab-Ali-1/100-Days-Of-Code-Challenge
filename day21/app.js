// DAY 21
// Q61
var vehicalType;
(function (vehicalType) {
    vehicalType[vehicalType["car"] = 0] = "car";
    vehicalType[vehicalType["truck"] = 1] = "truck";
    vehicalType[vehicalType["Motorcycle"] = 2] = "Motorcycle";
})(vehicalType || (vehicalType = {}));
console.log(vehicalType.truck);
var students = {
    name: "fahad",
    age: 30,
    course: ["web development", "graphic design", "design"]
};
console.log(students);
var circle = {
    kind: "circle",
    radius: 10
};
var rectangle = {
    kind: "rectangle",
    width: 20,
    height: 30
};
console.log(circle);
console.log(rectangle);
