/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

var firstUniqChar = function(s) {
    // Create hashTable
    let obj = {};
    // iterate through the string, add each char + it's index
    for (let i = 0; i < s.length; i++){
        if (obj[s[i]] === undefined){
            let temp = [];
            temp.push(1);
            temp.push(i);
            obj[s[i]] = temp;
        } else {
            obj[s[i]][0] ++;
        }
    }

    for (let key in obj){
        if (obj[key][0] === 1){
            return obj[key][1];
        }
    }
    return -1;
};



