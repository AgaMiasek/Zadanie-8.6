// scripts.js
var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);

var a = 1;
var b = 10;
var value = (a*a) + (2*a*b) - (b*b);
console.log(value);

if (value < 0) {
console.log('wynik ujemny');
} else if (value > 0) {
	console.log('wynik dodatni');
} else { 
	console.log('Twój wynik to zero');
}