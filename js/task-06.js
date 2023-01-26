const symbolsInput = document.querySelector("#validation-input");
const exactLength = symbolsInput.getAttribute("data-length");

symbolsInput.addEventListener("blur", (event) => {
  if (event.target.value.length == exactLength) {
    if (symbolsInput.classList.contains("invalid")) {
      symbolsInput.classList.remove("invalid");
    }
    return symbolsInput.classList.add("valid");
  }
  if (symbolsInput.classList.contains("valid")) {
    symbolsInput.classList.remove("valid");
  }
  return symbolsInput.classList.add("invalid");
});
