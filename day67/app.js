// ********* Type Annotation in arrays **********
//       ********* With Strings **********
var fruits = ["Apple", "Mango", "Banana"];
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruits: ".concat(fruits[i].toUpperCase()));
}
//       ********* With Numbers **********
var numbers = [1, 2, 3, 4, 5];
var both = [1, 2, "3", 5, 4, "6"];
for (var i = 0; i < both.length; i++) {
    console.log("String & Numbers: ".concat(both[i]));
}
