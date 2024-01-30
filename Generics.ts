function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);


// problem -2
// <T> this is basically for generics
// in simple terms i dont know the types of this identity , it can be anything so we use  <T> to tell that it is generics
function identity<T>(arg: T): T {
    return arg;
}
// now here we told that t -> is string
let output1 = identity<string>("myString");
// here t is -> number
let output2 = identity<number>(100);


function getLastName<T>(arr:T[]){
    return arr[0];

}
const el=getLastName(["Dev","Sanghvi"]);
console.log(el.toLowercase())