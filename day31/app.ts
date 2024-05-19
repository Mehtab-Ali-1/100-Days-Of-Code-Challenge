// DAY 31
// Q91
 let favouriteFruit : string[]=["apple","mango","banana"];
favouriteFruit.push("orange");
console.log(favouriteFruit);

// Q92
let fruits: string[]= ["apple","mango","banana"];
function removeLastElement<T>(fruits: T[] ) : T | undefined{
    return fruits.pop()
}
console.log(removeLastElement(fruits));
console.log(fruits);

// Q93
let fruits1 : string[]=["apple","mango","banana"];
function replaceBananaWithCherry (fruits1 : string[]): any{
    const index = fruits.indexOf("mango");
    if(index !== -1) fruits1[index]= "cherry"
}
replaceBananaWithCherry(fruits1);
console.log(fruits1);

