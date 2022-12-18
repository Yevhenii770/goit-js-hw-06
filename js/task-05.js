const valueInput = document.querySelector("#name-input");
const valueOutput = document.querySelector('#name-output') 
valueInput.addEventListener("input", onFormInput)

function onFormInput(event) {

    valueOutput.textContent = 'Anonymous'
    
    if (event.currentTarget.value !== '') {
    valueOutput.textContent = event.currentTarget.value
    }
}


