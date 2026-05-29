// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
  return function (val) {
    let res = val;
    for (let fn of fns) {
      res = fn(res);
    }
    return res;
  };
}

const process = pipe(
  (x) => x * 2, // 5 → 10
  (x) => x + 10, // 10 → 20
  (x) => x.toString(), // 20 → "20"
  (x) => "Kết quả: " + x,
);
console.log(process(5)); // → "Kết quả: 20"

// 2. memoize() — Cache kết quả
function memoize(fn) {
  let cache = {};
  return function (n) {
    if (cache[n] !== undefined) {
      console.log("Lấy từ cache...");
      return cache[n];
    }
    let res = fn[n];
    cache[n] = res;
    return res;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Đang tính...");
  let result = 0;
  for (let i = 0; i < n; i++) result += i;
  return result;
});
console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000
console.log(expensiveCalc(1000000)); // → (không in "Đang tính...", lấy cache!)

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);

search("ip");
search("iphone");
search("iphone 16");
// Gọi liên tục → chỉ lần cuối mới chạy

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
  let attempts = 0;
  while (attempts < maxAttempts) {
    try {
      let res = await fn();
      return res;
    } catch (error) {
      attempts++;
      console.log("Lỗi, thử lại lần", attempts);

      if (attempts === maxAttempts) {
        throw error;
      }
    }
  }
}

let count = 0;

async function fakeApi() {
  count++;

  if (count < 3) {
    throw new Error("API lỗi");
  }

  return "Thành công!";
}

retry(fakeApi)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
