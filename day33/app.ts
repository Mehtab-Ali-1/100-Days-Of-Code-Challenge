// DAY 33
// Q97
function getCurrentDateFormatted(): string{
    const now1 = new Date();
    const day = String(now1.getDate()).padStart(2,"0");
    const month = String(now1.getMonth() +1).padStart(2,"0");
    const year = now1.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
// Q98
function daysUntilNewYear(): number{
    const todays = new Date();
    const newYear = new Date(todays.getFullYear()+1,0,1);
    const diff= newYear.getTime()-todays.getTime();
    const days = Math.ceil(diff/(1000*60*60*24));
    return days;
}
console.log(daysUntilNewYear()+" "+"days left until next new year");
// Q99
function getNextBirthday(month: number,day: number): Date{
    const todays = new Date();
    const year = todays.getFullYear();
    const birthday = new Date(year , month -1, day);
    if(birthday < todays){
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthDay = getNextBirthday(14,5);
console.log(`Your next birthday is on `+nextBirthDay.toLocaleDateString());
