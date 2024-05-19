// DAY 11
// Q31
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users.");
}
else {
    //greet users
}
// Q 322
var currentUsers = ["user1", "admin", "user2", "user3", "user4"];
var newUsers = ["user5", "user6", "user7", "admin", "user3", "user4"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser === newUser; })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
// Q33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
