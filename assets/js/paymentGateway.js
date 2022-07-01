document.querySelector("form").addEventListener("submit", makePayment);

function makePayment(event) {
  event.preventDefault();
  var cardNum = document.getElementById("cardNum").value;
  var cardCvv = document.getElementById("cardCvv").value;
  var cardDate = document.getElementById("cardDate").value;
  var cardName = document.getElementById("cardName").value;

  if (
    cardNum === "1234567891234567" &&
    cardCvv === "123" &&
    cardDate == "12/22"
  ) {
    window.open("otp.html", "_self");
  } else {
    alert("Please fill correct data");
  }
}

