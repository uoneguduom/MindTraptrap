"use-strict"

const buttons1 = document.getElementById("1")
const buttons2 = document.getElementById("2")
const buttons3 = document.getElementById("3")
const buttons4 = document.getElementById("4")

const storePlayerChoice = (button) => {
  const playerId = button.id; 
  console.log(`Bouton cliqué : ${playerId}`);
  localStorage.setItem("playerNb", playerId);
  choiceMade();
};

buttons1.addEventListener("click", () => storePlayerChoice(buttons1));
buttons2.addEventListener("click", () => storePlayerChoice(buttons2));
buttons3.addEventListener("click", () => storePlayerChoice(buttons3));
buttons4.addEventListener("click", () => storePlayerChoice(buttons4));



const choiceMade = () => {
  const content = document.querySelectorAll(".content");
  
  content.forEach(element => {
    element.remove();
  });
};