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
