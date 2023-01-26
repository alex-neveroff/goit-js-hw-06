const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesWithTags = images
  .map(
    (image) =>
      `<li class="item"><img class="photo" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", imagesWithTags);

const photos = list.querySelectorAll(".photo");

list.style.listStyle = "none";
list.style.display = "flex";
list.style.gap = "20px";

photos.forEach((photo) => {
  photo.style.display = "block";
  photo.style.maxWidth = "500px";
  photo.style.height = "280px";
});
