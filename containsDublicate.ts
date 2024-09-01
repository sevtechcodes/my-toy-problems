// 217. Contains Duplicate:
// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Approach 1: Brute Force
// The brute force approach compares each element with every other element in the array to check for duplicates. 
// If any duplicates are found, it returns true. This approach is straightforward but has a time complexity of O(n^2), making it less efficient for large arrays.

function containsDuplicate1(nums: number[]): boolean {
	let n = nums.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n; j++) {
			if (nums[i] == nums[j]) {
				return true;
			}
		}
	}

	return false;
};


// Approach 2: Sorting
// The sorting approach sorts the array in ascending order and then checks for adjacent elements that are the same. If any duplicates are found, it returns true. Sorting helps in bringing duplicates together, simplifying the check. 
//However, sorting has a time complexity of O(n log n).

function containsDuplicate2(nums: number[]): boolean {
	let n = nums.length;
	nums.sort((a, b) => a - b);  // Sorting the array numerically
	for (let i = 1; i < n; i++) {
		if (nums[i] == nums[i - 1]) return true;  // Compare with the previous element
	}
	return false;
};


// Approach 3: Hash Set
// The hash set approach uses a hash set data structure to store encountered elements. It iterates through the array, checking if an element is already in the set. If so, it returns true. Otherwise, it adds the element to the set. 
// This approach has a time complexity of O(n) and provides an efficient way to check for duplicates.

function containsDuplicate3(nums: number[]): boolean {
	let newSet = new Set<number>();
	for (const num of nums) {
		if (newSet.has(num)) {
			return true
		}
		newSet.add(num)
	}
	return false;
};

// Approach 4: Hash Map
// The hash map approach is similar to the hash set approach but also keeps track of the count of occurrences for each element. It uses a hash map to store the elements as keys and their counts as values. If a duplicate element is encountered (count greater than or equal to 1), it returns true.
// This approach provides more information than just the presence of duplicates and has a time complexity of O(n).

function containsDuplicate4(nums: number[]): boolean {
	let newMap = new Map<number, number>();
	for (const num of nums) {
		if (newMap.has(num) && newMap.get(num)! >= 1) {
			return true
		}
		newMap.set(num, (newMap.get(num) ?? 0) + 1)
	}
	return false;
};