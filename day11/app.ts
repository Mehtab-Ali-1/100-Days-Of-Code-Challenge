// DAY 11
// Q31
let usernames : string[] = [];
if(usernames.length === 0){
    console.log(`We need to find some users.`);
}else{
    //greet users
}
// Q 322
let currentUsers : string[] =[`user1`,`admin`,`user2`,`user3`,`user4`];
let newUsers : string[] =[`user5`,`user6`,`user7`,`admin`,`user3`,`user4`];
newUsers.forEach(newUser => {
     if (currentUsers.some(currentUser => currentUser === newUser)){
        console.log(`${newUser} will need to enter a new username.`);
     }else{
        console.log(`${newUser} is available.`);
     }
});
// Q33
let numbers : number[] = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(number =>{
    let suffix = `th`;
    if(number === 1){
        suffix = `st`
    }else if(number === 2){
        suffix = `nd`
    }else if(number === 3){
        suffix = `rd`
    }
    console.log(`${number}${suffix}`);
});