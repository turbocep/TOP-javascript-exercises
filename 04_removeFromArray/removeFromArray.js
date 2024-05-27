const removeFromArray = function(array, ...removedValue) {
  let newArray = [];
  let count = 0;
  for (item of array) {
    count = 0;
    for (remove of removedValue) {
      if (remove === item) {
        count++;
      }
      }
    if (count > 0) {
      continue;
    } else {
      newArray.push(item);
    }
    }
  return newArray;
  }



// Do not edit below this line
module.exports = removeFromArray;
