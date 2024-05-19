// DAY13
// Q37
function Tshirt(size : string = `medium`,message : string = `I love typescript.`){
    console.log(`Making a ${size} size Tshirt with the message of ${message}`);
}
Tshirt();
Tshirt(`large`);
Tshirt(`small`,`Coding is life`);
// Q38
function city(city : string =`Karachi`,country : string =`Pakistan.`){
    console.log(`${city} is in ${country}`);
}
city();
city(`Lahore`);
city(`Tokyo`,`Japan`);
// Q39
function cityNames (city:string , country:string): string{
    return `${city} , ${country}.`
}
console.log(cityNames(`Karachi`,`Pakistan`));
console.log(cityNames(`Tokyo`,`Japan`));
