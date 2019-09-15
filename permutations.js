const getPermutations=(array)=>{
    let perms = [];
    array.map((res,index,array)=>{
        let current =array.pop();
        
        perms.push(current);
        
        // select a start point 
        // push start point to array 
        // get a second start point 
        // 

        // console.log(array)
    })
}

let array1 =[1,2,3,4]
function perm(xs) {
    let ret = [];
    for (let i = 0; i < xs.length; i = i + 1) {
        
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
  
//   slice and concat

// console.log(array1)
let slice1 = array1.slice(0,2)
let concat1 = slice1.concat(4,4)
console.log(concat1)
let permsn = perm(array1)
// console.log(permsn)