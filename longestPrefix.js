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

  let currentCharacter  = stringArray[0][charPos];
  // miniLength is the length you would find the most
  for(let wordIndex = 1;wordIndex< wordPos.length;wordIndex++){
    for (let charPos = 0; charPos < miniLength; charPos++) {
      if(currentCharacter == stringArray[wordIndex][charPos])
       
      }
   }
  
  }

};

let stringArray = ["flower", "flood", "flog", "float"];

let common = longestPre(stringArray);
