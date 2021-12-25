const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const fast = document.querySelector('#fast')
const cheap = document.querySelector('#cheap')

toggles.forEach(toggle => {
  toggle.addEventListener('change', e => doTrick(e.target))
})

function doTrick(target) {
  if (good.checked && cheap.checked && fast.checked) {
    good === target && (cheap.checked = false)

    fast === target && (good.checked = false)

    cheap === target && (good.checked = false)
  }
}
