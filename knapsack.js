function processData(input) {
	var inputArr = String(input).split('\n');
	var t = parseInt(inputArr[0]);
	for (var i = 0; i < t; i++) {
		var n = parseInt(inputArr[i * 2 + 1].split(' ')[0]);
		var k = parseInt(inputArr[i * 2 + 1].split(' ')[1]);

		var arr = inputArr[i * 2 + 2].split(' ');
		arr = arr.map(Number);

		//console.log(n, k, arr);
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	processData(_input);
});


// local testing
var fs = require('fs');

fs.readFile('knapsack_test.txt', function(err, data) {
	processData(data);
});