// ***************  Class type annotations  ****************
class product {
    id : number;
    price : number;
    name : string;
    // Constructor parameter type annotations
    constructor (id : number, price : number, name : string){
        this.id = id;
        this.price = price;
        this.name = name; 
    }
    // Method type annotations
    getProductInfo(): string {
        return `ID: ${this.id},Price: ${this.price}, Name: ${this.name}`
    }
}
// Create an instance of the Product class
const product1 = new product (1 , 500 , "anything");
// Access class properties and call a method
console.log(product1.getProductInfo());

// ***************  Class access modifiers  ****************
//         ***************  public  ****************
class MyClassPublic {
    public name : string;
    constructor (name: string){
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("Ali");
console.log(instancePublic.name);
// ****************************************************************
//         ***************  private  ****************
class MyClassPrivate {
    private secret : string;
    constructor(secret : string){
        this.secret = secret;
    }
    revealSecret(){
        console.log(this.secret);   // Accessing the private property from within the class
    }
}
const instancePrivate = new MyClassPrivate("Ahmed");
instancePrivate.revealSecret();    // This is a valid way to access the private property

// ****************************************************************
//         ***************  protected  ****************
class Parent {
    protected familyName : string;
    constructor(name : string){
        this.familyName = name;
    }
}
class Child extends Parent{
    introduceFamily(){
        console.log(`Our family name is ${this.familyName}`);
    }
}
// const parent = new Parent("Smith");     //   This would result in an error
const child = new Child("Johson");
child.introduceFamily();   // This is a valid way to access the protected property