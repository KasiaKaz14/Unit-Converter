const button = document.querySelector("#button");
const input = document.querySelector("input");
const select = document.querySelector("#unit");
const result = document.querySelector("#outcome");

button.addEventListener("click", () => {
  const value = parseFloat(input.value);
  if (isNaN(value)) {
    result.textContent = "Proszę wpisać poprawną liczbę.";
    return;
  }

  const selectedUnit = select.value;
  let conversionResult;

  if (selectedUnit === "kmtomile") {
    conversionResult = value * 0.621371;
    result.textContent = `Wynik: ${value} kilometrów to ${conversionResult.toFixed(
      2
    )} mil.`;
    input.value = "";
  } else if (selectedUnit === "miletokm") {
    conversionResult = value / 0.621371;
    result.textContent = `Wynik: ${value} mil to ${conversionResult.toFixed(
      2
    )} kilometrów.`;
    input.value = "";
  } else {
    result.textContent = "Proszę wybrać odpowiednią konwersję.";
  }
});
