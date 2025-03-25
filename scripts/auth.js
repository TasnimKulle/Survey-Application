const authSwitch=document.querySelector('#authSwitch');
const switchForm =document.querySelector('#switchForm');
const authForm=document.querySelector('#authForm');
const formTitle=document.querySelector('#form-title')
const email=document.querySelector('#email');
const username=document.querySelector('#username');
const password=document.querySelector('#password');
const confirmPassword=document.querySelector('#confirmPassword');
const authButton=document.querySelector('#authButton');

let signIn = true;

document.body.addEventListener('click', (e)=>{
    if(e.target.id != "siwtchForm")
    return;
    switchAuthFrom();


})

function switchAuthFrom(){
    signIn= !signIn;
    if(signIn){
        authSwitch.innerHTML=`Don’t have an account? 
            <a href="#" id="switchForm">Sign up</a>`;
        formTitle.textContent='Sign In'
        authButton.textContent='Sign In'
        username.style.display='none';
        confirmPassword.style.display='none'
        username.value='';
        email.value='';
        password.value='';
        confirmPassword.value='';  
        console.log("helo")
    }else{
        authSwitch.innerHTML=`Already have an account? 
            <a href="login.html">Sing In </a>`;
        formTitle.textContent='Sign Up'
        authButton.textContent='Sign Up'
        username.style.display='block';
        confirmPassword.style.display='block'
        console.log("helo1")

    }
}