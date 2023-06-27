'use strict';

let specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let success = true;

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let errorM = document.getElementById("errorMessage");
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (specialCharacters.test(username)) {
    errorM.textContent = "Username can't include special characters.";
    success = false;
  }
  else if (!specialCharacters.test(password) || !/\d/.test(password)) {
    errorM.textContent = "Password needs to include at least 1 special character and 1 number.";
    success = false;
  }
  else { success = true; }
  if (success) {
    errorM.classList.add("succeeded");
    errorM.classList.remove("failed");
    errorM.textContent = `Hello ${username}!`;
    console.log(`Logged in as ${username}! using ${password} as the password`);
  } else {
    errorM.classList.remove("succeeded");
    errorM.classList.add("failed");
  }
});
