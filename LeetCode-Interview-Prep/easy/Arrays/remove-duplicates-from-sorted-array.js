/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
*/

// First attempt

var removeDuplicates = function(nums) {
    let obj = {};
    
    let index = 0;
    while (index < nums.length){
        if (obj[nums[index]] === undefined ){
            obj[nums[index]] = true;
            index ++;
        } else {
            nums.splice(index,1);
        }
    }
    return nums.length;
};

//Improved solution using two pointers

/*
Since the array is already sorted, we can keep two pointers ii and jj, 
where ii is the slow-runner while jj is the fast-runner. As long as 
nums[i] = nums[j]nums[i]=nums[j], we increment jj to skip the duplicate.

When we encounter nums[j] \neq nums[i]nums[j] 

 =nums[i], the duplicate run has ended so we must copy its value to 
 nums[i + 1]nums[i+1]. ii is then incremented and we repeat the same 
 process again until jj reaches the end of array.
*/
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
};