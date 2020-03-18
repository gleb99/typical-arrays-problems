

exports.min = function min (arr) {
  if(arr === undefined || arr.length < 1) return 0;
  let min = arr.sort((a, b) => a - b);
  
  return min[0];
}

exports.max = function max (arr) {
  if(arr === undefined || arr.length < 1) return 0;
  let max = arr.sort((a,b) => b-a);
  return max[0];
}

exports.avg = function avg (arr) {
  if(arr === undefined || arr.length < 1) return 0;
  let length = arr.length;
  let summ = arr.reduce((res, item) => res + item , 0);
  return summ/length;
}
