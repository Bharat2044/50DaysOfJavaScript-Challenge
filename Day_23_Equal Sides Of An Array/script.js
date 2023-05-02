// findEvenIndex([1,2,3,4,3,2,1] should return 3
// findEvenIndex([1,100,50,-51,1,1]) should return 1
// findEvenIndex([1,2,3,4,5,6]) should return -1
// findEvenIndex([20,10,30,10,10,15,35]) should return 3


function findEvenIndex(arr){
  let left = 0;
  let right = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if(arr.length == 0){
    return -1;
  }
  
  for(let i = 0; i < arr.length; i++){
    if(i == 0){
      right = arr.slice(1).reduce(reducer, 0);
      if(right === i){
        return i;
      }
    }else{
      left = arr.slice(0, i).reduce(reducer, 0);
      right = arr.slice(i+1).reduce(reducer, 0);
      if(left == right){
        return i;
      }
    }
  }

  return -1;

}


console.log(findEvenIndex([20,10,30,10,10,15,35]));
