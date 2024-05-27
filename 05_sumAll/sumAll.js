const sumAll = function(startInt, endInt) {
  let totalSum = 0;
  if (startInt < 0 || endInt < 0 || !(typeof(startInt) === "number") || !(typeof(endInt) === "number")) {
    return "ERROR";
  } else {
    if (startInt > endInt) {
      let temp = startInt;
      startInt = endInt;
      endInt = temp;
    }
    for (let i = startInt; i <= endInt; i++) {
      totalSum = totalSum + i;
    }
    return totalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
