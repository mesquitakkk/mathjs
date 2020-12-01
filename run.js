const opsets = require('./number_sets/operations_between_sets.js');

let a = [1, 2, 3, 4, 5, 6];
let b = [0, 2, 4, 6, 8, 10];
let c = [0, -1, -2, -3];

console.log(opsets.intersection(b, c));