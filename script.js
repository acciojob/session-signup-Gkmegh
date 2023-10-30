document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password === confirmPassword) {
        var userData = {
            name: name,
            email: email,
            password: password
        };

        sessionStorage.setItem("userData", JSON.stringify(userData));
        alert("Sign up successful!");
    } else {
        alert("Passwords do not match");
    }
});
