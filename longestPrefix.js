const longestPre = strArray => {
  // you need to walk through the items in same time?
  let prefix = "";
  // get the shortest word?
  // then walk through that long?

  let miniLength = strArray.reduce((pre, cur, index) => {
    if (cur.length < strArray[index - 1]) {
      mini = cur.length;
    } else {
      mini = strArray[index - 1].length;
    }
    return mini;
  });

  // cannot do like this you may only need to find the right way to display that out s

  let currentCharacter = stringArray[0][charPos];
  // miniLength is the length you would find the most
  for (let wordIndex = 1; wordIndex < wordPos.length; wordIndex++) {
    for (let charPos = 0; charPos < miniLength; charPos++) {}
  }
};

let common = longestPre(stringArray);

// solution1
const longestCommonPrefix1 = function(strs) {
  if (strs.length === 0) return "";
  let r = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return r;
    }
    r += strs[0][i];
  }
  return r;
};


//  longPre 3rd
const  longestCommonPrefix3rd = function(strs) {
  if (strs.length==0){return ""}
  var p = strs[0];
  for (i=1;i<strs.length;i++){
      while (p != strs[i].slice(0,p.length)){
          if (p == ""){return ""}
          else{p=p.slice(0,p.length-1)}
      }
  }
  return p
  
};

//  2nd best solutions

const longestCommonPrefix2nd = function(strs) {
  if ( strs === undefined || strs.length === 0) {
      return ""
   }   
   A = strs.sort()
   a = A[0], b = A[A.length - 1]
   var i = 0
   while ( i < a.length && a.charAt(i) == b.charAt(i)) i++ 
   return a.substring(0,i)
};

// 1st 


const longestCommonPrefix1st = function(strs) {
	if (strs.length === 0) return "";
	let prefix = "";
	let t1 = "";
	for (let i = 0; i < strs.length; i++) {
		if (!strs[i]) {
			return "";
		} else if (t1 === "") {
			t1 = strs[i];
		}
	}

	for (let i = 1; i < t1.length + 1; i++) {

		let test = t1.substring(0, i);
		if (!testPrefix(test, strs)) {
			break;
		} else {
			prefix = test;
		}
	}
	return prefix;
};
const testPrefix = (prefix, arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(prefix) !== 0) {
			return false;
		}
	}
	return true;
};
