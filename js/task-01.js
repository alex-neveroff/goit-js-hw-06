const categoryCounter = document.querySelectorAll(".item");
console.log("Number of categories: ", categoryCounter.length);

categoryCounter.forEach(function (category) {
  const categoryHeader = category.querySelector("h2");
  const elementsCounter = category.querySelectorAll("li");

  console.log("\nCategory: ", categoryHeader.textContent);
  console.log("Elements: ", elementsCounter.length);
});
