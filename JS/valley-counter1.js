const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    //put s onto array
    // let arr = s.split('');
    
    //create  valleyCount var
    let valleyCount = 0;
    //create sea level tracker
    let seaLevel = 0;
    //create flag var
    let inValley = false;
    //Loop through String to check for D or U
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === 'D') {
            seaLevel--;
        } else if (s[i] === 'U'){
            seaLevel++;
        }
        if (seaLevel < 0) {
            inValley = true;
        }
        if (seaLevel === 0 && inValley === true) {
            valleyCount++;
            inValley = false;
        }
    }

    return valleyCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}

console.log(countingValleys(8,'UDDDUDUU'));