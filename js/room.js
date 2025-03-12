const Room = document.querySelector("div")
const idRoom = Room.id
localStorage.setItem("nbRoom", idRoom)
window.location.replace("/html/yourClue.html");

