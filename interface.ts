interface User{
    firstName:string;
    lastName:string;
    age:number;
    email?:string;   // ? is used to add it optionally
}


function yo(age:number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}