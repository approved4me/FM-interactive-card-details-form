const form = document.querySelector(".rating-form");
const rateStart = document.querySelector(".content_rating");
const thankYou = document.querySelector(".content_thanks");
const value = document.getElementById("rating-value");

form.addEventListener("submit", function(e) {
  e.preventDefault(); //prevents Browser from refreshing
  const selector = "input[name=ratings]:checked";
  const checkedInput = document.querySelector(selector);
  rateStart.classList.add("hidden");
  thankYou.classList.remove("hidden");
  value.innerHTML = checkedInput.value;
  console.log(checkedInput.value);
})