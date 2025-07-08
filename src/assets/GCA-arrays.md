how much time the function takes

how much longer does it take, the larger the input gets

Time Complexity = O(1) // Time complexity is a constant, does NOT increase with increase of input size
O(n) // proportional to 'n' where n is size of input

[0, 1, 2].forEach(e => console.log(e)); // O(n)

O(n^2)

proportional to n^2

for(i: 0 -> n) {
    for(j: i -> n) {
        console.log(i, j);
    }
}

// O(n^2)


// === SPACE COMPLEXITY ===

function test(array) {
    return array.filter((x) => x > 10);
} // O(n) space complexity

Binary Search O(log(n)) // Dividing into half and searching

[1, 2, 3, 7, 3].push(5) // O(1)

[1, 2, 3, 3, 4, 5, 5, 6, 7, 9] // I want to add a '5', IN ORDER 

// [1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 9]

function addElement(array, insertValue) {
    let insertPosition; 
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= insertValue) {
            insertPosition = i;
            break;
        }

        for(i: 1 -> 3) {

        }
    }

    // insertPosition = 5
    return array.slice(0,5).concat([5]).concat(array.slice(6))
} // O(n)


// Remove all occurence of a number in an array

function removeElement(array, value) {
    return array.filter(x => x != value)
} // this has O(n) SPACE complexity. can you do it in O(1) SPACE complexity???


[1, 3, 4, 9, 3, 6, 0, 5, 7, 3, 1, 7, 4, 5, 9] // remove 3
[1, 4, 9, 6, 0, 5, 7, 1, 7, 4, 5, 9]


[1, 2, 5, 6, 7] // remove 3
function removeElement(array, value) {
    let index = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== value) {
            array[index] = array[i]; 
            index++;
        }
    }
    return array;
}

// index = 3, i = 5

// find element in array
// insert element into array 
// sort array

// Rotate an array by 'k'

[1, 2, 3, 4] // rotate it to the right, 3 times
[4, 1, 2, 3]
[3, 4, 1, 2]


[3, 9, 5, 7, 8] // rotate to the right by 3
[5, 7, 8, 3, 9]


[3, 9, 5, 7, 8] // rotate to the right by 5
[3, 9, 5, 7, 8]

[3, 9, 5, 7, 8] // rotate to the right by 10
[3, 9, 5, 7, 8] // rotate to the right by 0

function rotateArray(array, k) {
    k = k % array.length;

    let newArray = array;
    for(i: 0 -> n){
        newArray[i + 1] = array [i]
    }
} // O(n) space complexity

// O(1) SPACE complexity: 
[3, 9, 5, 7, 8] // rotate by 3
[8, 7, 5, 9, 3] // reverse the whole array
[5, 7, 8, 9, 3] // partition at the rotation Number, reverse first part
[5, 7, 8, 3, 9] // reverse second part


['a', 'b', 'c', 'd', 'e', 'f', 'g'] // rotate by 2
['g', 'f', 'e', 'd', 'c', 'b', 'a'] // reverse
['f', 'g', 'e', 'd', 'c', 'b', 'a'] // 
['f', 'g', 'a', 'b', 'c', 'd', 'e']

array.reverse()