/*
 * Binary search in JavaScript.
 * Returns the index of the element in a sorted array or (-n-1) where n is the insertion point for the new element.
 * Parameters:
 *     ar - A sorted array
 *     el - An element to search for
 *     compare_fn - A comparator function. The function takes two arguments: (a, b) and returns:
 *        a negative number  if a is less than b;
 *        0 if a is equal to b;
 *        a positive number of a is greater than b.
 * The array may contain duplicate elements. If there are more than one equal elements in the array, 
 * the returned value can be the index of any one of the equal elements.
 * 
 * array.sort(function (a, b) {  //to sort the elements
    return a - b;
});

 */

export function binarySearch(ar, el, compare_fn) {
	let m = 0;
	let n = ar.length - 1;
	while (m <= n) {
		let k = Math.floor((n + m) / 2);		// Find the middle index integer
			let cmp = compare_fn(el, ar[k]);  // Compare the target element with the middle element
			if (cmp > 0) {
					m = k + 1;  // Search in the right half
			} else if (cmp < 0) {
					n = k - 1;  // Search in the left half
			} else {
					return k;  // Element found
			}
	}
	return -m - 1;  // Element not found
}

export function compare_number(a, b) {
return a - b;
}

