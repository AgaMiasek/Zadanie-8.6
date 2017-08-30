// scripts.js

var a = prompt('Wpisz liczbę \' a\'');
var b = prompt('Wpisz liczbę\' b\'');
var value = (a*a) + (2*a*b) - (b*b);

if (value < 0) {
	prompt('wynik ujemny', value);
} else if (value > 0) {
	prompt('wynik dodatni', value);
} else { 
	prompt('Twój wynik to zero', value);
}