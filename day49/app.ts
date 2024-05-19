// DAY 49
// Q145
// This function accepts a callback function and invokes it with given arguments
    function executeCallback (callBack:(arg1:number, arg2:number)=>void,
        arg1: number,
        arg2: number
        ):void{
        callBack(arg1,arg2);
    }
// Example callback function that adds two numbers
    const add = (a:number,b:number)=>{
        console.log(a+b);
    }
    executeCallback(add,3,4)
// Q146
    const numbers : number[]= [1,2,3,4,5,6,7,8,9,10];
// Uses .filter() with a callback function to filter out numbers greater than 5
    const filterNumbers: number[]=numbers.filter((num) => num>5);
    console.log(filterNumbers);
// Q147
    function fetchData(callBack: (error: Error|null,data?: string)=>void ):void{
        const error= new Error("failed to fetch data");
        const data = "Some data";
    if (Math.random()>0.5){
        callBack(null,data);
    }else {
        callBack (error);
        }
    }
    fetchData((error,data)=>{
        if (error){
            console.log(error.message);
        }else{
            console.log(data);
            
        }
    });
