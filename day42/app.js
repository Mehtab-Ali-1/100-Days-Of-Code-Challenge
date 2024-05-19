// DAY 42
// Q124
var personName = {
    name: "Ahmed",
    getName: function () {
        return this.name;
    }
};
console.log(personName.getName());
// Q125
var rectangle = {
    length: 4,
    width: 4,
    getArea: function () {
        return this.length * this.width;
    }
};
console.log(rectangle.getArea());
// Q126
var myObject = {
    property: "value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var inerMethod = function () {
            console.log(_this.property);
        };
        inerMethod();
    }
};
myObject.outerMethod();
