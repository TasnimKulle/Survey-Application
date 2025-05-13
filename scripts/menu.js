const toggleButton = document.querySelector('.toggle-button')
const header=document.querySelector('header')
const navLinks = document.querySelector('.navlink a')
toggleButton.addEventListener('click',function(){
    header.classList.toggle('active');
    // navLinks.classList.toggle('active')
    console.log('clicked', navLinks)

})