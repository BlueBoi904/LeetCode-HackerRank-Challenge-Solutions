/*

Task 
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed 
characters as  space-separated strings on a single line (see the Sample below for more detail).

Note:  is considered to be an even index.

Input Format

The first line contains an integer,  (the number of test cases). 
Each line  of the  subsequent lines contain a String, .

Constraints

Output Format

For each String  (where ), print 's even-indexed characters, followed by a space, 
followed by 's odd-indexed characters.

Sample Input

2
Hacker
Rank
Sample Output

Hce akr
Rn ak

*/

function processData(input) {
    let arr = input.split('\n');
    arr.splice(0, 1);
    for (let i = 0; i < arr.length; i++){
        let firstStr = '';
        let secondStr = '';
        for (let j = 0; j < arr[i].length; j++){
            if (j % 2 === 0) {
                firstStr += arr[i][j];
            } else {
                secondStr += arr[i][j];
            }
        }
        console.log(`${firstStr} ${secondStr}`);
    }
} 