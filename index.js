'use strict';

let specialCharacters = /[\ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let success = true;
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (specialCharacters.test(username.value)) {
    document.getElementById("usernameError").classList.remove("hidden");
    username.classList.add("failed");
    success = false;
  }
  if (!specialCharacters.test(password) || !/\d/.test(password.value)) {
    document.getElementById("passwordError").classList.remove("hidden");
    password.classList.add("failed");
    success = false;
  }
  if (success) {
    username.classList.remove("failed");
    password.classList.remove("failed");

    let successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");
    successMessage.textContent = `Hello ${username.value}!`;
    console.log(`Logged in as ${username.value}! using ${password.value} as the password`);
  }
});

// remove error messages on change
document.getElementById("username").addEventListener("input", (event) => {
  document.getElementById("usernameError").classList.add("hidden");
  event.target.classList.remove("failed");
});

document.getElementById("password").addEventListener("input", (event) => {
  document.getElementById("passwordError").classList.add("hidden");
  event.target.classList.remove("failed");
});

// change forms with these buttons
document.getElementById("otpButton").addEventListener("click", () => {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("OTPForm").classList.remove("hidden");
});

document.getElementById("regularButton").addEventListener("click", () => {
  document.getElementById("OTPForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
});