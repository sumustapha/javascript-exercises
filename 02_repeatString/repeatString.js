const repeatString = function(word,n) {
    let str = word;
  if((n===0)||(str==="")){
    str = "";
  }
  else if(n<0)
  {
    str = "ERROR";
  }
  else
  {
    str+=repeatString(str, (n-1));
  }
return str;

};

// Do not edit below this line
module.exports = repeatString;
