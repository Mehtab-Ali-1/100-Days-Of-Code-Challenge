// DAY 28
// Q82
function stringLength(name) {
    return name.length;
}
console.log(stringLength("Ahmed"));
// Q83
function convertCase(name) {
    var uperCase = name.toUpperCase();
    var lowerCase = name.toLowerCase();
    console.log("upperCase:", uperCase, "lowerCase:", lowerCase);
}
convertCase("Hello Ali");
// Q84
function replaceJavascriptWithTypescript(name) {
    return name.replace(/JavaSript/g, "typeScript");
}
console.log(replaceJavascriptWithTypescript("I love JavaScript and JavaScript is best!."));
