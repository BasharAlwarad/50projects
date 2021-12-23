const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const card = document.querySelector('.card')

form.addEventListener('submit', e => {
  e.preventDefault()
  const user = search.value

  user && getUser(user)
  getRepos(user)
  search.value = ''
})

async function getUser(userName) {
  try {
    const { data } = await axios(APIURL + userName)

    createUser(data)
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard('No profile with this username')
    }
  }
}

async function getRepos(userName) {
  try {
    const { data } = await axios(APIURL + userName + '/repos?sort=created')
    createRepos(data)
  } catch (error) {
    createErrorCard('Problem fetching repos')
  }
}

function createRepos(reposAr) {
  const reposEl = document.getElementById('repos')

  reposAr = reposAr.sort((a, b) => {
    a.watchers - b.watchers
  })

  for (let i = 0; i < 5; i++) {
    const a = document.createElement('a')
    a.classList.add('repos')
    a.href = reposAr[i].html_url
    a.target = '#'
    a.innerHTML = reposAr[i].name
    reposEl.appendChild(a)
  }
}

function createUser(data) {
  const { avatar_url, name, bio, followers, following, public_reops } = data
  main.innerHTML = ''
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `
  <div>
  <img
    src="${avatar_url}"
    alt="${name}"
    class="avatar"
  />
</div>
<div class="user-info">
  <h2>${name}</h2>
  <p>
  ${bio}
  </p>
  <ul>
  <li>${followers} <strong>Followers</strong></li>
  <li>${following} <strong>Following</strong></li>
  <li>${public_reops} <strong>Repos</strong></li>
  </ul>
  <div id="repos">
  <h5>Repos sorted by most watched</h5>
  
  </div>
</div>

  `
  main.appendChild(card)
}

function createErrorCard(msg) {
  main.innerHTML = ''
  const errorCard = document.createElement('div')
  errorCard.classList.add('card')
  errorCard.innerHTML = `
  <h1>${msg}</h1>
  `
  main.appendChild(errorCard)
}

// const arr1 = [5, 4, 7, 43, 35, 73, 53, 55, 43, 34, 5]

// const arr2 = arr1.sort((a, b) => a - b)

// console.log(arr2)
