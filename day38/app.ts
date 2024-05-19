// DAY 38
// Q112
const countries  = new Map<string,string>();
countries.set("USA","washington,D.C");
countries.set("france","paris");
countries.set("Japan","Tokyo");
console.log(countries);
// Q113
function logCapitalOfCanada (countries: Map<string,string>): void{
    if(countries.has("Canada")){
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }else{
        console.log("Canada is not in the map");        
    }
}
logCapitalOfCanada(countries);
// Q114
const students = new Map<number,string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach((name , id)=>{
    console.log(`\tStudent Id: ${id} \n\tName: ${name}`);
    
})