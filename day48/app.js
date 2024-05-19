// DAY 48
// Q 142
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("hello");
    }, 2000);
});
console.log(helloPromise.then(function (message) { return console.log(message); }));
// Q 143
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("success");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); });
conditionalPromise
    .catch(function (error) { return console.log(error.message); });
// Q 144
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
