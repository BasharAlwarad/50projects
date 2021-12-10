const faqs = document.querySelectorAll('.faq')
const toggles = document.querySelectorAll('.faq-toggle')
const check = document.getElementById('all')

const removeActive = () => {
  faqs.forEach(faq => {
    faq.classList.remove('active')
  })
}

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    !check.checked && removeActive()

    toggle.parentNode.classList.toggle('active')
  })
})
