document.getElementById("navLogin").addEventListener("click", (event) => {
  if(localStorage.getItem("username") != null) {
    console.log("bruh");
    goToDash();
  } else {
    document.location.href="index.html";
  }
});
