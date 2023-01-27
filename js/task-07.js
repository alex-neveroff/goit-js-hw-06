const fontSizeControl = document.querySelector("#font-size-control");
const textForChanging = document.querySelector("#text");
textForChanging.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", (event) => {
  textForChanging.style.fontSize = `${event.target.value}px`;
});
