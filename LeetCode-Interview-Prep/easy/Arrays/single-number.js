/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function(nums) {
    //Create hashMap
    let hashMap = {};
    //Loop through the array
    for (let i = 0; i < nums.length; i ++){
        if (hashMap[nums[i]] === undefined){
            hashMap[nums[i]] = 1;
        } else {
            hashMap[nums[i]] ++;
        }
    }
    // Increment nums[i] in the hashMap

    // Loop again and return hashMap key with value 1
    for (let key in hashMap){
        if (hashMap[key] === 1) {
            return key;
        }
    } 
};