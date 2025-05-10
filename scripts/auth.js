const authSwitch=document.querySelector('#authSwitch');
const switchForm =document.querySelector('#switchForm');
const authForm=document.querySelector('#authForm');
const formTitle=document.querySelector('#form-title')
const email=document.querySelector('#email');
const username=document.querySelector('#username');
const password=document.querySelector('#password');
const confirmPassword=document.querySelector('#confirmPassword');
const authButton=document.querySelector('#authButton');
const userType=document.getElementById('users')
const Options=document.getElementsByTagName('option')
// console.log(authSwitch)

let signIn = true;

document.body.addEventListener('click', (e)=>{
    if(e.target.id != "switchForm")
    return;
    switchAuthFrom();


})
authForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    // console.log("hellllo")
    const user={
        username: signIn ? undefined : username.value,
        email: email.value,
        password:password.value,
        userType: userType.value,

    };
    console.log("hello",user)
   if(signIn){
    const users=JSON.parse(localStorage.getItem("users")) || [];
    const existingUser=users.find((user)=>user.email === email.value && user.password === password.value && user.userType === userType.value)
    if(existingUser){
     localStorage.setItem('OnlineUsers',JSON.stringify(existingUser))
     window.location.href='/pages/survey.html';
        
    }else{
        alert('Invalid credentials')
        return;
    }
    
   }else{
    const users=JSON.parse(localStorage.getItem("users")) || [];
    const existingUser=users.find((user)=>user.username === username.value && user.email === email.value)
    if(existingUser){
        alert(`user ${existingUser.username} Allready Exists`)
        return;
    }
    if(confirmPassword.value !== password.value){
        alert("Password Mismatch")
        return
       } 
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    alert("Ragestared Seccessfully")
    switchAuthFrom()
   }
    
   
})

function switchAuthFrom(){
    signIn = !signIn;
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
        userType.style.display='none';
        // Options.style.display='none';
        userType.value='';
        Options.value='';

        console.log("helo")
    }else{
        authSwitch.innerHTML=`Already have an account? 
            <a href="#" id="switchForm">Sign In </a>`;
        formTitle.textContent='Sign Up'
        authButton.textContent='Sign Up'
        username.style.display='block';
        confirmPassword.style.display='block'
        userType.style.display='block';
        // Options.style.display='block';
        
        // console.log("helo1")

    }
}
