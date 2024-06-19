document.getElementById("calculateBtn").addEventListener("click", function () {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var term = parseInt(document.getElementById("term").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(term)) {
    alert("Please enter valid numbers.");
    return;
  }

  if (principal <= 0 || rate <= 0 || term <= 0) {
    alert("Please enter positive numbers.");
    return;
  }

  var monthlyRate = rate / 1200;
  var numberOfPayments = term * 12;
  var monthlyPayment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  document.getElementById("result").innerText =
    "Monthly Payment: $" + monthlyPayment.toFixed(2);
});
