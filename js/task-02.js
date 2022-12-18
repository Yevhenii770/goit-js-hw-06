const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector('#ingredients')

const makeLiFoUl = options => {
  return options.map(option => {
  const createElLi = document.createElement('li')
  createElLi.classList.add('item')
  createElLi.textContent = option
  return createElLi
})
}
const elements = makeLiFoUl(ingredients)
ingredientsUl.append(...elements)
