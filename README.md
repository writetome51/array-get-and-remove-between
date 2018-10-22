Removes and returns middle section of an array.
The first argument is the number of items at both the beginning and end of the array that you don't want to
remove.  Example:

let arr = [1,2,3,4,5,6,7,8];

let middle = getAndRemoveBetween(2, arr); // 2 means leave the first 2 and last 2 items alone.

middle is now [3,4,5,6]

arr is now [1,2,7,8]
