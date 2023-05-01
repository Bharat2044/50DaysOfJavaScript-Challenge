// uniqueInOrder('AAAABBBCCDAABBB') should return ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3]) should return [1,2,3]


let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array

  return [...iterable].filter((a, i) => a !== iterable[i-1])
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
