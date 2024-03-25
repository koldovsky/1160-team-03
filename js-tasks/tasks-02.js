// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  queue.reverse();
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      if (i === 0) {
        console.log("Pls go away and stop eating my sheep");
      } else {
        console.log(
          `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
        );
      }
    }
  }
}
// or
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    var indexWolf = queue.indexOf("wolf");
    return (
      "Oi! Sheep number " +
      (queue.length - indexWolf - 1) +
      "! You are about to be eaten by a wolf!"
    );
  }
}

// https://www.codewars.com/kata/beginner-lost-without-a-map
const maps = (x) => x.map((num) => num * 2);

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (int) => int * 2;

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  const ageDifference = dadYearsOld - 2 * sonYearsOld;
  return ageDifference > 0 ? ageDifference : -ageDifference;
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => (n - 1) * 2;

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
