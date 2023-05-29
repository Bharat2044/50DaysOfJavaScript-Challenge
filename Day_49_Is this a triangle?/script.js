// isTriangle(1,2,2) should return true
// isTriangle(7,2,2) should return false
// isTriangle(7,14,16) should return true



function isTriangle(a,b,c){ 
    return ((a + b > c) && (a + c > b) && (c + b > a)); 
} 

console.log(isTriangle(1,2,2));
