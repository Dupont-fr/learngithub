document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Formulaire envoyé !')
})
document.querySelector('input[type="text"]').addEventListener('input', (e) => {
  console.log('Texte saisi :', e.target.value)
})
document
  .querySelector('input[type="checkbox"]')
  .addEventListener('change', (e) => {
    console.log('Case à cocher :', e.target.checked)
  })
