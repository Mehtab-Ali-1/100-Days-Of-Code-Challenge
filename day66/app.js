// ******* Union Types ********
var myAbout = "Ahmed";
myAbout = 23;
console.log(myAbout);
// ******* Literal Types ********
function setColors(color) {
    if (color === "Red") {
        console.log("Red color");
    }
    else if (color === "Blue") {
        console.log("Blue color");
    }
    else if (color === "Green") {
        console.log("Green color");
    }
}
;
setColors("Red");
setColors("Blue");
setColors("Green");
// ******* Null Types ********
function guests(names) {
    if (names === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(names));
    }
}
guests("Ahmed");
guests(null);
