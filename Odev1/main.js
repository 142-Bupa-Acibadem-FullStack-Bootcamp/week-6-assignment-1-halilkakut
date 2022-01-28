/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

let numbers = [2,7,11,5];
let target = 9;
  
  function FindSumIndex(nums, targetNum) {
    let found = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == targetNum) {
          found.push(i + "-" + j);
        }
      }
    }
    console.log(found);
  }
  FindSumIndex(numbers, target);