// 1 Find the most frequent item on the array
function freqItem(array = []) {
  return array.reduce(
    (prev, curr, index, arr) =>
      arr.filter((i) => i === prev).length >=
      arr.filter((i) => i === curr).length
        ? prev
        : curr,
    null
  );
}

console.log(freqItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

// 2 find the sum of squares of a numeric vector
function sumSquares(array = []) {
  return array.reduce((prev, curr) => prev + curr ** 2, 0);
}

console.log(sumSquares([0, 1, 2, 3, 4]));

// 3
function filterNotNumberValue(array = []) {
  return array.filter((i) => i > 0 || i < 0);
}

console.log(
  filterNotNumberValue([NaN, 0, 15, false, -22, '', undefined, 47, null])
);
