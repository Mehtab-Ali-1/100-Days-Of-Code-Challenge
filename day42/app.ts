// DAY 42
// Q124
const personName = {
    name : "Ahmed",
    getName : function(){
        return this.name;
    }
}
console.log(personName.getName());
// Q125
const rectangle ={
    length : 4,
    width : 4,
    getArea : function (){
        return this.length * this.width;
    }
}
console.log(rectangle.getArea());
// Q126
const myObject = {
    property : "value",
    outerMethod : function(){
        console.log(this.property);
    const inerMethod = ()=> {
        console.log(this.property);
        
    };
    inerMethod()            
    }
};
myObject.outerMethod();

