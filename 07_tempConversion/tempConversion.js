const ftoc = function (far) {
  unrounded = (far - 32) * 0.5556;
  rounded = Math.round(unrounded * 10) / 10;
  return rounded;
};

const ctof = function (cel) {
  unrounded = cel * 0.5556 + 32;
  rounded = Math.round(unrounded * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
