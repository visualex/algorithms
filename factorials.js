'use strict';

// big factorials, recursively, with tail-end optimization

var BigNumber = require('bignumber.js');

function multiply (a, b) {
    var x = new BigNumber(a)
    var y = new BigNumber(b)
    return x.times(y)
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return multiply(n, factorial(n-1));
}

function processData(input) {
    return factorial(input).toString(10);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = '';
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   console.log(processData(_input));
});
