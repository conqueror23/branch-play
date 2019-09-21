

const TwoSumT=(arr)=> {
  let target = arr[0];
  let solutions= [];
   for(let index = 1;index<arr.length;index++){
     for(let index2=index+1;index2<arr.length;index2++){
       if(arr[index2]+arr[index] == target){
        let temp = `${arr[index]},${arr[index2]}`
        solutions.push(temp)
       }
     }
   }
   if(solutions.length==0){
      arr =-1;
   }else{
       arr =solutions.join(' ')
    // arr =[...solutions]
   }
   return arr;
  // code goes here  
}
let arr = [3,2,1,-2,5];
let result =TwoSumT(arr);
console.log(result)