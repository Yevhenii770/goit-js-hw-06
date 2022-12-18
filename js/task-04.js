const decrementButton = document.querySelector('#counter button[data-action="decrement"]')
const incrementButton = document.querySelector('#counter button[data-action="increment"]')
const valueNow = document.querySelector('#value')
let count = 0

decrementButton.addEventListener('click', ()=>{
   count -=1;
    updateValueNow()
})
incrementButton.addEventListener('click', ()=>{
    count +=1;
    updateValueNow();
})

function updateValueNow(){
    valueNow.textContent = count;
};