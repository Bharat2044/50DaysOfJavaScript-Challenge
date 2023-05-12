const gcd = function(a, b) {
    if(!b) 
        return a;

    return gcd(b, a%b);
};

const a = 8;
const b = 12;

console.log("The GCD of " + a + " ", b + " is: " + gcd(a, b));