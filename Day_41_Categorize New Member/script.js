// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) should return ['Open', 'Senior', 'Open', 'Senior']
// openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]) should return['Open', 'Open', 'Open', 'Open']
// openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]) should return ['Senior', 'Open', 'Open', 'Open'])



function openOrSenior(data) {
    return data.map( x => x[0] >= 55 && x[1] > 7 ? "Senior" : "Open");
}
  
let output = openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
]);
  
console.log(output);
  