/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
// Solve using built-in javascript functionality

var isAnagram = function(s, t) {
    s = s.replace(/[\W]/g, '').split('').sort().join('');
    t = t.replace(/[\W]/g, '').split('').sort().join('');
    return s === t;
};

// Solve using data structure

