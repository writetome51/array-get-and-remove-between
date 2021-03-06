"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1:
var middle = index_1.getAndRemoveBetween(1, arr);
if (arrays_match_1.arraysMatch(middle, [2, 3, 4, 5, 6, 7, 8, 9]))
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: make sure those items were removed from array:
if (arrays_match_1.arraysMatch(arr, [1, 10]))
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
middle = index_1.getAndRemoveBetween(2, arr);
if (arrays_match_1.arraysMatch(middle, [3, 4, 5, 6, 7, 8]))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4: make sure those items were removed from array:
if (arrays_match_1.arraysMatch(arr, [1, 2, 9, 10]))
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
middle = index_1.getAndRemoveBetween(4, arr);
if (arrays_match_1.arraysMatch(middle, [5, 6, 7, 8, 9, 10, 11, 12]))
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6: make sure those items were removed from array:
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 13, 14, 15, 16]))
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
middle = index_1.getAndRemoveBetween(6, arr);
if (arrays_match_1.arraysMatch(middle, [7, 8, 9, 10]))
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: make sure those items were removed from array:
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16]))
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
middle = index_1.getAndRemoveBetween(8, arr);
if (arrays_match_1.arraysMatch(middle, [9]))
    console.log('test 9 passed');
else
    console.log('test 9 failed');
// Test 10: make sure those items were removed from array:
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17]))
    console.log('test 10 passed');
else
    console.log('test 10 failed');
// Test 11: if there is no middle past the number of items you want to ignore, trigger
// error:
var errorTriggered = false;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
try {
    middle = index_1.getAndRemoveBetween(8, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 failed');
