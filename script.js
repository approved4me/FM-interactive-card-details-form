const form = document.querySelector(".card_holder");
const thankYou = document.querySelector(".thank_you");


form.addEventListener("submit", function(e) {
  e.preventDefault(); //prevents Browser from refreshing
  form.classList.add("hidden");
  thankYou.classList.remove("hidden");
})