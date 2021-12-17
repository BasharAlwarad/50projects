const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f1d39365e9c948cf9e843161fec7cd9&page=1`
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=0f1d39365e9c948cf9e843161fec7cd9&query="`

const main = document.getElementById('main')
const form = document.getElementById('form')

const search = document.getElementById('search')

getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const { results } = await res.json()

  showMovies(results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
    <img
          src="${IMG_PATH + poster_path}"
          alt="Movie theater"
          width="auto"
          height="auto"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${
            vote_average <= 5 ? 'red' : vote_average >= 8 ? 'green' : 'orange'
          }">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `

    main.appendChild(movieEl)
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})
