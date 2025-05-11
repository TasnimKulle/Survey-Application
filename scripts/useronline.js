window.addEventListener('DOMContentLoaded', checkAdminAccess);
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
  // document.getElementById("userType").textContent = `${user.userType || 'N/A'}`;
}

function logout() {
  localStorage.removeItem("OnlineUsers");
  window.location.href = '/pages/auth.html';
}


function checkAdminAccess() {
  const user = JSON.parse(localStorage.getItem("OnlineUsers"));
  if (user && user.username === "tasnim" && user.password === "12") {
    document.getElementById("adminAccess").style.display = "block";
  } else {
    document.getElementById("adminAccess").style.display = "none";
  }
}