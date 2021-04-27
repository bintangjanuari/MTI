function designerPdfViewer(h, word) {
  let kata = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
  let val = h;
  
  a = kata.reduce((testStudent, testCase, key) => {
    testStudent[key] = val[testCase];
    return testStudent;
    
  });
  

  let kataValue = [];

  word.split("").map((alpha) => {
    if(a.hasOwnProperty(alpha)){
      kataValue.push(a[alpha]);
    }
  });

  let sum  = Math.max.apply(null, kataValue);
  console.log(sum);

  let length = kataValue.length;
  console.log(length);

  return sum*length;

  
}

    const result = (testStudent, testCase) => testStudent === testCase

    console.log(result(designerPdfViewer([
        1, 3, 1, 3, 1, 4, 1, 3,
        2, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5,
        5, 7]
      , "zaba",), 28))

      console.log(result(designerPdfViewer([
        5, 1, 2, 7, 1, 3, 1, 3,
        2, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5,
        5, 7]
      , "daga",), 28))

      console.log(result(designerPdfViewer([
        5, 1, 2, 7, 1, 3, 1, 100,
        2, 33, 5, 20, 119, 5, 5, 5,
        20, 1, 17, 5, 12, 5, 13, 88,
        15, 77]
      , "xhy",), 300))