const body = document.querySelector('body')
const changeBtn = document.querySelector('.change-color')
const span = document.querySelector('.color')

console.dir(span)

changeBtn.addEventListener('click', (event)=> {
  
  getRandomHexColor()
  span.textContent = body.style.backgroundColor
  
})


function getRandomHexColor() {
  return body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}