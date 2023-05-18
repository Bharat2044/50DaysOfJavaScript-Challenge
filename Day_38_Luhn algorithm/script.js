// valid(string) should return true or false accordingly
// valid(string) should return true or false accordingly


const isNumber = n => typeof n === 'number' && !isNaN(n) && isFinite(n);
const isDivisibleByTen = n => !(n % 10);
const isOdd = n => !!(n & 1);

const luhnReduction = (sum, num, i, { length }) => sum + num + (!isOdd(length - i) && num - (num >= 5 && 9));

const valid = string => {
    const nums = [...string.replace(/\s/g, '')].map(Number);
    return nums.length > 1 &&
        nums.every(isNumber) &&
        isDivisibleByTen(nums.reduceRight(luhnReduction));
};

console.log(valid("4539 3195 0343 6467"));