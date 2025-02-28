const togglebtn=document.querySelector(".mode-toggle");
togglebtn.addEventListener("click", switchMode);

 function switchMode(){
    document.body.classList.toggle("dark-mode");
    togglebtn.classList.toggle("dark-mode");
    
    if(document.body.classList.contains("dark-mode")){
        togglebtn.textContent="Toggle Light Mode"
        localStorage.setItem("mode","dark")
    }else{
          togglebtn.textContent="Toggle Dark Mode";
          localStorage.setItem("mode","light")
    }

    console.log("click")
 }
 window.addEventListener("DOMContentLoaded", function(){
    const saveMode=this.localStorage.getItem("mode")
    if(saveMode==="dark"){
        this.document.body.classList.add("dark-mode")
        togglebtn.classList.add("dark-mode")
        togglebtn.textContent="Toggle Light Mode"
    }else{
        togglebtn.textContent="Toggle Dark Mode"
    }

 })