const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const withTags = [];

ingredients.forEach((ingredient) => {
  const ingredientTag = document.createElement("li");
  ingredientTag.classList.add("item");
  ingredientTag.textContent = ingredient;
  withTags.push(ingredientTag);
});

list.prepend(...withTags);
