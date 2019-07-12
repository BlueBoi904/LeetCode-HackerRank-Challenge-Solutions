/*

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, , the number of rows and columns in the matrix . 
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x


 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr,numRows) {
    //create left diagonal sum
    let leftSum = 0;
    //create right diagonal sum
    let rightSum = 0;
    //track # of rows
    //check arr[0] to find # of rows and columns
    for (let i = 0; i < numRows; i++){
        leftSum += arr[i][i];
        
        rightSum += arr[i][i > 0 ? numRows - i - 1 : numRows - 1]
        console.log(rightSum)
    }
    //Ex) if arr[0] === 3, then letf sum = 

    //return Math.abs(left sum - right sum)
    return Math.abs(leftSum - rightSum);
}

// Alternative Solution 

// function processData(input) {
//     var lines = input.split("\n");
//     var N = parseInt(lines[0]);
//     var ans = 0;
//     for(i = 1; i <= N; i++) {
//         var line = lines[i].split(" ");
//         ans += parseInt(line[i - 1]) - parseInt(line[N - i]);
//     }
//     console.log(Math.abs(ans));
// } 

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });