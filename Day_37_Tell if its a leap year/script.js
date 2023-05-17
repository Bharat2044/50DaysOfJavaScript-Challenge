// isLeap(2022) should return false
// isLeap(2020) should return true


const isLeap = (year) => {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(isLeap(2022));
