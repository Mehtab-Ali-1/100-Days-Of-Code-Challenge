var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// DAY 06
// Q16
var friends2 = ["Ahmed", "Naveed", "Javed"];
console.log("Great News! I found a bigger dinner table");
friends2.unshift("Amir");
friends2.splice(friends2.length / 2, 0, "Noman");
friends2.push("Kashif");
friends2.forEach(function (anyname) {
    console.log("Hello ".concat(anyname, ", would you like to join me for dinner"));
});
// Q17
var friends3 = ["Amir", "Ahmed", "Noman", "Naveed", "Javed", "Kashif"];
console.log("Unfortunately, I can invite only two person.");
while (friends3.length > 2) {
    var removeFriends = friends3.pop();
    console.log("Sorry ".concat(removeFriends, ", I can't invite you to dinner."));
}
friends3.forEach(function (friend) {
    console.log("Dear ".concat(friend, ", You are still invited you to dinner."));
});
friends3.splice(0, friends3.length);
console.log(friends3);
// Q18
var favPlaces = ["NewzZealand", "Australia", "IceLand", "Japan", "SwitzerLand"];
console.log("Orignal Order: ", favPlaces);
console.log("Alphabetical Order:", __spreadArray([], favPlaces, true).sort());
console.log("Orignal Order:", favPlaces);
console.log("Reverse Order:", __spreadArray([], favPlaces, true).sort().reverse());
console.log("Orignal Order:", favPlaces);
