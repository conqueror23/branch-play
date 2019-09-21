function WordSplit(strArr) {
  target = strArr[0];

  dictionary = strArr[1];
  let tarLen = target.length;
  dictArr = dictionary.split(",");
  //  find the words that may c
  let solution = [];
  for (let index1 = 0; index1 < dictArr.length; index1++) {
    for (let index2 = index1; index2 < dictArr.length; index2++) {
      let word1 = dictArr[index1];
      let word2 = dictArr[index2];
      let pos1 = target.indexOf(word1);
      let pos2 = target.indexOf(word2);
      if (word1.length + word2.length === tarLen) {
        if (pos1 + word1.length === pos2 || pos2 + word2.length === pos1) {
          if (pos1 < pos2) {
            solution = `${word1},${word2}`;
          } else {
            solution = `${word2},${word1}`;
          }
        }else{
          continue;
        }
      }
    }
  }
  if (!solution.length) {
    solution = "not possible";
  }
  return solution;
}

let strArr = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"];
let result = WordSplit(strArr);
console.log(result);
