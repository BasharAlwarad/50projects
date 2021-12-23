const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')
let clickTime = 0
let time = 0

loveMe.addEventListener('click', e => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
    } else {
      clickTime = new Date().getTime()
    }
  }
})

function createHeart(e) {
  // time++
  times.innerText = ++time

  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop

  const i = document.createElement('i')
  i.classList.add('fas')
  i.classList.add('fa-heart')
  i.style.left = `${x}px`
  i.style.top = `${y}px`

  loveMe.appendChild(i)
  setTimeout(() => i.remove(), 1000)
}
