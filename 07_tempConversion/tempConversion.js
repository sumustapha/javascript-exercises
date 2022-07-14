const ftoc = function(f) {
const tempf = parseFloat(f);
return (Math.round(((tempf - 32) * (5/9))*10)/10);
};

const ctof = function(c) {
  const tempc = parseFloat(c);
  return (Math.round(((tempc * (9/5)) + 32)*10)/10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
