'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let period = s.slice(-2);
    let time = s.slice(0, -2).split(':');
    
    let seconds = time[2];
    let minutes = time[1];
    let hours = time[0];

    if (period == 'AM') {
        if (hours == '12') {
            hours = '00';
        }
    } else {
        if (hours != '12') {
            hours = (parseInt(hours) + 12).toString();
        }
    }

    let convertedTime = hours + ':' + minutes + ':' + seconds;
    return convertedTime;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
