const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'we love programing'
let idx = 1
let speed = 300 / speedEl.value

const writeText = () => {
  textEl.innerText = text.slice(0, idx)
  idx++
  idx > text.length && (idx = 1)
  setTimeout(idx <= text.length && writeText, speed)
}

speedEl.addEventListener('input', e => (speed = 300 / e.target.value))

writeText()
