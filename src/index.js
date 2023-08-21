import Timer from "./timer/index.js"
import Soundpad from "./soundpad/index.js"

// toggle theme
const btnToggle = document.getElementById("toggle-mode")
btnToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark")
})

// timer display
const timer = new Timer()
timer.exec()

// sounds
const soundpad = new Soundpad()
soundpad.exec()
