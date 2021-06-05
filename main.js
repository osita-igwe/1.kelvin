//The forecast today is 293 Kelvin. The temp will not change
  const kelvin = 293

  //Celsius is 273 degree less than Kelvin
  const celsius = kelvin-273

  // Establishing an conversion equation to change celsius to fahrenheit
  let fahrenheit = celsius * (9/5) + 32

  //Converting from Celsius to Fahrenheit, will often result in a decimal number. Math.floor() rounds the previous conversion down to the nearest integer
  fahrenheit = Math.floor(fahrenheit) 

  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
