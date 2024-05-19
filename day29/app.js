// DAY 29
// Q85
function findCodePosition(str) {
    return str.split(" ").indexOf("code");
}
console.log(findCodePosition("Learn code with javascript."));
// Q86
function hasJavascript(str) {
    return str.includes("javascript");
}
console.log(hasJavascript("Learn code with javascript."));
// Q87
function extractFirstTenCharts(str) {
    return str.substring(0, 10);
}
console.log(extractFirstTenCharts("Hello coding world."));
