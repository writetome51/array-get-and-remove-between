# getAndRemoveBetween(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItemsToKeepAtEachEnd,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[] 

Removes and returns everything in `array` between `numItemsToKeepAtEachEnd`.  

## Examples
```
let arr = [1,2,3,4,5,6,7,8];  
let middle = getAndRemoveBetween(2, arr); // leaves the first 2 and last 2 items alone.
// middle is now [3,4,5,6]  
// arr is now [1,2,7,8]

let arr = [1,2,3,4,5,6,7,8];  
let middle = getAndRemoveBetween(1, arr); // leaves the first and last items alone.
// middle is now [2,3,4,5,6,7]  
// arr is now [1,8]
```

## Installation
`npm i  @writetome51/array-get-and-remove-between`

## Loading
```
import {getAndRemoveBetween} from '@writetome51/array-get-and-remove-between';
var getAndRemoveBetween = 
    require('@writetome51/array-get-and-remove-between').getAndRemoveBetween;
```