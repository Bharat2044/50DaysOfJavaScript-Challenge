// spinWords("Hey fellow warriors") should return"Hey wollef sroirraw"
// spinWords("You are almost to the last test") should return "You are tsomla to the last test"
// spinWords("Seriously this is the last one") should return "ylsuoireS this is the last one"


function spinWords(str){
    let string = str;
    let final = [];
    let strList = str.split(' ');
  
    for(var i = 0; i<strList.length; i++) {
      
        if(strList[i].length>4 )
            final.push(strList[i].split('').reverse().join(''));
        else
            final.push(strList[i]);
    }  
  
    return final.join(' ');
 }

console.log(spinWords("Hey fellow warriors"));
