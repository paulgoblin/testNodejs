var makeFloat = (arr) => {
  return arr.map(el => Number(el))
}

var square = (arr) => {
  arr = makeFloat(arr);
  return arr[0] * arr[0];
}

var multiply = (arr) => {
  arr = makeFloat(arr);
  return arr.reduce( (a,b) => a * b, 1 )
}

var cube = (arr) => {
  arr = makeFloat(arr);
  return arr[0] * arr[0] * arr[0];
}

var add = (arr) => {
  arr = makeFloat(arr);
  return arr.reduce( (a,b) => a + b ,0 )
}

var subtract = (arr) => {
  arr = makeFloat(arr);
  return arr[0] - add(arr.slice(1));
}

var diff = (arr) => {
  arr = makeFloat(arr);
  return arr.reduce( (a,b) => Math.abs(a - b) , 0)
}

exports.square = square;
exports.cube = cube;
exports.add = add;
exports.subtract = subtract;
exports.diff = diff;
exports.multiply = multiply;