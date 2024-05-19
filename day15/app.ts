// Q41
let magicians: string[] = ["Alice", "David", "Chris"];
function make_magic(magicians: string[]){
    magicians.forEach(magic =>{
        console.log(magic);
    });
}
make_magic(magicians);
// Q42
function show_magic(magicains : string[]){
    for (let i=0; i<magicains.length;i++){
        magicians[i]= magicians[i] + `` + `make great`
    }
}





// DAY 15
// Q43
let magicians1: string[] = ["Alice", "David", "Chris"];
function make_great(magicians : string[]) : string[] {
    let greatMagicains:string[] =[];
    magicians.forEach(magician =>{
    greatMagicains.push(`${magician} The great.`);
    });
    return greatMagicains;
}
let greatMagicains = make_great(magicians.slice());
console.log(`Original array.`);
show_magic(magicians);
console.log(`Show magicians.`);
show_magic(greatMagicains);
// Q44
function make_sanswich(...items : string[]){
    console.log(`Making a sandwich with ${items.join(`,`)}.`);
}
make_sanswich(`ham`,`cheese`);
make_sanswich(`turkey`,`lettuce`,`tomato`);
make_sanswich(`avocado`,`sprouts`,`mustard`,`mayo`);
// Q45
type car = {
    manufacturer : string,
    model : string,
    [key : string]:any;
}
function createCar (manufacturer:string,model:string,optional:Record<string,any>):car{
    return{
        manufacturer,
        model,
        ...optional
    };
}
const makeCar:car = createCar("toyota","corolla",{color:"black",year:"2024"});
console.log(makeCar);
