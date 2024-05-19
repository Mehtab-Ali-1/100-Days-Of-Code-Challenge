// DAY 37
// Q109
var day = new Date();
if (day.getHours() < 12) {
    console.log("Good Morning");
}
// Q110
function assignGrade(score) {
    if (score >= 90) {
        return "A++";
    }
    else if (score >= 80) {
        return "A+";
    }
    else if (score >= 70) {
        return "A";
    }
    else if (score >= 60) {
        return "B";
    }
    else if (score >= 50) {
        return "C";
    }
    else if (score >= 40) {
        return "D";
    }
    else {
        return "E";
    }
}
console.log(assignGrade(38));
console.log(assignGrade(84));
// Q111
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(12));
console.log(categorizeAge(39));
