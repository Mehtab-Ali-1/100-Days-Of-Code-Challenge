// *****************  interface  *******************
interface person1 {
    name : string;
    age : number;
}
let john : person1 = {
    name : "Ahmed",
    age : 23
}
// *****************  interface method and parameters  *******************
interface person2 {
    name : string;
    age : number;
    greet (message : string): void;
}
const ali : person2 = {
    name : "Ali",
    age : 24,
    greet(message : string){
        console.log(`${this.name} says: ${message}`);
    }
}
ali.greet("Hello Typescript");

// *****************  type alias VS interface  *******************
// *************************  type   *****************************
type result1 = {
    name : string;
    age : number;
    height : number;
}
type result11 = result1 &{
    weight : number;
}
let practical1 : result11 = {
    name : "Ali",
    age : 23,
    height : 5.5,
    weight : 55
}
// *************************  interface   *****************************
interface result2 {
    name : string;
    age : number;
    height : number;
}
interface result2 {
    weight : number
}
let practical2 : result2 = {
    name : "Ahmed",
    age : 24,
    height : 5.6,
    weight : 56
}

