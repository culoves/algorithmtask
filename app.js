// TASK 1
function convertFahrToCelsius(parameter) {
  const parameterToNumber = Number(parameter);

  if (parameterToNumber || parameterToNumber === 0) {
    const result = (parameterToNumber - 32) * (5 / 9);
    return result.toFixed(4);
  } else {
    let parameterType;
    if (Array.isArray(parameter)) {
      parameterType = "array";
    } else {
      parameterType = typeof parameter;
    }
    return `${JSON.stringify(
      parameter
    )} is not a valid number but a/an ${parameterType}`;
  }
}

console.log(convertFahrToCelsius(32));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));

//TASK 2
function checkYuGiOh(parameter) {
  //check if parameter is valid
  const parameterToNumber = Number(parameter);
  if (!parameterToNumber) {
    return `invalid parameter: "${parameter}" `;
  }
  let result = [];
  for (i = 1; i <= parameter; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      result.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      result.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      result.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      result.push("gi-oh");
    } else if (i % 2 === 0) {
      result.push("yu");
    } else if (i % 3 === 0) {
      result.push("gi");
    } else if (i % 5 === 0) {
      result.push("oh");
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
