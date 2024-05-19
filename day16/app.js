var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// DAY 16
// Q46
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    }
};
laptop.describe();
// Q47
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "Macbook Pro", year: 2020 },
    { make: "Dell", model: "XPS 15", year: 2021 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
// Q48
var prices1 = [1200, 1500, 1100];
var prices2 = [1200, 1500, 1100];
var combinePrices = __spreadArray(__spreadArray([], prices1, true), prices2, true).sort(function (a, b) { return a - b; });
console.log(combinePrices);
