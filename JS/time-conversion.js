function timeConversion(s) {
    /*
     * Write your code here.
     */

    //Check last two digits for PM or AM

    //if AM, do nothing besides remove last two chars
    //If PM convert to military hours and remove PM chars
    let charArr = s.split('');

    if (s.substring(s.length - 2) === "AM") {
        let ogNums = Number(charArr[0] +  charArr[1]);
        if (ogNums === 12){
            charArr.splice(charArr.length - 2,1);
            charArr.splice(charArr.length - 1,1);
            charArr.splice(0,1,'0');
            charArr.splice(1,1,'0');
            return charArr.join('');
        }
        charArr.splice(charArr.length - 2,1);
        charArr.splice(charArr.length - 1,1);
        return charArr.join('');
    } else if (s.substring(s.length - 2) === "PM") {
        let ogNums = Number(charArr[0] +  charArr[1]);
        if (ogNums === 12){
            charArr.splice(charArr.length - 2,1);
            charArr.splice(charArr.length - 1,1);
            return charArr.join('');
        } else {
            let finalNums = ogNums + 12;
            let finalNumsArr = finalNums.toString().split('');
            charArr.splice(0,1,finalNumsArr[0]);
            charArr.splice(1,1,finalNumsArr[1]);
            charArr.splice(charArr.length - 2,1);
            charArr.splice(charArr.length - 1,1);
            return charArr.join('');
        }
        // charArr.splice(0,1,finalNumsArr[0]);
        // charArr.splice(1,1,finalNumsArr[1]);
    }


}

console.log(timeConversion('12:00:00AM'))