const isPangram = (input) => {
    const inputLowered = input.toLowerCase();
    return [..."abcdefghijklmnopqrstuvwxyz"].every(c => inputLowered.includes(c));
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."));