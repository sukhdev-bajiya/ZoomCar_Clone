var zoomCarCityListInIndia = [
  { IndiaCityName: "Bangalore" },
  { IndiaCityName: "Pune" },
  { IndiaCityName: "Delhi_NCR" },
  { IndiaCityName: "Hyderabad" },
  { IndiaCityName: "Jaipur" },
];

document
  .getElementById("cityListInFind")
  .addEventListener("click", showCityListInPopup());
showCityListInPopup();
function showCityListInPopup() {
  zoomCarCityListInIndia.map(function (ele) {
    var val = document.createElement("li");
    val.innerText = ele.IndiaCityName;
    val.addEventListener("click", function () {
      FindCityOut(ele.IndiaCityName);
    });
    document.getElementById("CityListDropDown").append(val);
  });
}
document
  .getElementById("userPicupCity")
  .append(localStorage.getItem("yourCity") || "Search City");
FindCityIn();
function FindCityIn() {
  var val = localStorage.getItem("yourCity") || null;

  var ListInFind = document.getElementById("cityListInFind");
  var ListOutFind = document.getElementById("cityListOutFind");
  if (ListInFind.style.display === "block") {
    ListInFind.style.display = "none";
    ListOutFind.style.display = "block";
  } else {
    ListInFind.style.display = "block";
    ListOutFind.style.display = "none";
  }
  if (val !== null) {
    document.getElementById("FindCityOutConfirm").style.backgroundColor =
      "green";
  }
}

function FindCityOut(val) {
  localStorage.setItem("yourCity", val);

  var ListInFind = document.getElementById("cityListInFind");
  var ListOutFind = document.getElementById("cityListOutFind");
  if (ListInFind.style.display === "block") {
    ListInFind.style.display = "none";
    ListOutFind.style.display = "block";
  } else {
    ListInFind.style.display = "block";
    ListOutFind.style.display = "none";
  }
  document.getElementById("userPicupCity").innerText =
    localStorage.getItem("yourCity");
  var sitname = "../../pages/" + localStorage.getItem("yourCity") + ".html";
  window.open(`${sitname}`, "_self");
  document.getElementById("FindCityOutConfirm").style.backgroundColor = "green";
}

function FindCityOutConfirm() {
  var sitname =
    "../../pages/" + (localStorage.getItem("yourCity") || "404page") + ".html";
  window.open(`${sitname}`, "_self");

  document.getElementById("FindCityOutConfirm").style.backgroundColor = "green";
}

function newFindCityOutConfirm() {
  localStorage.setItem("yourCity", "");
  window.open("../../index.html", "_self");
}
