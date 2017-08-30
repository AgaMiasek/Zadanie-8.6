// scripts.js

var a = prompt('Wpisz liczbę \' a\'');
var b = prompt('Wpisz liczbę\' b\'');
var value = (a*a) + (2*a*b) - (b*b);

console.log(value);

if (value < 0) {
	console.log('wynik ujemny');
} else if (value > 0) {
	console.log('wynik dodatni');
} else { 
	console.log('Twój wynik to zero');
}