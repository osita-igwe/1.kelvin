# Kelvin Weather
### A Basic Introductory Javascript Exercise
---


## PROMPT 

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.


### Variables
 
The forecast today is 293 Kelvin. The temp will not change
  ```
  const kelvin = 293
 ```

Celsius is 273 degree less than Kelvin
  ```
  const celsius = kelvin-273
```

Establishing an conversion equation to change celsius to fahrenheit
  ```
  let fahrenheit = celsius * (9/5) + 32
```
Converting from Celsius to Fahrenheit, will often result in a decimal number. Math.floor() rounds the previous conversion down to the nearest integer
  ```
  fahrenheit = Math.floor(fahrenheit) 
```
  ```
  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
  Result: The temperature is 68 degrees Fahrenheit.
```
