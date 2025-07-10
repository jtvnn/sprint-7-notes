// [1, 3, 5, 7, 9], [2, 4, 6, 8];
// i             j

function mergeArrays(array1, array2) {
  let mergedArray = [],
    i = 0,
    j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      mergedArray.push(array1[i++]);
    } else {
      mergedArray.push(array2[j++]);
    }
  }

  return mergedArray.concat(array1.slice(i)).concat(array2.slice(j));
}

// O(m + n);

// concat + sort minimum time complexity of O((m+n)^2)
// array1.concat(array2).sort();
