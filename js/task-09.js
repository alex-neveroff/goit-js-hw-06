const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const declaredСolor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = (event) => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  declaredСolor.textContent = newColor;
};

changeColorBtn.addEventListener("click", changeColor);
