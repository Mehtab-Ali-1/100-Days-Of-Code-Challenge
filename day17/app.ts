// DAY 17
// Q49
function logHobbies (...hobbies:string[]){
    hobbies.forEach(hobby =>{
        console.log(`I enjoy ${hobby}`);
        
    });
}
logHobbies("reading","coding","cycling");
// Q50
let myRoutine = `My ideal day would involve:
1. Walking up early and going for a job.
2. Spending a few hour coding on my personal project.
3. Ending the day by reading a good book.`
console.log(myRoutine);
// Q51
function calculateArea (width:number, height:number):number{
    return width*height
}
let calculateAreaArrow = (width: number,height:number):number=>width *height;
console.log(calculateAreaArrow(5,7));
