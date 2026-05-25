// version 1
let n = 100;
console.log("FizzBuzz for numbers 1 to 100:");
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0) {
    console.log(`${i} -> Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Buzz`);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// version 2
function customFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 0; j < rules.length; j++) {
      if (i % rules[j].divisor === 0) {
        res += rules[j].word;
      }
    }
    if (res === "") {
      console.log(i);
    } else {
      console.log(`${i} = ${res}`);
    }
  }
}
customFizzBuzz(30, [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" },
  { divisor: 7, word: "Jazz" },
]);
