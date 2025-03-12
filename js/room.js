const Room = document.querySelector("div")
const idRoom = Room.id
console.log("Before Local Storage")
localStorage.setItem("nbRoom", idRoom)
console.log("After Local Storage")
window.location.replace("../html/yourClue.html");