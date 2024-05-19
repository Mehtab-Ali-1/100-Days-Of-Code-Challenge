// ********* Type Annotation in arrays **********
//       ********* With Strings **********

let fruits : string[] = ["Apple","Mango","Banana"];
for(let i = 0; i <fruits.length; i++){
    console.log(`Fruits: ${fruits[i].toUpperCase()}`);
}
//       ********* With Numbers **********
let numbers : number[] = [1,2,3,4,5];
let both : (string | number)[] = [1,2,"3",5,4,"6"];
for (let i = 0; i<both.length; i++){
    console.log(`String & Numbers: ${both[i]}`);
}
