"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var getAndRemoveAdjacentAt_1 = require("./getAndRemoveAdjacentAt");
// Example: if array is [1,2,3,4,5,6,7] , and you call getAndRemoveMiddle(2, array)
// the array will be changed to [1,2,6,7] and the function will return [3,4,5] .  It
// preserves the first 2 items and the last 2.
function getAndRemoveMiddle(numItemsToKeepAtEachEnd, array) {
    errorIfNotInteger_1.errorIfNotInteger(numItemsToKeepAtEachEnd);
    if (numItemsToKeepAtEachEnd < 1)
        throw new Error('The number of items to' +
            ' preserve at each end must be at least 1');
    if ((numItemsToKeepAtEachEnd * 2) > array.length) {
        throw new Error('The number of items to preserve multiplied by 2' +
            ' exceeds the length of the array. This is not allowed.');
    }
    var numToRemove = array.length - (numItemsToKeepAtEachEnd * 2);
    return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(numItemsToKeepAtEachEnd, numToRemove, array);
}
exports.getAndRemoveMiddle = getAndRemoveMiddle;
