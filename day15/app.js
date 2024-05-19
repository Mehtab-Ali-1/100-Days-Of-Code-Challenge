var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Q41
var magicians = ["Alice", "David", "Chris"];
function make_magic(magicians) {
    magicians.forEach(function (magic) {
        console.log(magic);
    });
}
make_magic(magicians);
// Q42
function show_magic(magicains) {
    for (var i = 0; i < magicains.length; i++) {
        magicians[i] = magicians[i] + "" + "make great";
    }
}
// DAY 15
// Q43
var magicians1 = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicains = [];
    magicians.forEach(function (magician) {
        greatMagicains.push("".concat(magician, " The great."));
    });
    return greatMagicains;
}
var greatMagicains = make_great(magicians.slice());
console.log("Original array.");
show_magic(magicians);
console.log("Show magicians.");
show_magic(greatMagicains);
// Q44
function make_sanswich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with ".concat(items.join(","), "."));
}
make_sanswich("ham", "cheese");
make_sanswich("turkey", "lettuce", "tomato");
make_sanswich("avocado", "sprouts", "mustard", "mayo");
function createCar(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var makeCar = createCar("toyota", "corolla", { color: "black", year: "2024" });
console.log(makeCar);
