/*
Function Description

Complete the getMoneySpent function in the editor below. 
It should return the maximum total price for the two items 
within Monica's budget, or  if she cannot afford both items.

getMoneySpent has the following parameter(s):

keyboards: an array of integers representing keyboard prices
drives: an array of integers representing drive prices
b: the units of currency in Monica's budget

*/

function getMoneySpent(keyboards, drives, b) {
    // Edge case, if she can't buy 2 items return -1
    let maxCombo = -1;
    // Check combinations of
    // Loop through keyboards
    // Loop through Keyboards[i]
    for (let i = 0; i < keyboards.length; i++){
        for (let j = 0; j < drives.length; j++){
            let combo = keyboards[i] + drives[j];
            if ((combo <= b) && (combo > maxCombo)){
                maxCombo = combo;
            } 
        }
    }
    return maxCombo;
}

const keyboardArr = [3,1];
const drivesArr = [5,2,8];
const moneyToSpend = 10;

getMoneySpent(keyboardArr,drivesArr,moneyToSpend);