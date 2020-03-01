// reverseStr = value => {
//   return value
//     .split("")
//     .reverse()
//     .join("");
// };

// reverseStr = value => {
//   let res = "";
//   for (let i = value.length - 1; i >= 0; i--) {
//     res += value[i];
//   }
//   return res;
// };
reverseStr = value => {
  let res = "";
  for (let char of value) {
    res = char + res;
  }
  return res;
};

// console.log(reverseStr("Revathy"));


