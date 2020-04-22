// Given an array of integers, return indices of the two numbers such 
// that they add up to a specific target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Brute Force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  let totalItems = nums.length - 1;
  for (i = 0; i <= totalItems; i++) {
    for(j = 1; j <= totalItems; j++){
      if(nums[j] === target - nums[i]){
        return [i, j];
      } 
    }
    return 'No two sum solution';
  }
};

console.log(twoSum([2, 10, 4, 7], 9))