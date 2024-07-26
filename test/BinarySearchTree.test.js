import { expect } from 'chai';
import { binarySearch, compare_number } from '../BinarySearchTree.js';


describe('binarySearch', function() {
	const ar = [1, 2, 2, 2, 5, 9, 11, 12, 12, 12, 12, 15, 20, 20, 20, 25, 40, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 80];

	it('should find the correct index or insertion point for each number from 0 to 100', function() {
			for(let i = 0; i <= 100; i++) {
					let n = binarySearch(ar, i, compare_number);

					if (n >= 0) {
							// Element was found
							expect(ar[n]).to.equal(i);
					} else {
							// Element was not found
							let insertionPoint = -n - 1;
							expect(insertionPoint).to.be.within(0, ar.length);
							
							if (insertionPoint < ar.length) {
									expect(ar[insertionPoint]).to.be.greaterThan(i);
							}
							
							if (insertionPoint - 1 >= 0) {
									expect(ar[insertionPoint - 1]).to.be.lessThan(i);
							}
					}
			}
	});
});