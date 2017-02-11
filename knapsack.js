function processData(input) {
    var inputArr = String(input).split('\n');
    var t = parseInt(inputArr[0]);
    for (var i = 1; i < t; i+=2) {
    	var n = parseInt(inputArr[i].split(' ')[0]);
    	var k = parseInt(inputArr[i].split(' ')[1]);

    	var arr = inputArr[i + 1].split(' ');
    	arr = arr.map(Number);

    	
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


// local testing
var fs = require('fs');

fs.readFile('knapsack_test.txt', function(err, data) {
	processData(data);
});