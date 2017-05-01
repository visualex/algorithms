'use strict';

var final = {};

function permute(sofar, input) {
    // console.log('input', input)
    if (input == '') {
        final[sofar] = sofar
        return;
    }
    for (var i = 0; i < input.length; i++) {
        var next = sofar + input[i];
        // console.log('next', next)
        var remaining = input.substring(0, i) + input.substring(i+1)
        // console.log('remaining', remaining)
        permute(next, remaining);
    }
}


function processData(input) {
    permute('', input)
    return final;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    console.log()
    console.log(processData(_input))
});
