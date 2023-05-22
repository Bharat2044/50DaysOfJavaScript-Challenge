// sumTwoSmallestNumbers([5, 8, 12, 19, 22]) should return 13
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]) should return 6
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]) should return 24



function sumTwoSmallestNumbers(numbers) {
    //Code here
    let ordered = numbers.sort(function(a, b) { return a-b; });
    let result = 0;

    for(i=0; i<ordered.length; i++) {
        if(i == 0) 
            result += ordered[0];
        if(i == 1) 
            result += ordered[1];
    }

    return result;
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));