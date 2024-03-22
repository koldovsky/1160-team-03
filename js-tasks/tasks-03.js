// 1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 2. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return Number(2 * Math.PI * circle.radius);
}

// 3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const fiveСharacterWords = [];
  for (let key in obj) {
    if (key.length === 5) fiveСharacterWords.push(key);
    let value = obj[key];
    if (value.length === 5) fiveСharacterWords.push(value);
  }
  return fiveСharacterWords;
}

// 4. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

// 5. https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript