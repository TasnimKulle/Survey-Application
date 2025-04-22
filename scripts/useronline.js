function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  const user = JSON.parse(localStorage.getItem("OnlineUsers"));
  
  if (!user) {
    window.location.href = 'pages/auth.html';
  } else {
    document.getElementById("username").textContent = `${user.username || 'N/A'}`;
    document.getElementById("email").textContent = `${user.email}`;
  }
  
  function logout() {
    localStorage.removeItem("OnlineUsers");
    window.location.href = '/pages/auth.html';
  }
  