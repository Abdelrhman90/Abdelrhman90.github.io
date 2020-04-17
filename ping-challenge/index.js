const form = document.querySelector('form')
const submit = document.querySelector('.btn')
const input= document.querySelector('input')

const validateEmail = (email)  => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }

submit.addEventListener('click', (e) => {
   
        if(!validateEmail(input.value)){
            document.querySelector('.err').innerHTML = "Please provide a valid email address"
            document.querySelector('input').classList.add('error')
        } if (input.value == ''){
            document.querySelector('.err').innerHTML = "It seems you forget to put an email address"
        }
    
   
})

