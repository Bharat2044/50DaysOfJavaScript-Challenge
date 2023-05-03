// expandedForm(12) should return '10+2'
// expandedForm(42) should return '40+2'
// expandedForm(734) should return '700+30+4'


function expandedForm(num) {
  // Your code here
  let numStr = num.toString().split("");

  for (let i = 0; i < numStr.length; i++) {
    for (let y = numStr.length - i; y > 1; y--) 
      numStr[i] += "0";
  }

  return numStr.join("+");
}

console.log(expandedForm(734));
