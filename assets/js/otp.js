document.querySelector("form").addEventListener("submit", makePayment);

function makePayment(event) {
  event.preventDefault();
  var payOtp = document.getElementById("payOtp").value;

  if (payOtp === "1234") {
    alert("Payment Successful -> Enjoy your journey");
    setTimeout(function () {
      window.open("../index.html", "_self");
    }, 60);
  } else {
    alert("Enter Valid Otp");
  }
}
