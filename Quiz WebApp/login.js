document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials (for demonstration purposes)
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        // Authentication successful
        // Store user session (you can use Local Storage)
        localStorage.setItem("loggedInUser", username);
        // Redirect to main quiz page or dashboard
        window.location.href = "quiz.html"; // Redirect to your main quiz page
    } else {
        // Authentication failed
        alert("Invalid username or password. Please try again.");
    }
});
