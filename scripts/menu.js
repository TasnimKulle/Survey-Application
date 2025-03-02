const toggleButton = document.querySelector('.toggle-button')
const header=document.querySelector('header')
const logInOut=document.querySelector(".log-in a")
const navLinks = document.querySelector('.navlink a')
toggleButton.addEventListener('click',function(){
    navLinks.classList.toggle('active');
    logInOut.classList.toggle('active')
    console.log('clicked', navLinks)

})