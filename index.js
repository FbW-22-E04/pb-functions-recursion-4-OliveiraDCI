// Write your code here:
console.clear();
//
//
//
//
//

function fibonacci(num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];
  let result = fibonacci(num - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);

  return result;
}

console.log(fibonacci(0)); // [0]
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]
