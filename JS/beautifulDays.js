function reverse(num) {
  //Change num to string, then reverse, then back to num
  let result = num
    .toString()
    .split("")
    .reverse()
    .join("");
  result = parseInt(result);
  return result;
}

function beautifulDays(i, j, k) {
  //Create beautiful number count
  let beautifulNums = 0;

  //Loop from i to j inclusive,
  let index = i;
  while (index <= j) {
    //
    let reverseInt = reverse(index);
    let result = (index - reverseInt) / k;
    if (Number.isInteger(result)) {
      beautifulNums++;
    }

    index++;
  }
  return beautifulNums;
}

console.log(beautifulDays(20, 23, 6));
