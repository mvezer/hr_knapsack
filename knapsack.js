function processData(input) {
	var inputArr = String(input).split('\n');
	var t = parseInt(inputArr[0]);
	for (var i = 0; i < t; i++) {
		var n = parseInt(inputArr[i * 2 + 1].split(' ')[0]);
		var K = parseInt(inputArr[i * 2 + 1].split(' ')[1]);

		var arr = inputArr[i * 2 + 2].split(' ');
		arr = arr.map(Number);

		var arr = arr.reduce(reduceDistinct, []).filter(filterHigher, K).sort(sortAscending);

		console.log(arr);

		var min = K;
		var stack = [];
		stack.push(K);

		while (stack.length > 0 && min > 0) {
			console.log(stack);
			var current = stack.pop();
			var j = 0;
			while (arr[j] <= current && min > 0 && j < arr.length) {
				var dif = current - arr[j];
				if (dif < min) {
					min = dif;
				}
				if (stack.indexOf(dif) == -1) {
					stack.push(dif);
				}
				j++;
			}
		}
		console.log(K - min);
	}
}

function reduceDistinct(acc, item) {
	return acc.indexOf(item) == -1 ? acc.concat(item) : acc;
}

function sortAscending(item0, item1) {
	return item0 - item1;
}

function filterHigher(item) {
	return item <= this;
}



/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	processData(_input);
});
*/

// local testing
var fs = require('fs');

fs.readFile('knapsack_test.txt', function(err, data) {
	processData(data);
});