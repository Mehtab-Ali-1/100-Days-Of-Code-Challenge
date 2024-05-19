// DAY 06
// Q16
let friends2 : string[] = [`Ahmed`,`Naveed`,`Javed`];
console.log(`Great News! I found a bigger dinner table`);
friends2.unshift(`Amir`);
friends2.splice(friends2.length / 2,0, `Noman`);
friends2.push(`Kashif`);
friends2.forEach(anyname =>{
    console.log(`Hello ${anyname}, would you like to join me for dinner`);
});
// Q17
let friends3 : string[] = [`Amir`,`Ahmed`,`Noman`,`Naveed`,`Javed`,`Kashif`];
console.log(`Unfortunately, I can invite only two person.`);
while (friends3.length > 2){
    let removeFriends = friends3.pop();
    console.log(`Sorry ${removeFriends}, I can't invite you to dinner.`);
}
friends3.forEach(friend =>{
    console.log(`Dear ${friend}, You are still invited you to dinner.`);
});
friends3.splice(0,friends3.length);
console.log(friends3);
// Q18
let favPlaces : string[] = [`NewzZealand`,`Australia`,`IceLand`,`Japan`,`SwitzerLand`];
console.log(`Orignal Order: `,favPlaces);
console.log("Alphabetical Order:",[...favPlaces].sort());
console.log(`Orignal Order:`,favPlaces);
console.log(`Reverse Order:`,[...favPlaces].sort().reverse());
console.log(`Orignal Order:`,favPlaces);
