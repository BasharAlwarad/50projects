const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const message = ['Message One', 'Message Two', 'Message Three', 'Message Four']
const type = ['success', 'error', 'info']

button.addEventListener('click', () => createNot())

function createNot(message = null, type = null) {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add(type ? type : getRandomType())
  toast.innerText = message ? message : getRandomMessage()
  toasts.appendChild(toast)

  createSpan(toast)

  setTimeout(() => {
    toast.remove()
  }, 5000)
}

function createSpan(toast) {
  const span = document.createElement('span')

  span.classList.add('span')
  span.innerText = 'x'

  toast.appendChild(span)

  span.addEventListener('click', e => removeToast(e))
}

function removeToast(e) {
  e.target.parentElement.remove()
}

function getRandomMessage() {
  return message[Math.floor(Math.random() * message.length)]
}

function getRandomType() {
  return type[Math.floor(Math.random() * type.length)]
}
