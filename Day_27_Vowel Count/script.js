// getCount("abracadabra") should return 5
// getCount("THe Strings are SOO COOL") should return 8
// getCount("There exists only 5 vowels") should return 7


function getCount(str) {
    let vowelsCount = 0;
  
    str = str.toLowerCase();
    for (char of str) {
        if (["a", "e", "i", "o", "u"].includes(char)) {
            vowelsCount += 1;
        }
    }

    return vowelsCount;
}

console.log(getCount("abracadabra"));
