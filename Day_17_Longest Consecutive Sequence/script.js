// Input: [100,4,200,1,3,2]
// Output: 4 // LCS [1, 2, 3, 4]

// ongestConsecutiveSequence(\[100,4,200,1,3,2\]) returns 4
// longestConsecutiveSequence(\[0,3,7,2,5,8,4,6,0,1\]) returns 9


const longestConsecutiveSequence = (inputArray) => {
    //get unique elms  
    const S = new Set(inputArray);
    
    //store the result
    let max = 1;
    
    // iterate array elements
    for (let e of inputArray) {
    
        // if the current element begins a new seq
        if (!S.has(e - 1)) {
            
            // tracks the length of subsequence
            let len = 1;

            // count all the elements of the subsequence
            // e+1, e+2,...
            while (S.has(e + len)) {
                len++;
            }

            // get the max subsequence
            max = Math.max(max, len);
        }
    }

    return max;
}


console.log(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1]));