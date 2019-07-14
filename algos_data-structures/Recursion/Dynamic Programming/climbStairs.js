/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// 3 Steps to use dynamic programming


// First find recursive solution

const climbStairs = function(n) {

    if (n < 2){
        return 1;
    }
    
    return climbStairs(n - 2) + climbStairs(n - 1)
};

// Solve with dynamic progrmaming
const climbStairs = function (n) {
    if (n < 2){
        return 1;
    }

    fib = [];
    fib[0] = 1;
    fib[1] = 1;

    for (let i = 2; i <= n; i++){
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib[n];
}

