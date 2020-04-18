const input = document.querySelector('input')
const submit = document.querySelector('.btn')

const validateEmail = (input) => {
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input.toLowerCase())
}

submit.addEventListener('click' , (e) => {

    e.preventDefault()
    if (!validateEmail(input.value)){
        document.querySelector('.error').innerHTML = "Please enter a valid email address"
        document.querySelector('input').classList.add('err')
    }



})