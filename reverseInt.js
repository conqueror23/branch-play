// corner case negative numbers you got to be careful here
const reversInt = x => {
  let final = 0;
  if (x > 2 ** 31 - 1) {
    final = 0;
  } else if (x < -(2 ** 31)) {
    final = 0;
  } else {
    let IntX = parseInt(x);
    while (IntX != 0) {
      let reminder = IntX % 10;
      IntX = parseInt(IntX / 10);
      final = reminder + final * 10;
    }
  }
  return final;
};
let test = 1534236469;
let re = reversInt(test);

// correct one??? 76ms
var reverse = function(x) {
  if (x < (-1 * (2 ** 31)) || (x > (2 ** 31 - 1))) return 0;
    let result = (x < 0 ? -1 : 1) * Number(String(Math.abs(x)).split('').reverse().join('')); 
    if (result < (-1 * (2 ** 31)) || (result > (2 ** 31 - 1))) return 0;
    return result;
};

// 3rd 
var reverse3rd = function(x) {
  const process = (x, last, acc) => x > 0 ? 
    process(Math.floor(x / 10), x % 10, (acc * 10) + last) :
    (acc * 10) + last;
  
  const result = process(Math.abs(x), 0, 0);
  
  if (0x7FFFFFFF < result) return 0;
  
  return x < 0 ? result * -1 : result;
};

// 2nd

var reverse2nd = function(x) {
  if (x < (-1 * (2 ** 31)) || (x > (2 ** 31 - 1))) return 0;
  let result = (x < 0 ? -1 : 1) * Number(String(Math.abs(x)).split('').reverse().join('')); 
  if (result < (-1 * (2 ** 31)) || (result > (2 ** 31 - 1))) return 0;
  return result;
};

// 1st
const reverse1st = (x)=> {
  var sum = 0
  var a = Math.abs(x)
  while(a > 0) {
     var digit = a % 10
     sum = 10 * sum + digit
     a = (a - digit) / 10
  }
  if(sum >= Math.pow(2, 31) || sum < Math.pow(-2, 31)){
      return 0
  } else if(x == 0){
          return 0
      } else if(x > 0) {
          return sum
      } else if(x < 0) {
          return -1 * sum
      }   
};

console.log(reverse1st(143))
