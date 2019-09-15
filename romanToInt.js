const factor5 = index => {
  return Math.abs(Math.floor(Math.sin((index + 1) * Math.PI)));
};
const charVale = (index, fac5) => {
  return 5 ** fac5 * 10 ** parseInt(index / 2);
};
// I can be before V (5) and X (10) to make 4 and 9.
// X can be before L (50) and C (100) to make 40 and 90.
// C can be before D (500) and M (1000) to make 400 and 900.
// I V X L C D M
// iv ix , xl xc, cd, cm
// V=5 ,X=10,L=50,C=100,D=500,M=1000
// calculate all to get a result
// IV=4,IX=9,XL=40,XC=90,CD=400,CM=900


const romanToIntSt = s => {
  let value = 0;
  let levels = "MDCLXVI";
  levels = levels.split("").reverse();
  for (let index = 0; index < s.length; index++) {
    switch (s[index]) {
      case "I":
        value += 1;
        break;
      case "V":
        if (s[index - 1] == "I") {
          value += 3;
        } else {
          value += 5;
        }
        break;
      case "X":
        if (s[index - 1] == "I") {
          value += 8;
        } else {
          value += 10;
        }
        break;
      case "L":
        if (s[index - 1] == "X") {
          value += 30;
        } else {
          value += 50;
        }
        break;
      case "C":
        if (s[index - 1] == "X") {
          value += 80;
        } else {
          value += 100;
        }
        break;
      case "D":
        if (s[index - 1] == "C") {
          value += 300;
        } else {
          value += 500;
        }
        break;
      case "M":
        if (s[index - 1] == "C") {
          value += 800;
        } else {
          value += 1000;
        }
        break;
    }
  }
  return value;
};

const romanToInt = roman => {
  let value = 0;
  let levels = "MDCLXVI";
  levels = levels.split("").reverse();
  // using some technique to calcualte the level
  // 0        1        2        3        4         5          6
  // 1        5        10       50       100       500        1000
  // 5^0*10^0 5^1*10^0 5^0*10^1 5^1*10^1 5^0*10^2  5^1*10^2   5^0*10*3
  // for single character with no advanced record
  for (let index = 0; index < roman.length; index++) {
    // index here is different than
    // you got the index of the mark level characters
    let levelIndex = levels.indexOf(roman[index]);
    if (levelIndex < levels.indexOf(roman[index - 1])) {
      // this supposed to working in some extends
    } else {
      // is going to work here
    }
    let fac5 = factor5(levelIndex);
    let markLevel = charVale(levelIndex, fac5);
    console.log(markLevel);
    switch (roman[index]) {
      case "I":
        value += 1;
        break;
      case "V":
        // there are two sinarios here
        // if there is a I before that , you got to transfer to 4
        if (roman[index - 1] == "I") {
          value += 3;
        } else {
          value += 5;
        }
        break;
      case "X":
        if (roman[index - 1] == "I") {
          value += 8;
        } else {
          value += 10;
        }
        break;
      case "L":
        if (roman[index - 1] == "X") {
          value += 30;
        } else {
          value += 50;
        }
        break;
      case "C":
        if (roman[index - 1] == "X") {
          value += 80;
        } else {
          value += 100;
        }
        break;
      case "D":
        if (roman[index - 1] == "C") {
          value += 300;
        } else {
          value += 500;
        }
        break;
      case "M":
        if (roman[index - 1] == "C") {
          value += 800;
        } else {
          value += 1000;
        }
        break;
    }
  }
  return value;
};
let roman = "CMCDIVI";

let result = romanToInt(roman);

const romanToIntB2 = s => {
  // interesting method calculate all and then remove the certain
  // combinations
  let sum = 0;
  if (s.indexOf("IV") !== -1) sum -= 2;
  if (s.indexOf("IX") !== -1) sum -= 2;
  if (s.indexOf("XL") !== -1) sum -= 20;
  if (s.indexOf("XC") !== -1) sum -= 20;
  if (s.indexOf("CD") !== -1) sum -= 200;
  if (s.indexOf("CM") !== -1) sum -= 200;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (char === "I") {
      sum += 1;
    } else if (char === "V") {
      sum += 5;
    } else if (char === "X") {
      sum += 10;
    } else if (char === "L") {
      sum += 50;
    } else if (char === "C") {
      sum += 100;
    } else if (char === "D") {
      var romanToInt = function(s) {
        let sum = 0;
        if (s.indexOf("IV") !== -1) sum -= 2;
        if (s.indexOf("IX") !== -1) sum -= 2;
        if (s.indexOf("XL") !== -1) sum -= 20;
        if (s.indexOf("XC") !== -1) sum -= 20;
        if (s.indexOf("CD") !== -1) sum -= 200;
        if (s.indexOf("CM") !== -1) sum -= 200;

        for (let i = 0; i < s.length; i++) {
          let char = s.charAt(i);
          if (char === "I") {
            sum += 1;
          } else if (char === "V") {
            sum += 5;
          } else if (char === "X") {
            sum += 10;
          } else if (char === "L") {
            sum += 50;
          } else if (char === "C") {
            sum += 100;
          } else if (char === "D") {
            sum += 500;
          } else if (char === "M") {
            sum += 1000;
          }
        }

        return sum;
      };
      sum += 500;
    } else if (char === "M") {
      sum += 1000;
    }
  }

  return sum;
};

const romanToIntB22 = function(s) {
  let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let sum = 0;
  const digits = s.split("");
  for (let i = 0; i < digits.length; i++) {
    const value = hash[digits[i]];
    sum = hash[digits[i + 1]] > value ? sum - value : sum + value;
  }
  return sum;
};

// roman the best 2 methods
const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
var romanToIntb1 = function(s) {
  return s.split("").reduce((prev, curr, index) => {
    const currVal = romanMap[s[index]];
    const prevVal = s[index - 1] ? romanMap[s[index - 1]] : Infinity;
    if (currVal > prevVal) {
      prev -= prevVal;
      prev += currVal - prevVal;
    } else {
      prev += currVal;
    }
    return prev;
  }, 0);
};

let testB1 = romanToIntb1(roman);

console.log(testB1);
const romanToIntBest = function(s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;
  for (let i = 0; i < s.length; ++i) sum += map[s[i]];

  // rectify the values
  if (s.includes("IV")) sum -= 2;
  if (s.includes("IX")) sum -= 2;
  if (s.includes("XL")) sum -= 20;
  if (s.includes("XC")) sum -= 20;
  if (s.includes("CD")) sum -= 200;
  if (s.includes("CM")) sum -= 200;

  return sum;
};

let currentString = "justhof";
let searchOf = currentString.includes("of");
console.log(searchOf);
