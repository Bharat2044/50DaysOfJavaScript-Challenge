// unionOfArrays(\['a','b','c'\],\['a',1,2,'d'\]) should return \['a','b','c',1,2,'d'\]
// unionOfArrays(\['array','object'\],\['value','object','key'\]) should return \['array','object', 'value', 'key'\]
// unionOfArrays(\[1, 2, 34, 45, 3\], \[3, 24, 21\]) == \[1,2,34,45,3,24,21\]) should return \[1,2,34,45,3,24,21\]


const unionOfArrays = (arr1, arr2) => {
  // code below here
  dup_arr = [...arr1]
  arr2.forEach((val) => {
    if (dup_arr.includes(val) === false) {
      dup_arr.push(val)
    }
  })
  return dup_arr;
};

console.log(unionOfArrays(['a','b','c'], ['a',1,2,'d']));
