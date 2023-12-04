function sum(num1,num2,fnTocall){
    let results=num1+num2;
    fnTocall(results);
}

function Display(data){
    console.log("Result of the sum is:" + data);
}
function displayResult(data){
    console.log("sum result is :"+data);
}

const ans=sum(1,2,displayResult);

// this is callbacks


// new approach

function calculate(a,b,arithmeticfunction){
    const ans=arithmeticfunction(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}

const value =calculate(1,2,sum);
console.log(value);