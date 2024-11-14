document.getElementById("user_form").addEventListener("submit", (event) => {
    let name_require = /^[a-zA-z]{3,}$/
    let email_require = /^[a-zA-z0-9._+-=]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,6}$/
    let password_require = /^[a-zA-z0-9@!#$%^&]{8,15}$/
    let c_password_require = /^[a-zA-z0-9@!#$%^&]{8,15}$/
    document.getElementById("name_error").textContent = ""
    document.getElementById("email_error").textContent = ""
    document.getElementById("password_error").textContent = ""
    document.getElementById("confirm_password_error").textContent = ""
    let name = document.getElementById("user_name").value.trim()
    let email = document.getElementById("user_email").value.trim()
    let password = document.getElementById("new_password").value.trim()
    let confirmPassword = document.getElementById("c_password").value.trim()

    let formIsValid = true;

    if (!name_require.test(name)) {
        document.getElementById("name_error").textContent = "Please match the requried formate...[a-zA-Z](3,)$"
        formIsValid = false
    }
    if (!email_require.test(email)) {
        document.getElementById("email_error").textContent = "Please enter a valid email format (e.g., example@example.com)."
        formIsValid = false
    }
    if (!password_require.test(password)) {
        document.getElementById("password_error").textContent = "Password must be 8-15 characters long and can include letters, numbers, and special characters (@, !, #, $, %, ^, &)."
        formIsValid = false
    }
    if (!c_password_require.test(confirmPassword)) {
        document.getElementById("confirm_password_error").textContent = "Password must be 8-15 characters long and can include letters, numbers, and special characters (@, !, #, $, %, ^, &)."
        formIsValid = false
    }

    if (formIsValid) {
        addUser(email, password)
    } else {
        event.preventDefault();
    }
    function addUser(email, password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ user_email: email, user_password: password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Data added successfully");
        window.location.href = "login.html";
    }
    // window.location.href="login.html"
});




