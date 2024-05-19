// DAY 18
// Q52
var smartPhone = {
    make: "Samsung",
    model: "S22 Ultra",
    space: {
        storage: "256gb",
        screenSize: "6.5inches",
        batteryLife: "20hours"
    }
};
console.log(smartPhone);
// Q53
var developerSkills = {
    languages: ["Javasript", "typescript", "python"],
    frameWork: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
var languages = developerSkills.languages, frameWork = developerSkills.frameWork, tools = developerSkills.tools;
console.log("languages:".concat(languages[0], ",frameWork:").concat(frameWork[0], ",tools:").concat(tools[0]));
// Q54
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject = [key, value];
    return dynamicObject;
}
var userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
