function isAnagram(string1, string2) {
  // coffee, offcee
  // charCount = {c: 0, o: 0, f: 0, e: 0}

  if (string1.length !== string2.length) return false;

  let charCount = {};

  for (let char of string1) {
    // charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of string2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// stressed, desserts
// tea, ate
// taco, coat

// land, hair
