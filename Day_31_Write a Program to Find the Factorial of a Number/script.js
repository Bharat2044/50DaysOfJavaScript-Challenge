// factorial(2) is 2
// factorial(5) is 120
// factorial(10) is 3628800


function factorial(n){
    let fact = 1;

    for(let i=1; i<=n; i++)
        fact *= i;

    return fact;
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));
