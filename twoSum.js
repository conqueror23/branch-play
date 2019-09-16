const array = [1, 2, 3, 4, 5, 7, 12];
const target = 6;
// the most common way
const forSolution = (array, target) => {
  let solution = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      // if(i!==j){
      if (array[i] + array[j] == target) {
        let so = { i, j };
        solution.push(so);
      }
      // }
    }
  }
  return solution;
};

forSolu = forSolution(array, target);

const solution1 = function(nums, target) {
  const empty = {};
  for (i = 0; i < nums.length; i++) {
    const firstNum = target - nums[i];
    if (empty[firstNum] !== undefined) {
      return [empty[firstNum], i];
    } else {
      empty[nums[i]] = i;
    }
  }
};

let sol1 = solution1(array, target);

// better solution 3

const twoSum3 = function(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const foundAt = seen[nums[i]];
    if (typeof foundAt !== "undefined" && foundAt !== i) return [foundAt, i];
    seen[target - nums[i]] = i;
  }
  return [];
};

// let sol3 =twoSum3(array,target);

// console.log(sol3);

const solution40s = function(nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var num2 = target - nums[i];
    if (map[num2] || map[num2] === 0) {
      return [map[num2], i];
    }
    map[nums[i]] = i;
  }
};

// let sol40 = solution40s (array,target);
// console.log(sol40)

const twoSum2nd = function(nums, target) {
  var dict = {};
  for (var i = 0; i < nums.length; i++) {
    dict[nums[i]] = i;
  }
  console.log(dict)
  for (var j = 0; j < nums.length; j++) {
    var first = target - nums[j];
    if (dict[first] && j != dict[first]) {
      return [j, dict[first]];
    }
  }
};

let twoSum2ndSol = twoSum2nd(array,target);
console.log(twoSum2ndSol);

// twoSumBest

const twoSumBest = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i].toString()] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let other = target - nums[i];
    if (map.hasOwnProperty(other) && map[other] != i) {
      return [i, map[other]];
    }
  }
};
