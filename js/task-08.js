const form = document.querySelector('.login-form')
const firstInput = form.elements[0]
const secondInput = form.elements[1]
const objResolt = []
console.log(objResolt)

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
   
    if (firstInput.value === '' || secondInput.value === '') {
        alert ('Все поля должны быть заполнены!')
    } if (firstInput.value !== '' && secondInput.value !== '') {
        objResolt.push("email:",firstInput.value)
        objResolt.push("password:", secondInput.value)
        firstInput.value = ''
        secondInput.value = ''
    }
    
    }

    
   

    
