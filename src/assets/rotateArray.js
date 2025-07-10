// rotate [1, 2, 3, 4, 5] to the right by 1 steps
// [3, 4, 5, 1, 2]

function rotateArray(array, steps) {
  reverse(array, 0, array.length);
  reverse(array, 0, steps);
  reverse(array, steps, array.length);
}

function reverse(array, startIndex, endIndex) {
  let start = startIndex;
  let end = endIndex - 1;

  while (start < end) {
    let temp = array[start]; // temp = 1, start = 1, end = 5
    array[start] = array[end]; // temp = 1, start = 5, end = 5
    array[end] = temp; // temp = 1, start = 5, end = 1

    start++;
    end--;
  }
}

// [1, 2, 3, 4, 5][(5, 2, 3, 4, 1)][(5, 4, 3, 2, 1)][(1, 2, 3, 4, 5, 6)][
//   (6, 2, 3, 4, 5, 1)
// ][(6, 5, 3, 4, 2, 1)][(6, 5, 4, 3, 2, 1)];

// let a = 1;
// let b = 3;

// b = 1, a = 3;

// let temp = a; // temp = 1, a = 1, b = 3
// a = b; // temp = 1, a = 3, b = 3
// b = temp; // temp = 1, a = 3, b = 1

// 1100010010010100101;
