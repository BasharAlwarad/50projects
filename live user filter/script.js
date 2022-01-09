const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

filter.addEventListener('input', e => filterData(e.target.value))

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')
  const { results } = await res.json()
  result.innerHTML = ''

  results.forEach(user => {
    const li = document.createElement('li')

    li.innerHTML = `
    <img
    src="${user.picture.large}"
    alt="${user.name.first}"
    />
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `
    listItems.push(li)

    result.appendChild(li)
  })
}

getData()

function filterData(searchTerm) {
  listItems.forEach(item => {
    item.classList.add('hide')
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    }
  })
}
