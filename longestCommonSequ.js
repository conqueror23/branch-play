const longetCommon=(str1,str2)=>{
    // walk through two string in the same time
    
    // get the common part 
    // 


}
//  initial solutions
const longestCommonSubsequenceInitial = function(text1, text2) {
    const m = text1.length;
   const n = text2.length;
   let dp = new Array(n + 1).fill(0);
   for (let i = 1; i <= m; i++) {
     const next = new Array(n + 1).fill(0);
     for (let j = 1; j <= n; j++) {
       next[j] = (() => {
         if (text1[i - 1] === text2[j - 1]) {
           return dp[j - 1] + 1;
         }
         return Math.max(dp[j], next[j - 1], dp[j - 1]);
       })();
     }
     dp = next;
   }
   return dp[n];   
 };

// 3rd
const longestCommonSubsequence3rd  = function(text1, text2) {
    // each cell: longtest common subsequence for [0...i] and [0...j]
    const matrix = [];
    for(let i = 0; i < text1.length + 1; i++){
        matrix.push(new Array(text2.length + 1).fill(0, 0, text2.length + 1));
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            matrix[0][j] = 0;
        }
        matrix[i][0] = 0;
    }
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){
            if(text1.charAt(i - 1) === text2.charAt(j - 1)){
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            }else{
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }
    return matrix[text1.length][text2.length];
};
// 2nd
const longestCommonSubsequence2nd = function(text1, text2) {
    if(!text1.length || !text2.length) return 0;
    let temp = [];
    let max = 0;
    // 1) Create temp matrix
    for(let i = 0; i <= text1.length; i++) {
      temp[i] = new Array(text2.length + 1).fill(0);
    }
    // 2) Traverse each position in matrix
    for(let row = 1; row < temp.length; row++) {
      for(let col = 1; col < temp[row].length; col++) {
      // 3) Check if there's a match at position
      // check prev letter in both strings
      if(text1[row-1] === text2[col-1]) {
        // update grid position
        // Add 1 to the num in upper left grid position
        temp[row][col] = 1 + temp[row-1][col-1];
      } else {
        // get max from left grid num and above num
        temp[row][col] = Math.max(temp[row][col-1], temp[row-1][col]);
      }
        // 4) update max
        max = Math.max(max, temp[row][col]);
      }
    }
    return max;
  };