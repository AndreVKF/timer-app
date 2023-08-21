import state from "./state.js"
import { startBtn, pauseBtn, setBtn, elMinutes, elSeconds } from "./elements.js"
import {
  countDown,
  stopTimer,
  validateTime,
  disableSetTime,
  enableSetTime,
} from "./services.js"

export function init() {
  if (state.isSettingTimer) return

  state.isRunning = document.documentElement.classList.toggle("running")
  startBtn.classList.toggle("selected")

  countDown()
}

export function pause() {
  if (state.isSettingTimer) return

  stopTimer()
}

export function set() {
  state.isSettingTimer = setBtn.classList.toggle("selected")

  if (state.isSettingTimer) {
    stopTimer()
    disableSetTime()
  } else {
    enableSetTime()
  }
}

export function add() {
  state.isRunning = false

  let minutes = Number(elMinutes.value) + 5
  elMinutes.value = minutes
  validateTime()
}

export function minus() {
  state.isRunning = false

  let minutes = Number(elMinutes.value) - 5
  elMinutes.value = minutes
  validateTime()
}
