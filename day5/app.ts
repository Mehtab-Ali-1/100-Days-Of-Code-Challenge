// DAY 05
// Q13  
// Method 01
let transportation : string[] = [`Motorcycle`,`Car`,`Heavybike`];
for (let i=0; i<transportation.length; i++){
    console.log(`I would like to own a ${transportation[i]}`);}
// Method 02
let transportation1 : string[] = [`Motorcycle`,`Car`,`Heavybike`];
for (let name of transportation){
    console.log(`I would like to own a ${name}`);}
// Method 03
let transportation2 : string[] =[`Motorcycle`,`Car`,`Heavybike`];
transportation2.forEach(anyname => {
    console.log(`I would like to own a ${anyname}`);
});
// Q14
let friends : string[] = [`Ahmed`,`Naveed`,`Javed`];
friends.forEach(anyname => {
    console.log(`Hello ${anyname}, would you like to join me for dinner.`);
});
// Q15
let friends1 : string[] = [`Ahmed`,`Naveed`,`Javed`];
let unableToAttend = "Ahmed";
console.log(`${unableToAttend}, can't make it to dinner.`);
let newGuest = "Ali";
friends1 [friends1.indexOf(unableToAttend)] = newGuest;
friends1.forEach(anyname =>{
    console.log(`Hello ${anyname}, would you like to join me for dinner.`);
});