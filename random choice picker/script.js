const qs = el => document.querySelector(el)

const tagsEl = qs('#tags')
const textarea = qs('#textarea')

textarea.focus()

const createTags = input => {
  const tags = input
    .split(',')
    .filter(tag => tag.trim('') !== '')
    .map(tag => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const span = document.createElement('span')
    span.classList.add('tag')
    span.innerText = tag
    tagsEl.appendChild(span)
  })
}

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

const highlightTag = tag => {
  tag.classList.add('highlight')
}

const unHighlightTag = tag => {
  tag.classList.remove('highlight')
}

const randomChoice = () => {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    console.log(randomTag)
    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 200)
  }, 200)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 300)
  }, times * 100)
}

textarea.addEventListener('keyup', e => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomChoice()
  }
})
