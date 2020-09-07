function celsiusConverter(){
	document.getElementById("fahrenheit").value = (document.getElementById("celsius").value * 9 / 5) + 32;
	document.getElementById("kelvin").value = document.getElementById("celsius").value * 1 + 273.15;
	if(document.getElementById("celsius").value == '') {
		document.getElementById("fahrenheit").value = '';
		document.getElementById("kelvin").value = '';
	}	
}
function fahrenheitConverter(){
	document.getElementById("celsius").value = (document.getElementById("fahrenheit").value - 32) * 5 / 9;
	document.getElementById("kelvin").value=((document.getElementById("fahrenheit").value - 32)*5/9)+273.15;
	if(document.getElementById("fahrenheit").value == '') {
		document.getElementById("celsius").value = '';
		document.getElementById("kelvin").value = '';
	}
}
function kelvinConverter(){
	document.getElementById("celsius").value = document.getElementById("kelvin").value - 273.15;
	document.getElementById("fahrenheit").value=((document.getElementById("kelvin").value - 273.15)*9/5)+32;
	if(document.getElementById("kelvin").value == '') {
		document.getElementById("fahrenheit").value = '';
		document.getElementById("celsius").value = '';
	}
}
function resetValues() {
	document.getElementById("temperature-converter").reset();
}	
