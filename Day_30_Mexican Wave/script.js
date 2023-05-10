// `wave("hello")` should return `["Hello", "hEllo", "heLlo", "helLo", "hellO"]`
// `wave("two words")` should return \`\["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]`
// `wave(" gap ")` should return `[" Gap ", " gAp ", " gaP "]`


function wave(str) {
  
    return [...str].map((c, i) => `${str.slice(0, i)}${c.toUpperCase()}${str.slice(i +  1, str.length)}`).filter(s => /[A-Z]/.test(s));
}

console.log(wave("hello"));
