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
let test =1534236469;
let re = reversInt(test);
console.log(re);

console.log(2**30)
