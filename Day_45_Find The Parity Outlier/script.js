// findOutlier([2,6,8,10,3]) should return 3
// findOutlier([0,0,3,0,0]) should return 3
// findOutlier([1,1,0,1,1]) should return 0



function findOutlier(integers) {
    let oddArr = [];
    let evenArr = [];

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) 
            evenArr.push(integers[i]);
        else 
            oddArr.push(integers[i]);    
    }

    if (evenArr.length == 1) 
        return evenArr[0];
    else 
        return oddArr[0];  
}

console.log(findOutlier([2,6,8,10,3]));