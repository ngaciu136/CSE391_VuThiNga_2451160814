const miniArray = {
  map(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      let newVal = fn(arr[i], i, arr);
      res.push(newVal);
    }
    return res;
  },
  filter(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        res.push(arr[i]);
      }
    }
    return res;
  },
  reduce(arr, fn, initialValue) {
    let res = initialValue;
    for (let i = 0; i < arr.length; i++) {
      res = fn(res, arr[i], i, arr);
    }
    return res;
  },
};

// Test phải pass:
console.log(miniArray.map([1, 2, 3], (x) => x * 2)); // → [2,4,6]
console.log(miniArray.filter([1, 2, 3, 4], (x) => x > 2)); // → [3,4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10
