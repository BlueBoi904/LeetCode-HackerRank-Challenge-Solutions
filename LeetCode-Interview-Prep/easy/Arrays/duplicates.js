var containsDuplicate = function(nums) {
    // Create hashMap
    let hashMap = {};
    //loop through the array and add to hashmap
    for (let i = 0; i < nums.length; i++){
        if (hashMap[nums[i]] === undefined){
            hashMap[nums[i]] = true;
        } else {
            return true;
        }
    }
    //If nums[i] is already in the hashMap, then return true

    // Return false

    return false;
};