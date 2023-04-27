const buttonTag = document.getElementById("btn");
buttonTag.addEventListener("click", convert);

async function convert() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrencyName").value;
  const toCurrency = document.getElementById("toCurrencyName").value;
  const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = amount * rate;
    document.getElementById(
      "result"
    ).innerHTML = `${amount} ${fromCurrency} is ${convertedAmount.toFixed(
      2
    )} ${toCurrency}`;
  } catch (error) {
    console.error(error);
  }
}
