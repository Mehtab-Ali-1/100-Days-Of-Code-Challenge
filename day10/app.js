// DAY 10
// Q28
var age = 24;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Q29
var furitsName = ["banana", "mango", "grapes"];
if (furitsName.includes("banana")) {
    console.log("You really like banana");
}
if (furitsName.includes("mango")) {
    console.log("You really like mango");
}
if (furitsName.includes("grapes")) {
    console.log("You really like grapes");
}
// Q30
var users = ["admin", "user1", "user2", "user3", "user4",];
users.forEach(function (user) {
    if (user === "admin") {
        console.log("Hello admin,would you like to see a status report.");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging again."));
    }
});
