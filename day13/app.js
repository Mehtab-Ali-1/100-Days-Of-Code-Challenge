// DAY13
// Q37
function Tshirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "I love typescript."; }
    console.log("Making a ".concat(size, " size Tshirt with the message of ").concat(message));
}
Tshirt();
Tshirt("large");
Tshirt("small", "Coding is life");
// Q38
function city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan."; }
    console.log("".concat(city, " is in ").concat(country));
}
city();
city("Lahore");
city("Tokyo", "Japan");
// Q39
function cityNames(city, country) {
    return "".concat(city, " , ").concat(country, ".");
}
console.log(cityNames("Karachi", "Pakistan"));
console.log(cityNames("Tokyo", "Japan"));
