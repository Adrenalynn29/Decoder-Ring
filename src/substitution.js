// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const regAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  /* const regAlphabet = [
    { letter: "A", newL: "X" },
    { letter: "B", newL: "O" },
    { letter: "C", newL: "Y" },
    { letter: "D", newL: "Q" },
    { letter: "E", newL: "M" },
    { letter: "F", newL: "C" },
    { letter: "G", newL: "G" },
    { letter: "H", newL: "R" },
    { letter: "I", newL: "U" },
    { letter: "J", newL: "K" },
    { letter: "K", newL: "S" },
    { letter: "L", newL: "W" },
    { letter: "M", newL: "A" },
    { letter: "N", newL: "F" },
    { letter: "O", newL: "L" },
    { letter: "P", newL: "N" },
    { letter: "Q", newL: "T" },
    { letter: "R", newL: "H" },
    { letter: "S", newL: "D" },
    { letter: "T", newL: "J" },
    { letter: "U", newL: "P" },
    { letter: "V", newL: "Z" },
    { letter: "W", newL: "I" },
    { letter: "X", newL: "B" },
    { letter: "Y", newL: "E" },
    { letter: "Z", newL: "V" },
  ];*/
  function checkForDuplicates(array) {
    let valuesAlreadySeen = [];
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      if (valuesAlreadySeen.indexOf(value) !== -1) {
        return true;
      }
      valuesAlreadySeen.push(value);
    }
    return false;
  }
  // const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  function substitution(input, alphabet, encode = true) {
    const regAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();

    if (!alphabet) {
      //if there is no alphabet in the parameters, return false
      return false;
    }
    if (alphabet.length !== 26) {
      //if the alphabet used is not 26 characters, return false
      return false;
    }
    if (checkForDuplicates(alphabet) === true) {
      return false;
    }

    const decodeKey = {};
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      const newLetter = regAlpha[i];
      decodeKey[letter] = newLetter;
    }

    const encodeKey = {};
    for (let i = 0; i < alphabet.length; i++) {
      const letter = regAlpha[i];
      const newLetter = alphabet[i];
      encodeKey[letter] = newLetter;
    }
    let message = "";

    // if we are encoding
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          message += char;
        } else {
          const encodedChar = encodeKey[char];
          message += encodedChar;
        }
      }
      return message;
    }

    // if we are decoding
    if (encode === false) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          message += char;
        } else {
          const decodedChar = decodeKey[char];
          message += decodedChar;
        }
      }
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
