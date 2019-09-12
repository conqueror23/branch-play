const array =[1,2,3,4,5,7,12]
const target  = 6;
// the most common way
const forSolution= (array,target)=>{
    let solution=[]
    for(var i=0;i<array.length;i++){
        for(var j=i+1;j<array.length;j++){
            // if(i!==j){
                if(array[i]+array[j]==target){
                    let so = {i,j}
                  solution.push(so)  
                }
            // }
        }
    }
return solution;
}

forSolu = forSolution(array,target)

const  solution1  = function(nums, target) {
    const empty={};
   for(i=0;i<nums.length; i++){
     const firstNum= target-nums[i];
     if(empty[firstNum]!==undefined){
         return [empty[firstNum], i];
 } else  {empty[nums[i]]=i}
     }}

let sol1 = solution1(array,target )

console.log(sol1)