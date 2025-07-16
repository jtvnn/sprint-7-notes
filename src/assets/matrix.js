function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return [j + 1, i + 1];
      }
    }
  }

  return null;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const currentArray = matrix[i];
    for (let j = 0; j < currentArray.length; j++) {
      console.log(matrix[i][j]);
    }
  }
}

function searchMatrixBoolean(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  return false;
}

const matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
// return [i, j]
searchMatrix(matrix, "c"); // [3, 1]
searchMatrix(matrix, "h"); // [2, 3]
searchMatrix(matrix, "x"); // null

printMatrix(matrix);
searchMatrixBoolean(matrix, "d"); // true
searchMatrixBoolean(matrix, "s"); // false
