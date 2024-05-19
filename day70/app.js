var john = {
    name: "Ahmed",
    age: 23
};
var ali = {
    name: "Ali",
    age: 24,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    }
};
ali.greet("Hello Typescript");
