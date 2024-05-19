// DAY 28
// Q82
function stringLength (name : string): number{
    return name.length
}
console.log(stringLength("Ahmed"));
// Q83
function convertCase(name: String){
    let uperCase = name.toUpperCase();
    let lowerCase = name.toLowerCase();
    console.log("upperCase:",uperCase,"lowerCase:",lowerCase);
}
convertCase("Hello Ali");
// Q84
function replaceJavascriptWithTypescript(name: string):string{
    return name.replace(/JavaSript/g, "typeScript");
}
console.log(replaceJavascriptWithTypescript("I love JavaScript and JavaScript is best!."));