// Fibonacci series: 0 1 1 2 3 5 8 13 21 33 ...
// i/p: n = 6
// o/p: 8

function fibonacci(num) {
        let a = 0;
        let b = 1;

        //iterate till the given num
        for(let i = 1; i <= num; i++) {        
            let c = a + b;         
            a = b; 
            b = c; 
        }
        
        return a;
}

console.log(fibonacci(8))
