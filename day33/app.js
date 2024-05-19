// DAY 33
// Q97
function getCurrentDateFormatted() {
    var now1 = new Date();
    var day = String(now1.getDate()).padStart(2, "0");
    var month = String(now1.getMonth() + 1).padStart(2, "0");
    var year = now1.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted());
// Q98
function daysUntilNewYear() {
    var todays = new Date();
    var newYear = new Date(todays.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - todays.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " " + "days left until next new year");
// Q99
function getNextBirthday(month, day) {
    var todays = new Date();
    var year = todays.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < todays) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthDay = getNextBirthday(14, 5);
console.log("Your next birthday is on " + nextBirthDay.toLocaleDateString());
