// abba
// malayalam

// M       O      O        M
// right   left

function checksIfPalindrome(myString) {
  myString = myString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0,
    right = myString.length - 1;

  while (left < right) {
    if (myString[left] !== myString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// return myString == myString.split('').reverse().join('');
// Time complexity = O(n)
// Space Complexity = O(n)
// we can do it with better space complexity!!!
