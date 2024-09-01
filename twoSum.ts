// 1. Two Sum
// Given an array of integer nums and an integer target, return
// indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// Approach using a hash table:

// Create an empty hash table to store elements and their indices.
// Iterate through the array from left to right.
// For each element nums[i], calculate the complement by subtracting it from the target: complement = target - nums[i].
// Check if the complement exists in the hash table. If it does, we have found a solution.
// If the complement does not exist in the hash table, add the current element nums[i] to the hash table with its index as the value.
// Repeat steps 3-5 until we find a solution or reach the end of the array.
// If no solution is found, return an empty array or an appropriate indicator.
// This approach has a time complexity of O(n) since hash table lookups take constant time on average. It allows us to solve the Two Sum problem efficiently by making just one pass through the array.
//Since both the lookup and insertion operations are O(1) and we perform these operations for each of the n elements in the array, the overall time complexity is O(n).
// Space complexity: O(n)


function twoSum(nums: number[], target: number): number[] {
	const numMap = new Map<number, number>(); //initialize the hast table. numMap will store (number, index) pairs
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		const complement = target - nums[i];
		if (numMap.has(complement)) {
			return [numMap.get(complement)!, i] //Find the complement
		}
		numMap.set(nums[i], i) //Build the hash table
	}
	return [];
};