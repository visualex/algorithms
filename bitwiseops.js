'use strict';

// finding a unique value in a list of integers with bitwise operations
// solves in time O(n) and space O(1)

// input   1, 2, 3, 4, 5, 99, 1, 2, 3, 4, 5
// output  99

function processData(input) {
    var prep = input.split(', ').join(' ^ ');
    console.log(eval(prep));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


