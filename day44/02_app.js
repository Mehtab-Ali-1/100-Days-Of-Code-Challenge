"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// Q131
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.greet = function () {
        console.log("hello! my name is ".concat(this.name));
    };
    return person;
}());
exports.person = person;
