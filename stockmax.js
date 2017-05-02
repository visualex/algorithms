'use strict';

// dynamic programming
// problem definition
// https://www.hackerrank.com/challenges/stockmax

function predict(stock) {
    var maxCurrentFuturePrice = 0;
    var profit = 0;
    for (var i = stock.length - 1; i >=0; --i) {
        maxCurrentFuturePrice = Math.max(maxCurrentFuturePrice, stock[i]);
        profit += maxCurrentFuturePrice - stock[i];
    }
    return profit
}


function main(input) {
    input = input.split("\n");
    var cases = input[0];
    var skip = 2
    for (var i = 1; i <= cases; i++) {
        console.log(predict(input[skip].split(' ').map(Number)));
        skip += 2;
    }
}


main(`3
3
5 3 2
3
1 2 100
4
1 3 1 2`);

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    main(_input);
// });

