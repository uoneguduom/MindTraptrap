"use-strict"

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Bouton cliqué : ${button.id}`);
    localStorage.setItem("playerNb", button.id)
    choiceMade()
  });
});

const choiceMade = () => {
  const content = document.querySelectorAll(".content");
  
  content.forEach(element => {
    element.remove();
  });
};


