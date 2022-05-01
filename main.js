const kelvin = 293;
// This is a cont variable that can't be changed later. It has a value of 293 which is a number.
var celsius = kelvin - 273;
// Used a var variable that can be changed later to a new value. I took the kelvin variable and subtracted it's value from 273, which is also a number.
var fahrenheit = celsius * (9/5) + 32;
//Did the same here by using var varible to allow the change of the value later and use the variable celsius to multiple it's value. 
var fahrenheit = Math.floor(fahrenheit);
// Gave the fahrenheit variable a new value with the Math.floor object to round down the temperature. 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Had to go back to string interpolation. The backticks got me. I forgot to use them and just used regular single quotes and received the error message. 

var newton = celsius * (33/100);
var newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
