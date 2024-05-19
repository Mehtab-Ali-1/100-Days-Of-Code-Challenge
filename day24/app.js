// DAY 24
// Q70
function printNumberWithLoop() {
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
}
printNumberWithLoop();
// Q71
// With let
var age1 = 25;
age1 = 26;
console.log(age1);
//  With const
var age2 = 11;
try {
    // Remove this line if you don't want to reassign a value to age2
    // age2 = 12;
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
// Q72
{
    var blockLet = "visible";
    var blockConst = "also visible";
    console.log(blockLet);
    console.log(blockConst);
}
// try{
//     console.log(blockLet);    
// }catch (error){
//     console.log("`blockLet` is not accessible outside the block.");   
// }
// try{
//     console.log(blockConst);    
// }catch (error){
//     console.log("`blockConst` is not accessible outside the block.");   
// }
