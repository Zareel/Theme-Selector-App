let sunMoon = document.querySelector("#sun");
let body = document.querySelector("body");

sunMoon.addEventListener("click", () => {
  sunMoon.classList.toggle("bi-moon-fill");

  if (sunMoon.classList.toggle("bi-brightness-high-fill")) {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
  }
});
