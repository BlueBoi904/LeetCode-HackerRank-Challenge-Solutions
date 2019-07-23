/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

//Inputs array containing at least one number

// If input array is one number, return that num

// [-2,1,-3,4,-1,2,1,-5,4]

//Solve using dynamic programming
const maxSubArray = (nums) => {
    if (nums.length === 1){
        return nums[0];
    }

    let maxSoFar = nums[0];
    let currentMax = nums[0];
    //
    for (let i = 1; i < nums.length; i++){
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return currentMax;
    
}