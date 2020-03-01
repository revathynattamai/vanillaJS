// 3 - fizz 5 -buzz 15-fizzBuzz
fizzBuzz = n => {
  let values = [];
  for (let i = 1; i <= n; i++) {
    let a = i % 3;
    let b = i % 5;
    if (a === 0 && b === 0) {
      values.push("fizzBuzz");
    } else if (a === 0) {
      values.push("fizz");
    } else if (b === 0) {
      values.push("buzz");
    } else {
      values.push(i);
    }
  }
  return values;
};

console.log(fizzBuzz(15));
module.exports = fizzBuzz;