
let totalArray = [];

let array1 =[2,1,4,5];
let array2 = [3,4,9,5,6,5,3]

totalArray =[array1,array2]


const saveArray =(x,y,number,baseArray)=>{
    console.log(baseArray);
    if(baseArray[x][y] !==null){
        baseArray[x][y] =number;
    }
    return baseArray;

}
finalArray = saveArray(0,6,5,totalArray)
// console.log(...finalArray)
// console.log(totalArray[0][1])