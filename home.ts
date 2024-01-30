// tsc -b used to convert ts into js
const x:number=101;  // giving a type to a variable


// this below code will give error

// let x:number=101;
// x="dev";
// console.log(x)

// this is how i will write the code in js but it will give error in js

// function  greet(firstname){
//     console.log("hii"+firstname);
// }
// greet("Dev");

// ts code for the same function
// here we specify the type to first name that it is string
function  greet(firstname:string){
    console.log("hii"+firstname);
}

greet("Dev");


function sum(a:number,b:number):number{
    return a+b;
}

const value=sum(1,2);
console.log(value);


// type inference
function isLegal(age:number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}


// Create a function that takes another function as input, and runs it after 1 second.

// we telling that this function returns nothing specifying void to it .
function after1(fn:()=> void){
    setTimeout(fn,1000);
}

after1(function(){
    console.log("yo there");
})

console.log("yo man how are you doing ");


