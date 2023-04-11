const str = "JavaScript is awesome"

function reverseAString(str) {
	/* Approach - 1: Using for loop	
	let revStr = "";
    for(let i=str.length-1; i>=0; i--)
        revStr += str[i];

    return revStr;*/


	/* Approach - 2: Using split(), reverse() and join() methods
	str = str.split("").reverse().join("");    
    return str;*/

	return reverse(str);
}

console.log(`Reversed string is: ${reverseAString(str)}`)

