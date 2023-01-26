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
      `<li class="gallery__item"><img class="gallery__photo" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", imagesWithTags);

// *************
// Спочатку зробив так, але потім ментор в Slack
// NATALIIA VALKO сказала робити через файл CSS

// const photos = list.querySelectorAll(".gallery__photo");

// list.style.listStyle = "none";
// list.style.width = "1280px";
// list.style.display = "flex";
// list.style.gap = "20px";

// photos.forEach((photo) => {
//   photo.style.display = "block";
//   photo.style.maxWidth = "100%";
//   photo.style.height = "300px";
// });
