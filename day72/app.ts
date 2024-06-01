// generic function with different types
function returnTypeValue<T>(val:T):T{
    return val;
}
let value1: number= returnTypeValue<number>(100);
let value2: string= returnTypeValue<string>("100");
console.log(`Number Value: ${value1}`);
console.log(`String Value: ${value2}`);
// Arrow Function with Generics
const arrowFunction = <T>(arrowVal:T):T => arrowVal;
console.log(arrowFunction<number>(100));
// Generic function multipul types
function returnMultipul<T,S>(valOne:T,valTwo:S) :string{
    return `The first value is ${valOne} and the second value is ${valTwo}`;
}
console.log(returnMultipul<string,number>("Ali",1000));
console.log(returnMultipul<string,boolean>("Ahmed",true));

// ******** Generic Class *********
class User<T=string> {
    constructor(public value: T){}
    show(mess:T):void{
        console.log(`${mess} - ${this.value}`);
    }
}
let user11 = new User<string>("Hello")
console.log(user11.value);
user11.show("Hi");

// ******** Generics And Interfaces ********
// Interface definitions for Book and Gamei
interface Book {
    itemType: string;
    title: string;
    isbn: number;
}
interface Game{
    itemType: string;
    title: string;
    style: string;
    price: number;
}
// Generic Class `Collection`
class Collection<T>{
    public data: T[]= [];
    // Method to add an item of type `T` to the collection
    add(item:T):void{
        this.data.push(item);
    }
}
let itemsOne = new Collection<Book>();
itemsOne.add({itemType:"book", title: "Atomic", isbn:127369});
itemsOne.add({itemType:"book", title: "Follow", isbn:783652});
console.log(itemsOne);
let itemsTwe = new Collection<Game>();
itemsTwe.add({itemType: "Game", title: "uncharted", style: "Action",price:200});
console.log(itemsTwe);


