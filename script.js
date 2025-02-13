document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const gifContainer = document.getElementById("gifContainer");
  const messageContainer = document.getElementById("messageContainer");
  const h1text = document.getElementById("h1");

  let scale = 1;
  const scaleIncrement = 1.2;
  const messages = [
    "I will get you flowers!",
    "I will get you chocolates!",
    "I promise to send you cat reels!",
    "I will get you smol cats",
    "I will always be there for you!",
    "Let's make beautiful memories together!",
  ];
  let messageIndex = 0;

  const growYesButton = () => {
    scale *= scaleIncrement;
    yesButton.style.transform = `scale(${scale})`;
  };

  const showMessage = () => {
    messageContainer.textContent = messages[messageIndex];
    messageContainer.classList.remove("hidden");
    messageIndex = (messageIndex + 1) % messages.length;
  };

  yesButton.addEventListener("click", () => {
    gifContainer.classList.remove("hidden");
    yesButton.style.display = "none";
    noButton.style.display = "none";
    messageContainer.classList.add("hidden");
    h1text.innerText = "Thankyou for accepting my proposal";
  });

  noButton.addEventListener("click", () => {
    growYesButton();
    showMessage();
  });
});
