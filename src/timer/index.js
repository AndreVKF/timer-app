import state from "./state.js"
import * as events from "./events.js"
import { elTimerOptions, elMinutes, elSeconds, setBtn } from "./elements.js"
import { updateDisplay, enableSetTime } from "./services.js"

class timer {
  minutes
  seconds

  constructor(minutes, seconds) {
    this.minutes = minutes ?? state.minutes
    this.seconds = seconds ?? state.seconds
  }

  exec = () => {
    updateDisplay(this.minutes, this.seconds)

    this.registerControls()
    this.registerInputValidation()
  }

  registerControls = () => {
    elTimerOptions.addEventListener("click", (event) => {
      const action = event.target.dataset.action
      if (!action || action === "") return

      if (typeof events[action] === "function") {
        events[action](event.target)
      }
      return
    })
  }

  registerInputValidation = () => {
    const inputElements = [elMinutes, elSeconds]

    elMinutes.addEventListener("keypress", (event) => {
      if (event.preventDefault) event.preventDefault

      let key
      const checkNumber = /^\d/

      if (event.type === "paste") {
        key = event.clipboardData.getData("text/plain")
      } else {
        key = event.key
      }

      if (key === "Enter") {
        enableSetTime()
        state.isSettingTimer = false
        setBtn.classList.remove("selected")
        return
      }

      if (!checkNumber.test(key)) event.returnValue = false
    })
  }
}

export default timer
