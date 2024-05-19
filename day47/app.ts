// DAY 47
                         // Q 139
// Reserved word: let - used to declare a block-scoped local variable
let count = 0;
// Reserved word: if - used to execute a block of code if a specified condition is true
if (count > 0){
    console.log(`count is greater than 0.`);
}
// Reserved word: return - used to exit a function and return a value from that function
function add(a,b){
    return a + b
}
console.log(add(3,3));
                         // Q 140
// Attempting to use a reserved word as a variable name
// let if = 5; this line would cause a SyntaxError
console.log(
    `Using a reserved word as a variable name cause syntax error.`
);
                         // Q 141
// Example use of the 'await' reserved word in asynchronous JavaScript
async function fatchData(){
    // const data = await fetchSomething();
    // console.log(data);
 // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);