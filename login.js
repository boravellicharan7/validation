document.getElementById("user_form").addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("user_email").value.trim();
    let password = document.getElementById("user_password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.user_email === email && user.user_password === password);

    if (existingUser) {
        alert("Logged in successfully!");
        window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid credentials. Please try again or register.");
    }
});
