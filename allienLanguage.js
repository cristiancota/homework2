var fs = require('fs'),
	lengthToken,
	numberTokens,
	numberCases,
	dataSplit,
	firstLineSplit,
	tokens, 
	cases;

fs.readFile('A-small-practice.in', 'utf-8', function(err, data){
	if (err) {
		return console.log(err)
	};

	dataSplit = data.split("\n");
	firstLineSplit = dataSplit[0].split(" ");
	lengthToken = parseInt(firstLineSplit[0]);
	numberTokens = parseInt(firstLineSplit[1]);
	numberCases = parseInt(firstLineSplit[2]);

	tokens = dataSplit.slice(1, numberTokens + 1)
	cases = dataSplit.slice(numberTokens + 1, numberTokens + numberCases + 1)

});