document.addEventListener("DOMContentLoaded", function() {
    const signinBtn = document.getElementById("signinbtn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (signinBtn) {
        signinBtn.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default behavior

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === "sibusiso" && password === "123") {
                alert("Access granted!");
                window.location.href = "pos.html"; // Redirect to POS dashboard
            } else {
                alert("Access denied! Wrong username or password.");
                usernameInput.value = "";
                passwordInput.value = "";
                usernameInput.focus();
            }
        });
    }
});
