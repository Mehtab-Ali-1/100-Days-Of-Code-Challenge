// DAY 21
// Q61
enum vehicalType {
    car,
    truck,
    Motorcycle,
}
console.log(vehicalType.truck);
// Q62
interface student {
    name : string;
    age : number;
    course : string[];
}
let students : student = {
    name : "fahad",
    age : 30,
    course : ["web development","graphic design","design"]
}
console.log(students);
// Q63
type shape = {
    kind : "circle"|"rectangle";
    radius? : number;
    width? : number;
    height? : number;
}
let circle : shape = {
    kind : "circle",
    radius : 10
}
let rectangle : shape = {
    kind : "rectangle",
    width : 20,
    height : 30 
}
console.log(circle);
console.log(rectangle);