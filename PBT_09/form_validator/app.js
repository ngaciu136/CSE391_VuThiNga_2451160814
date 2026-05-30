const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const submitBtn = document.querySelector("#submitBtn");

const modal = document.querySelector("#modal");
const result = document.querySelector("#result");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

nameInput.addEventListener("input", () => {
  let value = nameInput.value.trim();
  if (value.length >= 2 && value.length <= 50) {
    validName = true;
    document.querySelector("#nameError").textContent = "✅ Hợp lệ";

    document.querySelector("#nameError").className = "valid";
  } else {
    validName = false;
    document.querySelector("#nameError").textContent = "Tên từ 2-50 ký tự";
    document.querySelector("#nameError").className = "invalid";
  }

  checkForm();
});

emailInput.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    validEmail = true;
    document.querySelector("#emailError").textContent = "";
  } else {
    validEmail = false;
    document.querySelector("#emailError").textContent =
      "Email không đúng định dạng";
  }
  checkForm();
});

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const bar = document.querySelector("#strengthBar");

  if (password.length < 8) {
    bar.style.width = "33%";
    bar.style.background = "red";
    document.querySelector("#passwordError").textContent = "Yếu";
    validPassword = false;
  } else if (/[a-zA-Z]/.test(password) && /\d/.test(password)) {
    bar.style.width = "66%";
    bar.style.background = "orange";
    document.querySelector("#passwordError").textContent = "Trung bình";
    validPassword = true;
  }

  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ) {
    bar.style.width = "100%";
    bar.style.background = "green";
    document.querySelector("#passwordError").textContent = "Mạnh";
    validPassword = true;
  }
  validateConfirm();
  checkForm();
});

confirmInput.addEventListener("input", () => {
  validateConfirm();
  checkForm();
});

function validateConfirm() {
  if (confirmInput.value === passwordInput.value && confirmInput.value !== "") {
    validConfirm = true;
    document.querySelector("#confirmError").textContent = "Khớp";
  } else {
    validConfirm = false;
    document.querySelector("#confirmError").textContent = "Không khớp";
  }
}

phoneInput.addEventListener("input", () => {
  let value = phoneInput.value.replace(/\D/g, "");

  if (value.length > 4) {
    value = value.slice(0, 4) + "-" + value.slice(4);
  }

  if (value.length > 8) {
    value = value.slice(0, 8) + "-" + value.slice(8);
  }
  phoneInput.value = value;
  const digits = value.replace(/-/g, "");
  if (digits.length === 10) {
    validPhone = true;
    document.querySelector("#phoneError").textContent = "";
  } else {
    validPhone = false;
    document.querySelector("#phoneError").textContent =
      "Số điện thoại phải đủ 10 số";
  }
  checkForm();
});

function checkForm() {
  submitBtn.disabled = !(
    validName &&
    validEmail &&
    validPassword &&
    validConfirm &&
    validPhone
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerHTML = `
        <p><b>Name:</b> ${nameInput.value}</p>
        <p><b>Email:</b> ${emailInput.value}</p>
        <p><b>Phone:</b> ${phoneInput.value}</p>
    `;
  modal.classList.remove("hidden");
});

document.querySelector("#closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});
