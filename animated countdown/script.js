const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

replay.addEventListener('click', () => resetDom())

function resetDom() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach(num => {
    num.classList.value = ''
  })
  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextTolLast = nums.length - 1

    num.addEventListener('animationend', e => {
      if (e.animationName === 'goIn' && idx !== nextTolLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}
