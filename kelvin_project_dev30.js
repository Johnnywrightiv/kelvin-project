// Kelvin is a unit of measurement, constant at 239 for our purposes
const kelvin = 0;

// Celsius is similar to Kelvin, just 273 less
const celsius = kelvin - 273;

// Converted to Fehrenheit with .floor() method of Math object to round decimal
var fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${celsius} degrees Celsius, or ${fahrenheit} degrees in Fahrenheit.`);
