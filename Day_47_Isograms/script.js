// isIsogram("isogram") should return true
// isIsogram("") should return true
// isIsogram("moOse") should return false



function isIsogram(str) {
    if (str.isEmpty) 
        return true;
    else 
        str = str.toLowerCase();

    //split string into individual characters. 
    array = str.split('');
    sortedArr = array.slice().sort();

    for ( i = 0; i < array.length; i++) {
        //if duplicate is found return false.
        if (sortedArr[i + 1] == sortedArr[i]) 
            return false;
    }
    //else return true
    return true;
}

console.log(isIsogram("moOse"));