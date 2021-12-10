const qs = el => document.querySelector(el)
const jokeEl = qs('#joke')
const jokeBtn = qs('#jokeBtn')

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  try {
    const res = await fetch('https://icanhazdadjoke.com', config)
    const { joke } = await res.json()
    return joke
  } catch (error) {
    console.error(error)
  }
}

jokeBtn.addEventListener('click', async () => {
  jokeEl.innerText = await generateJoke()
})
