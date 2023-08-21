import audiosMap from "./map.js"

export const setSoundEvents = () => {
  audiosMap.forEach((audioMap) => {
    audioMap.btn.addEventListener("click", (event) => {
      const isSelected = audioMap.btn.classList.contains("selected")

      if (isSelected) {
        audioMap.btn.classList.remove("selected")
      } else {
        resetAllSounds()
        audioMap.btn.classList.add("selected")
      }

      if (audioMap.btn.classList.contains("selected")) {
        audioMap.audio.play()
      } else {
        audioMap.audio.pause()
      }
    })
  })
}

export const resetAllSounds = () => {
  audiosMap.forEach((audioMap) => {
    audioMap.btn.classList.remove("selected")
    audioMap.audio.pause()
  })
}
