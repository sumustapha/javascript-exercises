const reverseString = function(forward) {
let string = forward;
let reverse = "";
let stringLength = string.length;
for(let i = (stringLength -1); i>=0; i--)
{
    reverse+=string[i];
    console.log(reverse);}
return reverse;
};

// Do not edit below this line
module.exports = reverseString;
