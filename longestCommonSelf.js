const longestCommon =(str1,str2)=>{
    let dp =[];
    dp.push(Array(str2.length+1).fill(0));
    // add str2 length indexes ??
    for(let i =1;i<=str1.length;i++){
        dp.push([0])
    }
    console.log(dp)
    for(let i =1;i<=str1.length;i++){
        for( let j = 1;j<=str2.length;j++){
            if(str1[i-1]===str2[j-1]){
                dp[i][j] = 1+dp[i-1][j-1];
            }else{
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    console.log(dp)
    return dp[str1.length][str2.length]
}


let str1= 'thisisagreatetool';
let str2= 'thisisbadtool'
let cs= longestCommon(str1,str2)