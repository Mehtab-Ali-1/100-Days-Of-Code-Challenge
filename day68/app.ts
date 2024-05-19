// ************** Tuple ***************
// ****** Defining a tuple type *******
let articles : readonly[number,string,boolean] = [1 ,"Title one",true];

// *** Assigning a new tuple value to the `article` variable ***
articles = [2,"Title two",false];
console.log(articles);

// *** // Destructuring the tuple into individual variables ***
const [id1 , title1 , published1] = articles;
console.log(id1);
console.log(title1);
console.log(published1);