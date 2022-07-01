function aboutUsLinks() {
  var aboutBox = document.getElementById("aboutLinks");
  if (aboutBox.style.display === "block") {
    aboutBox.style.display = "none";
  } else {
    aboutBox.style.display = "block";
  }
}

const hambugerBtn = document.getElementById("hamb");
const drawer = document.getElementById("side-drawer");
const overlay = document.getElementById("overlay");

hambugerBtn.addEventListener("click", function () {
  drawer.style.left = 0;
  overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
  drawer.style.left = "-20rem";
  overlay.style.display = "none";
});

var userLogInOrNot = localStorage.getItem("userLogInOrNot");
if (userLogInOrNot=="true") {
  document.getElementById("userLogedIn").innerText = "Hello User";
  document.getElementById("userLogedInSid").innerText = "Hello User";
  document.getElementById("logoutButton").style.display = "block";
} else {
  localStorage.setItem("userLogInOrNot", "false");
  document.getElementById("userLogedIn").innerText = "Login / Signup";
  document.getElementById("userLogedInSid").innerText = "Login / Signup";
}

function logoutPage() {
  localStorage.setItem("userLogInOrNot", "false");
  document.getElementById("userLogedIn").innerText = "Login / Signup";
  document.getElementById("userLogedInSid").innerText = "Login / Signup";
  document.getElementById("logoutButton").style.display = "none";
}
