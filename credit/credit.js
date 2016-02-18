
var fs = require('fs');

var finalResult = "";

var casesArray = [];

fs.readFile('C-large-practice.in', 'utf-8', function(err, data){
	if (err) {
		return console.log(err)
	};

	var allDataArray = data.split("\n");
	var numberCases = parseInt(allDataArray[0])
	var onlyCases = allDataArray.splice(1);
	
	for (var i = 0; i < onlyCases.length; i+=3) {
		var actualCase = {
			"credit": parseInt(onlyCases[i]),
			"numberOfProducts": parseInt(onlyCases[i+1]),
			"prices": onlyCases[i+2].split(" ").map(Number),
		}

		casesArray.push(actualCase)
	};

	var index = 0

	casesArray.forEach(function(el,ind){
		index = 0;
		while(index < el.numberOfProducts) {
			var a = el.prices.indexOf(el.credit - el.prices[index], (index+1))
			if (a != -1){
				finalResult += "Case #" +(ind+1)+ ": "+ (index+1) + " " + (a+1) + "\n" 
				break;
			}
			index+=1;
		};	
	})

	fs.writeFile('output.in', finalResult, function(err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});

});
