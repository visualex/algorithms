'use strict';

// with these characters,
// keep track of valid syntax and balance strings
// ()[]{}

// valid
// {{[][]({[([[[]]])]})}}

// invalid
// [[[]]]]

function openingChar(char) {
    if (char == '(') { return ')'; }
    if (char == '{') { return '}'; }
    if (char == '[') { return ']'; }
    return false;
}

function testBitwise(input) {
    var test = input
        .split('{').join('1')
        .split('}').join('1')
        .split('[').join('2')
        .split(']').join('2')
        .split('(').join('3')
        .split(')').join('3')
        .split('')
        .join(' ^ ');
    return eval(test) == 0;
}

function processData(input) {
    input = input.split('')
    for (var i = 0; i < input.length; i++ ) {
        var char = input[i];
        var nextChar = input[i + 1];
        var oppositeChar = input[input.length - i - 1]
        if (openingChar(char) && openingChar(char) == nextChar) {
            input = input.slice(i+2, input.length);
            i = -1;
            continue;
        }
        if (openingChar(char) && openingChar(char) == oppositeChar) {
            input = input.slice(i+1, input.length - i - 1);
            i = -1;
            continue;
        }
        return false
    }
    if (input.length == 0) {
        return true
    }
    return false
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    // quicker solution but does not count on syntax (balancing)
    // console.log(testBitwise(_input) ? 'True' : 'False');

    // correct solution, O(n) time and space
    console.log(processData(_input) ? 'True' : 'False');
});
