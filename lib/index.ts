import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';


// Example: if array is [1,2,3,4,5,6,7] , and you call getAndRemoveBetween(2, array)
// the array will be changed to [1,2,6,7] and the function will return [3,4,5] .  It
// preserves the first 2 items and the last 2.

export function getAndRemoveBetween(numItemsToKeepAtEachEnd, array): any[] {
	errorIfNotInteger(numItemsToKeepAtEachEnd);
	if (numItemsToKeepAtEachEnd < 1) throw new Error('The number of items to' +
		' preserve at each end must be at least 1');
	if ((numItemsToKeepAtEachEnd * 2) >= array.length) {
		throw new Error('The number of items to preserve multiplied by 2' +
			' is either equal to or exceeds the length of the array. This is not' +
			' allowed.');
	}
	let numToRemove = array.length - (numItemsToKeepAtEachEnd * 2);
	return getAndRemoveAdjacentAt(numItemsToKeepAtEachEnd, numToRemove, array);
}
