// DAY 18
// Q52
let smartPhone = {
    make: "Samsung",
    model: "S22 Ultra",
    space:{
        storage:"256gb",
        screenSize:"6.5inches",
        batteryLife:"20hours"
    }
};
console.log(smartPhone);
// Q53
let developerSkills = {
    languages : ["Javasript","typescript","python"],
    frameWork : ["React","Angular","Vue"],
    tools : ["Git","Webpack","Docker"],
}
let {languages,frameWork,tools}=developerSkills
console.log(`languages:${languages[0]},frameWork:${frameWork[0]},tools:${tools[0]}`);
// Q54
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    dynamicObject=[key , value];
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);