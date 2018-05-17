var gimme = function (inputArray) {
  let arrays = inputArray.slice(0).sort((a, b) => a - b),
    middle = Math.round(arrays.length / 2) - 1
  return inputArray.indexOf(arrays[middle]);
};