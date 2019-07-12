// Write a factorial function using recursion

function factorial(n) {
    // Write the base case
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
