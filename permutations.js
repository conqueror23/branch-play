const getPermutations = array => {
  let perms = [];
  array.map((res, index, array) => {
    let current = array.pop();

    perms.push(current);

    // select a start point
    // push start point to array
    // get a second start point
    //

    // console.log(array)
  });
};

let array1 = [1, 2, 3, 4];
function perm(xs) {
  let ret = [];
  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
    //   console.log(rest)
    if (!rest.length) {
      ret.push([xs[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]));
        //   console.log(ret)
      }
    }
  }
  return ret;
}

//   slice and concat

// better solutions
const permutebetter = nums => {
  var numsList = [];
  var permList = [];
  permuteHelper(nums, numsList, permList);
  return permList;
};

var permuteHelper = function(nums, numsList, permList) {
  if (nums == undefined || nums.length == 0) {
    permList.push(numsList);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    let newNumsList = numsList.slice(0);
    newNumsList.push(nums[i]);

    let tempNums = nums.slice(0);
    tempNums.splice(i, 1);
    permuteHelper(tempNums, newNumsList, permList);
  }

  return;
};

// 2nd best solutions
const permute2nd = nums => {
  const ans = [];
  const swap = (i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };
  const recur = first => {
    if (first === nums.length) {
      ans.push([...nums]);
    } else {
      for (let i = first; i < nums.length; i++) {
        swap(first, i);
        recur(first + 1);
        swap(first, i);
      }
    }
  };
  recur(0);
  return ans;
};
// permute Quickest
const permuteQ = nums => {
  let res = [];
  let visited = new Array(nums.length).fill(0);
  helper(nums, 0, visited, [], res);
  return res;
  function helper(nums, level, visited, temp, res) {
    if (level === nums.length) {
      res.push(temp.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] === 1) continue;
      visited[i] = 1;
      temp.push(nums[i]);
      //console.log(temp)
      helper(nums, level + 1, visited, temp, res);
      temp.pop();
      visited[i] = 0;
    }
  }
};
