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
  // miniLength is the length you would find the most
  for (let pos = 0; pos < miniLength; pos++) {
    // get the words in the same time??
     for(let index = 0;index< pos.length;index++){
        

        }
     }
  
  }

};

let stringArray = ["flower", "flood", "flog", "float"];

let common = longestPre(stringArray);
