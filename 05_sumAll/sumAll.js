const sumAll = function(num1, num2) {
    let sum=0;

    if(num2>num1){
    for (let j=num2;j>=num1;j--){
     sum+=j;
    }}
 else if (num1>num2){
for (let j=num1; j>=num2;j--){
    sum+=j;
} } 

if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
if(num1 <0 || num2 <0) return "ERROR";

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
    