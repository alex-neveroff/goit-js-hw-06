const symbolsInput = document.querySelector("#validation-input");

symbolsInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == symbolsInput.dataset.length) {
    symbolsInput.classList.add("valid");
    symbolsInput.classList.remove("invalid");
  } else {
    symbolsInput.classList.remove("valid");
    symbolsInput.classList.add("invalid");
  }
});
