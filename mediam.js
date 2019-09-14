const array1 = [2,12,3,45,2]
const array2 = [32,5,3,12,3]

// most straight forward way to do this 
const quickSort=(array)=>{
    if(array.length<2 ){
        return array ;
    }
    let piviot  = array.pop()
    let left =[ ];
    let right =[];
    array.map(res=>{
        if(res> piviot){
            right.push(res)
        }else{
            left.push(res)
        }
    })
    return [...quickSort(left),piviot,...quickSort(right)]
}
const getMediam  = (array1,array2)=>{
    let totalArray = [...array1,...array2]
    totalArray = quickSort(totalArray);
    console.log(totalArray)
    let len = totalArray.length
    let mediam =0;
    let mid  = Math.floor(len/2)
    if(len%2==0){
        mediam = totalArray[mid]+totalArray[mid+1]
        mediam = mediam/2 
        return mediam
        // mediam = totalArray[len/2]+totalArray[len/2+]
        
    }else{
        mediam =totalArray[mid] 
        return mediam
    }

}



// for two sorted array
// need to fix the crossing issues
const findMedianSortedArrays = function(nums1, nums2) {
    // crossing issues
    if()
    let totalLen = nums1.length+ nums2.length
    let totalArray = [...nums1,...nums2]
    let mediam = 0;
    let mediamInd  = Math.floor(totalLen/2)
    if(totalLen %2== 0){
        mediam = (totalArray[mediamInd]+totalArray[mediamInd+1])/2
    }else[
        mediam = totalArray[mediamInd]
    ]
    return mediam

};

let mediam2  = findMedianSortedArrays(array1,array2);
console.log(mediam2)