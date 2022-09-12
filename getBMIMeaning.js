const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  if(weight === null || weight === undefined || height === null || height === undefined){
    return undefined;
}
return weight / (height * height);
}
function getBMIMeaning(weight, height) {
  //code here
  if(weight === null || weight === undefined || height === null || height === undefined){
    return undefined;
}
let bmi = calculateBMI(weight, height);
if(bmi < 18.5){
    return "Underweight";
}
if(bmi >= 18.5 && bmi <= 24.9){
    return "Normal weight";
}
if(bmi > 25.0){
    return "Overweight";
}
}
module.exports = getBMIMeaning
