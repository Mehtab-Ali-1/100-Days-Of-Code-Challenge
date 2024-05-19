// DAY 05
// Q13  
// Method 01
var transportation = ["Motorcycle", "Car", "Heavybike"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i]));
}
// Method 02
var transportation1 = ["Motorcycle", "Car", "Heavybike"];
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var name_1 = transportation_1[_i];
    console.log("I would like to own a ".concat(name_1));
}
// Method 03
var transportation2 = ["Motorcycle", "Car", "Heavybike"];
transportation2.forEach(function (anyname) {
    console.log("I would like to own a ".concat(anyname));
});
// Q14
var friends = ["Ahmed", "Naveed", "Javed"];
friends.forEach(function (anyname) {
    console.log("Hello ".concat(anyname, ", would you like to join me for dinner."));
});
// Q15
var friends1 = ["Ahmed", "Naveed", "Javed"];
var unableToAttend = "Ahmed";
console.log("".concat(unableToAttend, ", can't make it to dinner."));
var newGuest = "Ali";
friends1[friends1.indexOf(unableToAttend)] = newGuest;
friends1.forEach(function (anyname) {
    console.log("Hello ".concat(anyname, ", would you like to join me for dinner."));
});
