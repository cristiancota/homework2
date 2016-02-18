var fs = require('fs'),
lengthToken,
numberTokens,
numberCases,
dataSplit,
firstLineSplit,
tokens, 
cases;
var finalResult = "";

fs.readFile('A-large-practice.in', 'utf-8', function(err, data){
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

	var regexs = cases.map(toRegEx)
	var ac;

	for (var i = 0; i < regexs.length; i++) {
		ac = 0;
		for (var j = 0; j < tokens.length; j++) {
			if (tokens[j].match(regexs[i]) != null) {
				ac += 1;
			};
		};
		finalResult += "Case #"+(i+1)+": "+ac+"\n";
	};

	fs.writeFile('output.in', finalResult, function(err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});

});

function toRegEx(word){
	return word.replace(/\(/g,"[").replace(/\)/g,"]");
}