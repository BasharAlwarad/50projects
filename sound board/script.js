const qsa = els => document.querySelectorAll(els)
const qs = el => document.querySelector(el)

const sounds = Array.from(qsa('audio')).map(sound => sound.id)

console.log(sounds)

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  btn.addEventListener('click', () => {
    stopSongs()
    qs(`#${sound}`).play()
  })
  qs('#buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = qs(`#${sound}`)
    song.pause()
    song.currentTime = 0
  })
}
