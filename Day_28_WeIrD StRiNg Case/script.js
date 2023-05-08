// toWeirdCase('This') returns 'ThIs'
// toWeirdCase('This is a test') returns 'ThIs iS A TeSt'
// toWeirdCase('A test case') returns 'A TeSt cAsE'




function toWeirdCase(string) {
    return [...string].map((e,i)=>i%2?e.toLowerCase():e. toUpperCase()).join('');
}

console.log(`The weird case of ${"A test case"} is ${toWeirdCase("This is a test")}`);
