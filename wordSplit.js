let sen1 = "thisis a stirng tha=t would cna be split ";

let strings1 = "thisisadog";

let dictionary1 = ["this", "is", "a", "dog"];



const wordBreak = (s, wordDict) => {
  if (!s && !wordDict.length) {
    return true;
  } else if (!s || !wordDict.length) {
    return false;
  }
  let dp = new Array(s.length + 1).fill(false);
  // console.log(dp);
  dp[0] = true;
  // dp[i] 代表 0-i是breakable的
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  //   console.log(dp);
  return dp[s.length];
};

const wordBreak2nd = function(s, wordDict) {
  const dp = [true];
  dp[s.length] = false;
  wordDict.sort((a, b) => {
    return a.length - b.length;
  });
  const searchAndMark = startIdx => {
    let len,
      nextStart,
      previousLen = null;
    for (let wi = 0; wi < wordDict.length; wi++) {
      len = wordDict[wi].length;
      if (s.length - startIdx < len) break;
      if (previousLen === len && dp[nextStart]) continue;
      nextStart = startIdx + len;
      if (!dp[nextStart] && s.substring(startIdx, nextStart) === wordDict[wi]) {
        dp[nextStart] = true;
        searchAndMark(nextStart);
      }
    }
  };
  searchAndMark(0);
  return !!dp.pop();
};

let res = wordBreak2nd(sen1,dictionary1)
console.log(res)

// best soluiton
var wordBreakBest = function(s, wordDict) {
  const mem = {};
  const maxLength = getMaxLength(wordDict);
  const hashWordDict = {};
  for (let w of wordDict) {
    hashWordDict[w] = true;
  }
  return breakWord(s, hashWordDict, mem, maxLength);
};
const breakWord = (s, wordDict, mem, maxLength) => {
  if (s === "") return true;
  if (mem[s] !== undefined) return mem[s];
  for (let i = s.length - maxLength; i < s.length; i++) {
    const right = s.substring(i);
    const left = s.substring(0, i);
    if (
      right.length <= maxLength &&
      wordDict[right] &&
      breakWord(left, wordDict, mem, maxLength)
    ) {
      mem[s] = true;
      return true;
    }
  }
  mem[s] = false;
  return false;
};
const getMaxLength = wordDict => {
  let max = 0;
  for (w of wordDict) {
    if (w.length > max) {
      max = w.length;
    }
  }
  return max;
};
