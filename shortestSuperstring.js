const shortestCommonSupersequenceInitial = function(str1, str2) {
    /*Initialise Array for DP */
 let dp=new Array(str2.length+1);
 for(let i=0;i<dp.length;i++)
     dp[i]=new Array(str1.length+1).fill(0);
 
 /*Perform DP for Longest Common Subsequence*/
 for(let i=1;i<dp.length;i++){
     for(let j=1;j<dp[i].length;j++){
         if(str2[i-1]==str1[j-1])
             dp[i][j]=1+dp[i-1][j-1];
         else
             dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
     }
 }
 
 /*Early Termination*/
 if(dp[str2.length][str1.length]==0)
     return str1+str2;
 
 /*Getting the SubSequence*/
 let seq='';
 let i=dp.length-1,j=dp[i].length-1;
 while(i>=1&&j>=1){
     if(str2[i-1]==str1[j-1]){
         seq=str2[i-1]+seq;
         i--;
         j--;
     }
     else{
         if(dp[i-1][j]==dp[i][j])
             i--;     
         else
             j--;
     }
         
 }
 
 /*Generating the Answer*/
 let a=0,b=0,res='';
 for(let i=0;i<seq.length;i++){
     while(a<str1.length&&str1[a]!==seq[i])
         res+=str1[a++];
     while(b<str2.length&&str2[b]!==seq[i])
         res+=str2[b++];
     a++;
     b++;
     res+=seq[i];
 }
 while(a<str1.length)
         res+=str1[a++];
 while(b<str2.length)
         res+=str2[b++];
 
 /*Return the result*/
 return res;
};

// 3rd solution 
function shortestCommonSupersequence3rd(str1, str2) {
  
    const memo = new Array(str1.length).fill(null).map(() => new Array(str2.length).fill(null));
    
    helper(str1, str2, 0, 0);
    
    let superseq = '', i = 0, j = 0;
    
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        superseq += str1[i];
        i++;
        j++;
      } else {
        if (i === str1.length - 1) {
          superseq += str2[j];
          j++;
        } else if (j === str2.length - 1) {
          superseq += str1[i];
          i++;
        } else if (memo[i + 1][j] > memo[i][j + 1]) {
          superseq += str1[i];
          i++;
        } else {
          superseq += str2[j];
          j++;
        }
      }
    }
    
    if (i < str1.length) superseq += str1.substring(i);
    if (j < str2.length) superseq += str2.substring(j);
    
    return superseq;
    
    function helper(str1, str2, i1, i2) {
      if (i1 === str1.length || i2 === str2.length) return 0;
      if (memo[i1][i2] !== null) return memo[i1][i2];
      
      let result = 0;
      
      if (str1[i1] === str2[i2]) {
        result = helper(str1, str2, i1 + 1, i2 + 1) + 1;
      } else {
        result = Math.max(helper(str1, str2, i1 + 1, i2), helper(str1, str2, i1, i2 + 1));
      }
      
      memo[i1][i2] = result;
      return result;
    }
  }


//   2nd
const shortestCommonSupersequence2nd = function(str1, str2) {
    /*Initialise Array for DP */
    let dp=new Array(str2.length+1);
    for(let i=0;i<dp.length;i++)
        dp[i]=new Array(str1.length+1).fill(0);
    
    /*Perform DP for Longest Common Subsequence*/
    for(let i=1;i<dp.length;i++){
        for(let j=1;j<dp[i].length;j++){
            if(str2[i-1]==str1[j-1])
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
        }
    }
    
    /*Early Termination*/
    if(dp[str2.length][str1.length]==0)
        return str1+str2;
    
    /*Getting the SubSequence*/
    let seq='';
    let i=dp.length-1,j=dp[i].length-1;
    while(i>=1&&j>=1){
        if(str2[i-1]==str1[j-1]){
            seq=str2[i-1]+seq;
            i--;
            j--;
        }
        else{
            if(dp[i-1][j]==dp[i][j])
                i--;     
            else
                j--;
        }
            
    }
    
    /*Generating the Answer*/
    let a=0,b=0,res='';
    for(let i=0;i<seq.length;i++){
        while(a<str1.length&&str1[a]!==seq[i])
            res+=str1[a++];
        while(b<str2.length&&str2[b]!==seq[i])
            res+=str2[b++];
        a++;
        b++;
        res+=seq[i];
    }
    while(a<str1.length)
            res+=str1[a++];
    while(b<str2.length)
            res+=str2[b++];
    
    /*Return the result*/
    return res;
};

// 1st 
const  shortestCommonSupersequence1st = (str1, str2)=> {
    const common = findLCS(str1, str2);
    let result = '', a = 0, b = 0;
    for(let i = 0; i < common.length; i++) {
        const c = common[i];
        while(c !== str1[a]) {
            result += str1[a];
            a++;
        }
        while(c !== str2[b]) {
            result += str2[b];
            b++;
        }
        result += c;
        a++; b++;
    }
    
    return result + str1.substring(a) + str2.substring(b);
}
    
const findLCS = (str1, str2) => {
    const l1 = str1.length;
    const l2 = str2.length;
    const dp = new Array(l1+1).fill('').map((item) => (new Array(l2+1).fill('')));
    for(let i = 0; i < l1; i++) {
        for(let j = 0; j < l2; j++) {
            if(str1[i] === str2[j]) {
                dp[i+1][j+1] = dp[i][j] + str1[i];
            } else {
                dp[i+1][j+1] = dp[i+1][j].length > dp[i][j+1].length ? dp[i+1][j] : dp[i][j+1];
            }
        }
    }
    return dp[l1][l2];
}
