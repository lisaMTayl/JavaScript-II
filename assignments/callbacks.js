// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
    return cb = arr.length;   // getLength passes the length of the array into the callback.
}
//  invoke getLength()
console.log(getLength(items));


function last(arr, cb) {
    return cb = (arr[arr.length-1]);// last passes the last item of the array into the callback.
}
// invoke last()
console.log(last(items));


function sumNums(x, y, cb) {
    return cb = x + y;// sumNums adds two numbers (x, y) and passes the result to the callback.
}
// invoke sumNums()
console.log(sumNums(4, 6));


function multiplyNums(x, y, cb) {
    return cb = x * y;// multiplyNums multiplies two numbers and passes the result to the callback.
}
// invoke multiplyNums
console.log(multiplyNums(2,8));


function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.

        for (let i=0; i<items.length; i++) {
            if (list[i] === item) {
                return cb = true;
            }
            else {
                return false;
            }
        }
        return cb;
    }
// invoke contains()
    console.log(contains('Pencil', items));
    console.log(contains('Sharpie', items));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.

}
