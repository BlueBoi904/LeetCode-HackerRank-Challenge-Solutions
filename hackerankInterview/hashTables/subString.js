/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

Function Description

Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

twoStrings has the following parameter(s):

s1, s2: two strings to analyze .

*/

function twoStrings(s1, s2) {
  //create hashtable
  const hashMap = {};
  //add chars of string1 into the hashtable
  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (hashMap[char] === undefined) {
      hashMap[char] = true;
    }
  }

  //Loop through string2 and compare it to the hash table, if one of them matches, return YES
  for (let i = 0; i < s2.length; i++) {
    let char = s2[i];
    if (hashMap[char] === true) {
      return "YES";
    }
  }

  //Return NO
  return "NO";
}
