const validationInput = document.querySelector('#validation-input')
validationInput.addEventListener('blur', onChangeColor)

function onChangeColor(event) {
    validationInput.classList.remove('valid')
    validationInput.classList.remove('invalid')
    
    if (event.currentTarget.value.length > 6) {
        validationInput.classList.add('invalid')
    } if (event.currentTarget.value.length === 6) {
        validationInput.classList.add('valid')
    } 
}


