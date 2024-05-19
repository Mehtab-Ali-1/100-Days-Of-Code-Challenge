// Q131
export class person {
    name: string;
    constructor(name : string){
        this.name=name;
    }
    greet(){
        console.log(`hello! my name is ${this.name}`);
    }
}
