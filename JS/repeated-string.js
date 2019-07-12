/*
Lilah has a string, , of lowercase English letters that she 
repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the 
first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , 
the first  characters of her infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. 
It should return an integer representing the number of occurrences of a in 
the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string, . 
The second line contains an integer, .

Constraints

For  of the test cases, .
Output Format

Print a single integer denoting the number of letter a's in the first  
letters of the infinite string created by repeating  infinitely many times.

Sample Input 0

aba
10
Sample Output 0

7
*/

function repeatedString(s, n) {
    let aCount = 0;

    if (s === 'a') {
        return n;
    }  
    
    const aCounter = (string, length) => {
        let counter = 0;
        for (let i = 0; i < length; i++){
            if (string[i] === "a") {
                counter++;
            }
        }
        return counter;
    }

    aCount += aCounter(s, s.length);

    let remainder = n % s.length;

    let quo = parseInt(n / s.length);

    aCount *= quo;

    aCount += aCounter(s,remainder);
    
    return aCount;
    
}
let string = "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm";
repeatedString(string,736778906400);
