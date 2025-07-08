const test = [5, 4, 3, 2, 1];
bubbleSort(test);

function bubbleSort(myArray) {
  console.log(myArray);

  let n = myArray.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log(`i: ${i} j: ${j}: ` + myArray);
      if (myArray[j] < myArray[i]) {
        let temp = myArray[j];
        myArray[j] = myArray[i];
        myArray[i] = temp;
      }
    }
  }
  console.log(myArray);
}

// n = length of array

function printArray(array) {
    // print each element
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]) 5ms con
    }

    for(let i = 0; i < array.length; i++) {
        
        for(let i = 0; i < array.length; i++) {
            
            for(let i = 0; i < array.length; i++) {
                
                for(let i = 0; i < array.length; i++) {
                    console.log(array[i])
                }
            }
        }
    }
}

function sum(a, b){
    return a + b;
}

TC = O(1)

[1, 2, 3, 6, 2]

function maxElementInArray(myArr) {
    let max = 0;
    for(i: 0 -> n) {
        max = Math.max(max, myArr[i])
    }
    return max;
}
TC = O(n)

Math.max(0, 10)