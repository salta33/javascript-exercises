const reverseString = function(string) {
    let array = string.split("");
let reverseStr = "";
    for(let j=array.length-1; j >=0; j--){
reverseStr+=array[j];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
