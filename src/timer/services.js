import state from "./state.js"
import { elMinutes, elSeconds, startBtn, pauseBtn } from "./elements.js"

export const updateDisplay = (minutes, seconds) => {
  const displayMinutes = minutes ?? 0
  const displaySeconds = seconds ?? 0

  elMinutes.value = String(displayMinutes).padStart(2, "0")
  elSeconds.value = String(displaySeconds).padStart(2, "0")
}

export const countDown = () => {
  if (!state.isRunning) return

  let minutes = Number(elMinutes.value)
  let seconds = Number(elSeconds.value)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    stopTimer()
    updateDisplay()
    return
  }

  updateDisplay(minutes, seconds)

  setTimeout(() => {
    countDown()
  }, 1000)
}

export const stopTimer = () => {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  startBtn.classList.remove("selected")
}

export const validateTime = () => {
  let minutes = elMinutes.value
  let seconds = elSeconds.value

  if (minutes === "" || Number(minutes) < 0) {
    minutes = 0
  }

  if (seconds === "" || Number(seconds) < 0) {
    seconds = 0
  }

  if (Number(minutes) > 59) {
    minutes = 59
  }

  if (Number(seconds) > 59) {
    seconds = 59
  }

  updateDisplay(minutes, seconds)
}

export const disableSetTime = () => {
  elMinutes.disabled = false
  elSeconds.disabled = false
  startBtn.classList.add("btn-disabled")
  pauseBtn.classList.add("btn-disabled")
}

export const enableSetTime = () => {
  elMinutes.disabled = true
  elSeconds.disabled = true
  startBtn.classList.remove("btn-disabled")
  pauseBtn.classList.remove("btn-disabled")
  validateTime()
}
