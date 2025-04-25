let popup = document.getElementById("popup");
let subscription = document.getElementById("subscription");

function openPopup(plan) {
  popup.classList.add("open-popup");
  subscription.innerHTML = "Processing your order...";

  setTimeout(() => {
    if (plan === "premium") {
      subscription.innerHTML = "Order status: PREMIUM";
    } else if (plan === "regular") {
      subscription.innerHTML = "YOU ORDERED REGULAR";
    }
  }, 2000);
}

function closePopup() {
  popup.classList.remove("open-popup");
}
