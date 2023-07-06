document.getElementById("navLogin").addEventListener("click", () => {
  if(localStorage.getItem("username") === null) {
    document.location.href="index.html";
  }
});

document.getElementById("login").addEventListener("click", () => {

  if(localStorage.getItem("username") === null) {
    document.location.href="index.html";
  }
});

document.getElementById("menuButton").addEventListener("click", () => {
  document.querySelector(".nav-container").classList.toggle("navclose");
  document.querySelector(".main").classList.toggle("mainclose");
  let navOptions = document.querySelector(".nav-container").firstElementChild.children;
  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].classList.toggle("navclose");
    navOptions[i].lastElementChild.classList.toggle("hidden");
  }
});