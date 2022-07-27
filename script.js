"use strict";
const btn = document.querySelector(".info__btn");

btn.addEventListener("click", function () {
  document.querySelector(".share__panel").classList.toggle("active");
  if (document.querySelector(".share__panel").classList.contains("active")) {
    btn.style.backgroundColor = "var(--color-Blue)";
    document.querySelector(".icon-share").style.fill =
      "var(--color-Blue-light)";
  } else {
    btn.style.backgroundColor = "var(--color-Blue-light)";
    document.querySelector(".icon-share").style.fill = "var(--color-Blue)";
  }
});
