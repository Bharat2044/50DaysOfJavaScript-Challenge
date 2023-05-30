// getMiddle("testing") should return "t"
// getMiddle("middle") should return "dd"
// getMiddle("A") should return "A"


function getMiddle(s) {
    // your code here
    let position;
    let len;

    if (s.length % 2 == 1) {
        position = s.length / 2;
        len = 1;
    }
    else {
        position = s.length / 2 - 1;
        len = 2;
    }

    return s.substring(position, position + len);
}

console.log(getMiddle("middle"));