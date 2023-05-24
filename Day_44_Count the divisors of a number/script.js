// getDivisorsCnt(10) should return 4
// getDivisorsCnt(11) should return 2
// getDivisorsCnt(54) should return 8


function getDivisorsCnt(num) {
    // code below
    let count = 0;
  
    for(let i=1; i<=num; i++) {
      if(num%i == 0)
          count++;
    }
  
    return count;
  }

  console.log(getDivisorsCnt(10));