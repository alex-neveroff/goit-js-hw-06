let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const numberValue = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  numberValue.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  numberValue.textContent = counterValue;
});
