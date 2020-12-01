const discriminant = (a, b, c) => b ** 2 - 4 * a * c
const x1 = (a, b, c) => (-b + Math.sqrt(discriminant(a, b, c))) / 2 * a
const x2 = (a, b, c) => (-b - Math.sqrt(discriminant(a, b, c))) / 2 * a
const quadratic = (a, b, c) => [x1(a, b, c), x2(a, b, c)]

console.log(quadratic(2, 5, -3))