export const timer = ms => new Promise(res => setTimeout(res, ms))

export function shuffleArray(array) {
  let newArray = Array.from(array)
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }

  return newArray
}

export async function waitForInteraction() {
  return new Promise(resolve => {
    waitingKeypress(32).then(resolve)
    waitingTouch().then(resolve)
  })
}

function waitingKeypress(keyCode) {
  return new Promise(resolve => {
    document.addEventListener("keydown", onKeyHandler)
    function onKeyHandler(e) {
      if (e.keyCode === keyCode) {
        document.removeEventListener("keydown", onKeyHandler)
        resolve()
      }
    }
  })
}

function waitingTouch() {
  return new Promise(resolve => {
    document.addEventListener("touchstart", onKeyHandler)
    function onKeyHandler(e) {
      document.removeEventListener("touchstart", onKeyHandler)
      resolve()
    }
  })
}
