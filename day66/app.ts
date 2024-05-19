// ******* Union Types ********
let myAbout : string|number = "Ahmed";
myAbout = 23;
console.log(myAbout);
// ******* Literal Types ********
function setColors (color: "Red"|"Blue"|"Green"){
    if(color === "Red" ){
        console.log("Red color");
    }else if(color === "Blue"){
        console.log("Blue color");
    }else if(color === "Green"){
        console.log("Green color");
    }
};
setColors("Red");
setColors("Blue");
setColors("Green");
// ******* Null Types ********
function guests(names:string|null){
    if(names === null){
        console.log("Hello, Guest!");
    }else{
        console.log(`Hello, ${names}`);
    }
}
guests("Ahmed");
guests(null);