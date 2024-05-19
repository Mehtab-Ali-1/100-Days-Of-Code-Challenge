// DAY 14
// Q 40
function make_album(artists: string , title : string , tracks? : any){
    let album : any = {artists , title};
    if (tracks) {
        album ['tracks'] = tracks;
    }
    return album;
}
console.log(make_album(`one artists`,`the first artists`));
console.log(make_album(`two artists`,`the second artists`));
console.log(make_album(`three artists`,`the third artists`,12));
// Q41
let magicians: string[] = ["Alice", "David", "Chris"];
function make_magic(magicians: string[]){
    magicians.forEach(magic =>{
        console.log(magic);
    });
}
make_magic(magicians);
// Q42
function show_magic(magicains : string[]){
    for (let i=0; i<magicains.length;i++){
        magicians[i]= magicians[i] + `` + `make great`
    }
}
show_magic(magicians);
make_magic(magicians);