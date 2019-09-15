let input = [2, 3, 6, 11, 9, 5, 20, 10];
const quickSort = array => {
  if (array.length < 2) {
    return array;
  }
  let piviot = array.pop();
  let left = [];
  let right = [];
  array.map(element => {
    if (element < piviot) {
      left.push(element);
    } else {
      right.push(element);
    }
  });
  return [...quickSort(left), piviot, ...quickSort(right)];
};
const lcs = array => {
  // sort and then
  let sorted = quickSort(array);
  let consequtive = 0;
  let conArray = [];
  // console.log(sorted)
  for (let index = 0; index < sorted.length; index++) {
    if (sorted[index + 1] - sorted[index] == 1) {
      consequtive += 1;
    } else {
      conArray.push(consequtive + 1);
      consequtive = 0;
    }
  }
  let conArraySorted = quickSort(conArray);
  return conArraySorted[conArraySorted.length - 1];
};
// lcs(input);

const lcsSet = input => {
  let lcsSet = new Set();
  input.map(element => {
    lcsSet.add(element);
  });
  let values = [...lcsSet];
  console.log(values);
  let consequtive = 0;
  let conArray = [];
  for (let index = 0; index < values.length; index++) {
    if (values.includes(values[index] - 1)) {
      consequtive += 1;
    } else {
      conArray.push(consequtive);
      consequtive = 0;
    }
  }
};
// lcsSet(input)
// console.log(quickSort(input))
// console.log(lcs(input))

const longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  nums = [...new Set(nums)];
  nums = nums.sort((a, b) => {
    return a - b;
  });
  curCons = 1;
  highestCons = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      curCons++;
    } else {
      if (curCons > highestCons) {
        highestCons = curCons;
      }
      curCons = 1;
    }
  }
  return Math.max(curCons, highestCons);
};

const longestConsecutive2 = nums => {
  const set = new Set(nums);
  let longest = 0;
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let next = num + 1;
      while (set.has(next)) {
        next = next + 1;
      }
      longest = Math.max(longest, next - num);
    }
  }
  return longest;
};
let conse2 = longestConsecutive2(input);
//   console.log(conse2);

const priviateLCS = input => {
  const lcs = new Set(input);
  let longest = 0;
  for (let ele of lcs) {
    if (!lcs.has(ele - 1)) {
      let next = ele + 1;
      while (lcs.has(next)) {
        next += 1;
      }
      longest = Math.max(longest, next - ele);
    }
  }
  return longest;
};
// quickest solutions
const longestConsecutiveQ = function(nums) {
  let seen = new Set(nums);
  let maxCount = 0;
  for (let num of seen) {
    if (seen.size <= maxCount) break;
    let currCount = 1;
    seen.delete(num);
    for (let curr = num - 1; seen.has(curr); curr--) {
      currCount++;
      seen.delete(curr);
    }
    for (let curr = num + 1; seen.has(curr); curr++) {
      currCount++;
      seen.delete(curr);
    }
    maxCount = Math.max(currCount, maxCount);
  }
  return maxCount;
};

let result = longestConsecutiveQ(input);
console.log(result);
