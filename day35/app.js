// DAY 35
// Q103
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean());
// Q104
function getRandomHexColor() {
    var hex = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return hex;
}
console.log(getRandomHexColor());
// Q105
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
