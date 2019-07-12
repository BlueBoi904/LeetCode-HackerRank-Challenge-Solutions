/*
Objective

In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
Input Format

Locked stub code in the editor reads string  from stdin and passes it to the function.

Output Format

First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).
*/

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    //create vowels array
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vows = [];
    //create Consonants array
    let cons = [];
    //loop through string
    for (let i = 0; i < s.length; i++){
        if (vowels.includes(s.charAt(i))){
            vows.push(s.charAt(i));
        } else {
            cons.push(s.charAt(i))
        }
    }

    for (let i in vows) {
        console.log(vows[i]);
    } 

    for (let i in cons) {
        console.log(cons[i]);
    }
    //check s.charAt(i).isVowel/.isConsonant
    //Push s.charAt(i) on to respective array
    //Print vowelArr[i] each on a new line
    //Print ConsonantArr[i] each on a new line

}