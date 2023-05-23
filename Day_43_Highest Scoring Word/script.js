// high('man i need a taxi up to ubud') should return 'taxi'
// high('what time are we climbing up the volcano') should return 'volcano'




function high(x) {
    const str = x.split(' ');
    const result1 = [];

    const result = str.reduce((_, dig) => {
        let c = 0;
        for (let j = 0; j < dig.length; j++) 
            c = c + (dig.charCodeAt(j) - 96);
        
        result1.push(c);
    }, 0);

    return str[result1.indexOf(result1.slice().sort((a, b) => b - a)[0])];
}

console.log(high('man i need a taxi up to ubud'));