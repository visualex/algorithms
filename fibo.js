'use strict';
// recursive fibonacci with caching and tail-end optimization
// note that ECMAScript 6 offers tail call optimization

var BigNumber = require('bignumber.js');
var cache = [];


function addFib(a, b) {
    var x = new BigNumber(a)
    var y = new BigNumber(b)
    return x.plus(y)
    // this will work for smaller numbers
    // return a + b;
}

function storage(i) {
    if (typeof cache[i] === 'undefined') {
        return false;
    }
    return cache[i];
}

function fibonacci(n){
    if (n <= 1) {
        return n;
    }
    return storage(n) ? storage(n) : cache[n] = addFib(fibonacci(n-1), fibonacci(n-2));
}

function processData(input) {
    var arr = input.split("\n");
    for (var i = 0, len = arr.length; i < len; i++) {
        var res = fibonacci(arr[i]);
        console.log(res.toString(10))
    }
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
