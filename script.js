let currencyAverage = {'EUR': {'PLN': 4.44, 'USD': 1.10}, 'USD': {'PLN': 3.97, 'EUR': 0.88}, 'PLN': {'EUR': 0.22, 'USD': 0.25}  }
let choosenCurrencyOne = document.querySelector(".form-optionOne");
let choosenCurrencyTwo = document.querySelector(".form-optionTwo");
let amountElement = document.querySelector(".amount");
let endResult = document.querySelector(".result");
let resultCurrency = document.querySelector(".endcurrency")


let submit = document.querySelector(".js-form");
let scoreElement = document.querySelector(".wynik");



submit.addEventListener("submit", (event) =>{
event.preventDefault();
let amount = amountElement.value;
let firstCurrency = choosenCurrencyOne.value;
let secondCurrency = choosenCurrencyTwo.value;
let result = 0;

if (firstCurrency == secondCurrency){
      result = amount;
      console.log(result);
} else {
 result = amount * currencyAverage[firstCurrency][secondCurrency];

  }
endResult.textContent = result;
resultCurrency.textContent = secondCurrency;
});



 
