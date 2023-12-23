"use strict";

const btn = document.querySelector("button");
const getImage = () => {
  btn.textContent = "Loading";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const imgBox = document.querySelector(".image-box");
      const dogImg = document.createElement("img");
      imgBox.append(dogImg);
      dogImg.src = data.message;
      btn.textContent = "Get Image";
    })
    .catch((err) => console.log("error:", err));
};
