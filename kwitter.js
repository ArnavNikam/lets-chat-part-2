function login() {
    username = document.getElementById("login_input").value;
    localStorage.setItem("loginword", username);
    window.location = "kwitter_room.html";
}