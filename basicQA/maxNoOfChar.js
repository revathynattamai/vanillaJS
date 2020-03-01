maxNoOfChar = str => {
  const charMap = {};
  str.split("").map(a => {
    if (charMap[a]) {
      charMap[a]++;
    } else {
      charMap[a] = 1;
    }
  });
  findTheNoOccurence(charMap);
};

findTheNoOccurence = charMap => {
  let maxNum = 0;
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
    }
  }
  findTheChar(maxNum, charMap);
};

findTheChar = (maxNum, charMap) => {
  let maxChar = [];
  for (let char in charMap) {
    if (charMap[char] === maxNum) {
      maxChar.push(char);
    }
  }
  console.log(maxChar);
};

maxNoOfChar("RevathyKarthik");
