var credit = 100
var precios = [2,41,45,4,6,59]
var index = 0;
while(true) {
	var a = precios.indexOf(100-precios[index])
	if (a != -1){
		console.log(precios[index] + " y " + precios[a])
		break;
	}
	index+=1;
};