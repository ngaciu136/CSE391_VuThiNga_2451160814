let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;
let guessNumber = [];

while (attempts < maxAttempts) {
  let input = prompt("Nhập số từ 1 đến 100:");
  if (input == null) {
    alert("Bạn đã thoát game");
    break;
  }
  let guess = parseInt(input);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Vui lòng nhập số hợp lệ từ 1 đến 100");
    continue;
  }

  if (guessNumber.includes(guess)) {
    alert("Bạn đã đoán số này rồi!");
  }
  attempts++;
  guessNumber.push(guess);
  if (guess < randomNumber) {
    alert("Cao hơn!");
  } else if (guess > randomNumber) {
    alert("Thấp hơn!");
  } else {
    alert(`Chúc mừng! Bạn đã đoán trúng số sau ${attempts} lần đoán`);
  }

  if (attempts === maxAttempts) {
    alert(`Game Over! Số bí mật là ${randomNumber}`);
  }
}
