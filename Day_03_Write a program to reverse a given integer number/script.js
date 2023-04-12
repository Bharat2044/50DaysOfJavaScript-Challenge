/* Approach - 1: Using Math
const num = 3849;

function reverseGivenInteger(num) {
    let rev = 0;

    while(num > 0) {
        let d = num%10;
        rev = rev*10+d;
        num = Math.floor(num/10);
    }

    return rev;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);*/


/* Approach - 2: Solving with a Regular Function:
const num = 3849;

function reverseGivenInteger(num) {
  	return (parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num));
}

console.log(`Reversed integer is: ${reverseGivenInteger(3849)}`);*/

// Approach - 3: By converting the number to string and then reversing it:
const num = 3849;

function reverseGivenInteger(num) {
  	return (Number(String(num).split("").reverse().join("")));
}

console.log(`Reversed integer is: ${reverseGivenInteger(3849)}`);