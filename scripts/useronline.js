function toggleDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
const user = JSON.parse(localStorage.getItem("OnlineUsers"));

if (!user) {
  window.location.href = 'pages/auth.html';
}
else {
  document.getElementById("username").textContent = `${user.username || 'N/A'}`;
  document.getElementById("email").textContent = `${user.email}`;
  document.getElementById("userType").textContent = `${user.userType || 'N/A'}`;
}

function logout() {
  localStorage.removeItem("OnlineUsers");
  window.location.href = '/pages/auth.html';
}


// admin role check
const currentUser = {
  username:"tasnim",
  email: "tasnim12@gmail.com",
  password: "12",
  role: "admin" 
}
localStorage.setItem("currentUser", JSON.stringify(currentUser));
// role check
document.addEventListener("DOMContentLoaded", function(){
  const currentUserData = JSON.parse(localStorage.getItem("currentUser"));
 
  if(!currentUserData || currentUserData.role !== "admin"){ 
    window.location.href = '/pages/auth.html';
  }
  // not admin 
  const adminLink = document.getElementById("adminLink");
  if(currentUserData.role !== "admin"){
    adminLink.style.display = "none";
  }else if(user.role !== "admin"){
    // admin role
    adminLink.style.display = "block";
  }
})