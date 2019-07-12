function gregLeap(year) {
    if (year % 400 === 0) {
        return true;
    } else if ((year % 4 === 0) && (year % 10 !== 0)) {
        return true;
    } else {
        return false;
    }
}

function julianLeap(year) {
    if (year % 4 === 0) {
        return true;
    } 

    return false;
}
// Complete the dayOfProgrammer function below.
// function dayOfProgrammer(year) {
//     //Julian
//     switch (year) {
//         case year === 1918:
//             return "26.09.1918";
//         case (year % 4 === 0) && 
//         (year < 1918 || year % 400 === 0 || year % 100 !== 0):
//         return `12.09.${year}`;
//         //1918

//     }
//     return (`13.09.${year}`);
// }


function dayOfProgrammer(year) {
    //Julian
    if (year === 1918) {
        return "26.09.1918";
    } else if (((year <= 1917) && (year % 4 === 0)) || 
    ((year > 1918) && (year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))))) {
        return `12.09.${year}`;
    }
    return (`13.09.${year}`);
}
