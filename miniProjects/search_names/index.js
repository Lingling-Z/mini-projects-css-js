const searchInput = document.getElementById('searchInput')
const names = document.querySelectorAll('.name')

searchInput.addEventListener('keyup', (event) => {
  let search = event.target.value.toLowerCase()

  names.forEach((name) => {
    name.textContent.toLowerCase().includes(search)
      ? (name.style.display = 'block')
      : (name.style.display = 'none')
  })
})
