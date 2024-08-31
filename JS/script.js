let amoutElement = document.querySelector(".js-input");
let currencyElement = document.querySelector(".form__select")
let formElement = document.querySelector(".form")
let resultElement = document.querySelector(".js-result")

let rateUSD = 3.8506
let rateEUR = 4.2665
let rateGBP = 5.0062


formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amout = +amoutElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amout / rateEUR;
      break;

    case "USD":
      result = amout / rateUSD;
      break;

    case "GBP":
      result = amout / rateGBP;
      break;
  };

 resultElement.innerHTML = `${amout.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`

});
