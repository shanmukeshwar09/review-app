import { reviews } from "./data.js";

const image = document.querySelector(".image");
const name = document.querySelector(".name");
const professtion = document.querySelector(".profession");
const des = document.querySelector(".des");
const buttons = document.querySelectorAll(".button");
let current_index = 0;

const init = () => {
  const current_review = reviews[current_index];
  image.src = current_review.image;
  name.innerHTML = current_review.name;
  professtion.innerHTML = current_review.profession;
  des.innerHTML = current_review.des;
};

buttons.forEach((element) =>
  element.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "prev":
        if (current_index != 0) current_index--;
        break;
      case "next":
        if (current_index != reviews.length - 1) current_index++;
        break;
      default:
        break;
    }

    init();
  })
);
init();
