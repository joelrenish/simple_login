'use strict';

let specialCharacters = /[\s `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

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
    login(username, password);
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

// disallow e from being entered
document.getElementById("phone").addEventListener("keydown", function(e) {
  if (["-", "e"].includes(e.key)) {
    e.preventDefault();
  }
});

// change forms with these buttons
// switch to OTP form
document.getElementById("otpButton").addEventListener("click", (event) => {
  event.target.classList.add("selected");
  document.getElementById("regularButton").classList.remove("selected");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("OTPForm").classList.remove("hidden");

  // reset user/pass fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  username.classList.remove("failed");
  password.classList.remove("failed");

  document.getElementById("successMessage").classList.add("hidden");
});

// switch to password form
document.getElementById("regularButton").addEventListener("click", (event) => {
  event.target.classList.add("selected");
  document.getElementById("otpButton").classList.remove("selected");
  document.getElementById("OTPForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");

  // reset phone field
  document.getElementById("phone").value = "";

  document.getElementById("successMessage").classList.add("hidden");
});

function login(username, password) {
  // connect back-end

  // assuming user/pass combo is correct
  username.classList.remove("failed");
  password.classList.remove("failed");
  let successMessage = document.getElementById("successMessage");
  successMessage.classList.remove("hidden");
  successMessage.textContent = "Success!" //`Hello ${username.value}!`;
  console.log(`Logged in as ${username.value} using ${password.value} as the password`);


  localStorage.setItem('username', username.value);
  localStorage.setItem('pw', password.value);

  // setTimeout(goToDash, 1000);
  goToDash();
}

function goToDash() {
  document.location.href="dash.html";
}

// OTP submission
document.getElementById("OTPForm").addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.classList.remove("hidden");
  successMessage.textContent = `OTP Sent`;
  event.target.lastElementChild.value = 'Resend OTP';

  // fake username
  localStorage.setItem('username', phone.value);

  goToDash();
});