/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// FIrst attempt
var twoSum = function(nums, target) {
    let result = [];
    //for 
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if ((nums[i] + nums[j]) === target){
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
};

// Approach 2, 2 pass hash table

const twoSum = function(nums, target){
    let result = [];
    let hashMap = {};

    for (let i = 0; i < nums.length; i ++){
        hashmap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if (hashMap.hasOwnProperty(complement) && obj[complement] !== i){
            result.push(i);
            result.push(obj[complement]);
            return result;
        }
    }
}