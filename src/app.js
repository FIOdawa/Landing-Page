function ideas() {
  let email = prompt("What is your email address?");
  if (email) {
    alert("We'll reach out to you with baking recipe ideas soon!");
  }
}

let buttonElement = document.querySelector(".more.info");

buttonElement.addEventListener("click", ideas);

function makeItDark() {
  let body = document.querySelector("body");

  body.classList.toggle("dark");
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", makeItDark);
