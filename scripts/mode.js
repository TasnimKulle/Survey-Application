const togglebtn=document.querySelector(".mode-toggle");
togglebtn.addEventListener("click", switchMode);

 function switchMode(){
    document.body.classList.toggle("dark-mode");
    togglebtn.classList.toggle("dark-mode");
    
    if(document.body.classList.contains("dark-mode")){
        togglebtn.innerHTML=`<i class="fa-solid fa-moon"></i>`
        localStorage.setItem("mode","dark")
    }else{
          togglebtn.innerHTML=`<i class="fa-solid fa-sun "></i>`;
          localStorage.setItem("mode","light")
    }

    console.log("click")
 }
 window.addEventListener("DOMContentLoaded", function(){
    const saveMode=this.localStorage.getItem("mode")
    if(saveMode==="dark"){
        this.document.body.classList.add("dark-mode")
    
        togglebtn.classList.add("dark-mode")
        togglebtn.innerHTML=`<i class="fa-solid fa-sun"></i>`
    }else{
        togglebtn.innerHTML=`<i class="fa-solid fa-moon"></i>`
    }

 })