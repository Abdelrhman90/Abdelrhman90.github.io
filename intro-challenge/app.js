const submit = document.querySelector('.btn')
const form =  document.querySelector('form')
const input = document.querySelector('input')

const validateEmail = (email) =>{
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}





submit.addEventListener('click' , (e) => {
    e.preventDefault()

    
    
    if (form.firstName.value === "") {
        document.querySelector('.first-err').innerHTML = "First Name Cannot be an empty field"
        document.querySelector('.first').classList.add('err')
        document.querySelector('.first-icon').classList.remove('display')
    } if (form.lastName.value === "") {
        document.querySelector('.last-err').innerHTML = "Last Name Cannot be an empty field"
        document.querySelector('.last').classList.add('err')
        document.querySelector('.last-icon').classList.remove('display')
    }if (!validateEmail(form.emailAddress.value)) {
        document.querySelector('.email-err').innerHTML = "Looks like this is not a valid email"
        document.querySelector('.email').classList.add('err')
        document.querySelector('.email-icon').classList.remove('display')
    }
    if (form.Password.value === "") {
        document.querySelector('.password-err').innerHTML = "Last Name Cannot be an empty field"
        document.querySelector('.password').classList.add('err')
        document.querySelector('.password-icon').classList.remove('display')
    }
     
    
    
    
    
    
    
    
   
    

})