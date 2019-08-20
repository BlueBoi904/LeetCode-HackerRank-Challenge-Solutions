/*
You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string , remove an  at positions  and  to make  in  deletions.
*/

function alternatingCharacters(s) {
  const arr = s.split("");
  let deleted = 0;
  let last = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === last) deleted++;
    else last = arr[i];
  }
  return deleted;
}
