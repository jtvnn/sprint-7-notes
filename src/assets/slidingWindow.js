// let arr = [1, 2, 3, 7, 4, 5, 6];

function highestMean(arr) {
  let maxMean = -Infinity;
  let currentMean;
  for (let i = 0; i <= arr.length - 2; i++) {
    currentMean = (arr[i] + arr[i + 1] + arr[i + 2]) / 3;
    maxMean = Math.max(maxMean, currentMean);
  }

  return maxMean;
} // fixed length sliding window

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0,
    right = 0,
    maxLength = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return maxLength;
}

// "abracadabra" => 4
