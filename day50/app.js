// DAY 50
// Q148
setTimeout(function () {
    console.log("This time is shown after 2 second delay.");
}, 2000);
// Q149
console.log("\tStart");
setTimeout(function () {
    console.log("Callback executes.");
}, 2);
console.log("\tEnd");
// Q150
console.log("Before synchronour operation.");
for (var i = 0; i < 1e9; i++) { }
console.log("After synchronour operation.");
console.log("Before Asynchronour operation.");
setTimeout(function () { return [
    console.log("Asynchronous operation completed.")
]; });
1000;
;
console.log("After Asynchronour operation.");
