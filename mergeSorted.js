let ar1 = [1, 3,2, 4, 5, 6];
let ar2 = [5, 9, 7];
let ar3 = [2, 5];
const mergeSorted = (ar1, ar2) => {
  // let ar2 the most left do the work
  let finalArray = [];
  ar1.map(num1 => {
    ar2.map(num2 => {
      if (num1 < num2) {
        finalArray.push(num1);
      } else if (num1 == num2) {
        finalArray.push(num1);
        finalArray.push(num2);
      } else {
        finalArray.push(num2);
      }
    });
  });
};

// the most direct way
const mergeSortedSet=(arr1,arr2)=>{
  let mergeData  =new Set(arr1);
  arr2.map(ele=>{
    mergeData.add(ele)
  })

  mergeData = [...mergeData]
  
  mergeData.sort((a,b)=>{
    return a-b;
  })
  return mergeData;
}

let merged1 = mergeSortedSet(ar1,ar2)
// console.log(merged1)
const mergeTwoListsW = (l1, l2)=> {
  if (!l1 || !l2) return l1 || l2;
 const r = new ListNode(0);
 let l = r;
 console.log(l)
 while (l1 && l2) {
   if (l1.val <= l2.val) {
     l.next = l1;
     l1 = l1.next;
   } else {
     l.next = l2;
     l2 = l2.next;
   }
   l = l.next;
 }
 if (l1) l.next = l1;
 if (l2) l.next = l2;
 return r.next;
};

const mergeTwoLists1 = (l1, l2)=> {
  if (!l1 || !l2) return l1 || l2;
 const r = new ListNode(0);
 let l = r;
 console.log(l)
 while (l1 && l2) {
   if (l1.val <= l2.val) {
     l.next = l1;
     l1 = l1.next;
   } else {
     l.next = l2;
     l2 = l2.next;
   }
   l = l.next;
 }
 if (l1) l.next = l1;
 if (l2) l.next = l2;
 return r.next;
};

const mergeTwoListsB3 = function(l1, l2) {
  let head = new ListNode;
  let l;
  
  while (l1 || l2) {
    if (!l) {
      l = head
    } else {
      l.next = new ListNode;
      l = l.next;
    }
    
    if (!l2) {
      l.val = l1.val;
      l1 = l1.next;
      continue;
    }
    if (!l1) {
      l.val = l2.val;
      l2 = l2.next;
      continue;
    }
    if (l1.val < l2.val) {
      l.val = l1.val;
      l1 = l1.next;
    }  else {
      l.val = l2.val;
      l2 = l2.next;
    }
  }
  
  return head.val != undefined ? head : null;
};

// best solution
const mergeTwoListsBest = (l1, l2)=> {
  var newList = [];
  var now1 = l1;
  var now2 = l2;
  var start= null;
  var now;
  while(now1!=null || now2!=null){
      var tmp;
      if((now1?now1.val:Number.MAX_VALUE)<(now2?now2.val:Number.MAX_VALUE)){
          if(start==null){ now = start = now1;}
          else{ now = now.next = now1;}
          now1 = now1.next;
      }else{
          if(start==null){ now = start = now2;}
          else{ now = now.next = now2;}
          now2 = now2.next;
      }
  }
  return start;
};