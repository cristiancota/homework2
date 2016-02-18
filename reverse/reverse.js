var fs = require('fs'), onlyPhrases;

var finalResult = "";

fs.readFile('B-large-practice.in', 'utf-8', function(err, data){
	if (err) {
		return console.log(err)
	};

	onlyPhrases = data.split("\n").splice(1);
	
	var reversedArray = onlyPhrases.map(reverse)

	for (var i = 0; i < reversedArray.length; i++) {
		finalResult += "Case #" +(i+1)+ ": "+ reversedArray[i] + "\n";
	};

	fs.writeFile('output.in', finalResult, function(err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});

});

function reverse(phrase){
	return phrase.split(" ").reverse().join(" ")
}