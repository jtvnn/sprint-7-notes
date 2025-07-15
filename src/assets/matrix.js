function searchMatrix(matrix, target) {
  let targetFound = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        targetFound = true;
      }
    }
  }

  return targetFound;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const currentArray = matrix[i];
    for (let j = 0; j < currentArray.length; j++) {
      console.log(matrix[i][j]);
    }
  }
}

const matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

printMatrix(matrix);
searchMatrix(matrix, "d"); // true
searchMatrix(matrix, "s"); // false
