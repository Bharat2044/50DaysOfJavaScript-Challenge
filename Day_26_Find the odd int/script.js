// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) should return 5
// findOdd([1,1,1,1,1,1,10,1,1,1,1]) should return 10
// findOdd([5,4,3,2,1,5,4,3,2,10,10]) should return 1


function findOdd(arr) {
    let count = 0;
    let newArr = arr.sort((a, b) => a - b);
    
    for (let i = 0; i < newArr.length; i++) {
        
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[i] == newArr[j]) 
                count++;
        }
        
      if (count % 2 !== 0) 
          return newArr[i];
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
