const numberBoxes = document.querySelector("#controls>input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const generalBox = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const nextBox = document.createElement("div");
    nextBox.style.width = `${30 + i * 10}px`;
    nextBox.style.height = `${30 + i * 10}px`;
    nextBox.style.backgroundColor = getRandomHexColor();
    newBoxes.push(nextBox);
  }
  return newBoxes;
};

createButton.addEventListener("click", () => {
  if (generalBox.childNodes.length > 0) {
    generalBox.innerHTML = "";
  }
  generalBox.prepend(...createBoxes(numberBoxes.value));
});

const destroyBoxes = () => {
  generalBox.innerHTML = "";
  numberBoxes.value = "";
};

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
