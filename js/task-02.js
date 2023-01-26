const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const potatoes = document.createElement("li");
potatoes.classList.add("item");
potatoes.textContent = ingredients[0];

const mushrooms = document.createElement("li");
mushrooms.classList.add("item");
mushrooms.textContent = ingredients[1];

const garlic = document.createElement("li");
garlic.classList.add("item");
garlic.textContent = ingredients[2];

const tomatos = document.createElement("li");
tomatos.classList.add("item");
tomatos.textContent = ingredients[3];

const herbs = document.createElement("li");
herbs.classList.add("item");
herbs.textContent = ingredients[4];

const condiments = document.createElement("li");
condiments.classList.add("item");
condiments.textContent = ingredients[5];

list.prepend(potatoes, mushrooms, garlic, tomatos, herbs, condiments);
