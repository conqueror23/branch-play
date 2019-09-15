const mergeSorted =(ar1,ar2)=>{
// let ar2 the most left do the work 
let finalArray  =[];
ar1.map(num1=>{
     ar2.map(num2=>{
     if(num1<num2){
         finalArray.push(num1)

     }else if(num1==num2){
          finalArray.push(num1)
          finalArray.push(num2)
     }else{
          finalArray.push(num2)
     }
     })
})

}


let ar1 = [1,3,4,5,6];

let ar2 = [3,5,7];

let ar3 =[2,5];



