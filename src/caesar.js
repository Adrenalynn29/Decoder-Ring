// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //what do I do with encode?
    if (shift === 0) {
      return false;
    }
    if (shift > 25) {
      return false;
    }
    if (shift < -25) {
      return false;
    }
    var solved = "";
    var word = input.toLowerCase(); //all string into lowercase
    if (encode === true) {
      for (var i = 0; i < word.length; i++) {
        var asciNum = word[i].charCodeAt(); //ascii number for each letter
        var newAsciNum = asciNum + shift;

        if (asciNum)
          if (asciNum >= 32 && asciNum <= 47) {
            solved += String.fromCharCode(asciNum);
          } else {
            if (newAsciNum > 122) {
              // is ascinum goes past z (122) then it needs to go back to a.
              solved += String.fromCharCode(newAsciNum - 26); // so we add the shift and then take away 26
            } else {
              if (newAsciNum < 97) { //if it goes before a
                solved += String.fromCharCode(newAsciNum + 26); //get to correct letter
              } else {
                solved += String.fromCharCode(asciNum + shift);
              }
            }
          }
      }
    } else {
      if (encode === false);
        for (var i = 0; i < word.length; i++) {
          var asciNum = word[i].charCodeAt(); //ascii number for each letter
          var newAsciNum = asciNum - shift;
  
          if (asciNum)
            if (asciNum >= 32 && asciNum <= 47) {
              solved += String.fromCharCode(asciNum);
            } else {
              if (newAsciNum > 122) {
                // is ascinum goes past z (122) then it needs to go back to a.
                solved += String.fromCharCode(newAsciNum - 26); // so we add the shift and then take away 26
              } else {
                if (newAsciNum < 97) { //if it goes before a
                  solved += String.fromCharCode(newAsciNum + 26); //get to correct letter
                } else {
                  solved += String.fromCharCode(asciNum - shift);
                }
              }
            }
        }
    
  }
    return solved;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
