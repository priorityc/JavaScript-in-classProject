let fahTemp = prompt('Please enter fahrenheit')

tempCalc =(f)=> { //seting parametar
  return (f-32)*5/9//return the result of it
}
tempCalc(fahTemp)
let result = tempCalc(fahTemp);//set the result into variable
alert(`Your temperature of ${fahTemp} fahrenheit is ${Math.round( result*100)/100} in celsius`)//using method to round the number