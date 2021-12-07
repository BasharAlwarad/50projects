const panels = document.querySelectorAll('.panel')

addActive()

function addActive() {
  panels.forEach(panel => {
    panel.addEventListener('click', e => {
      panels.forEach(panel => {
        panel.classList.remove('active')
      })
      e.target.classList.add('active')
    })
  })
}
