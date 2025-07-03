function isPalindrome(str) {
  let origString = str.replaceAll(",", "").replaceAll(" ", "").toLowerCase();
  let reverse = str
    .replaceAll(",", "")
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return reverse == origString;
}

module.exports = { isPalindrome };
