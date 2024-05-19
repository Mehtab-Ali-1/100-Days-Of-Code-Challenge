// DAY 29
// Q85
function findCodePosition (str : string): number{
    return str.split(" ").indexOf("code")
}
console.log(findCodePosition("Learn code with javascript.")
);
// Q86
function hasJavascript (str : string) : boolean{
    return str.includes("javascript")
}
console.log(hasJavascript("Learn code with javascript."));
// Q87
function extractFirstTenCharts ( str: string):string{
    return str.substring(0,10)
}
console.log(extractFirstTenCharts("Hello coding world."));