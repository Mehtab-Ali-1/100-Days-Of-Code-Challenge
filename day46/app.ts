// DAY 46
// Q136
for (let i = 1; i <= 5; i++){
    console.log(`Iteration ${i}, i value:, i`);
}
// Q137
try{
    throw new Error("Something went wrong"); 
}catch(error){
    console.log(error.message);
}
// Q138
console.log("Before breakpoint");
console.log(
    "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");

