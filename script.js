// Wait for Pi SDK to load before running code
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Pi === "undefined") {
        console.error("Pi SDK not loaded. Make sure you are running inside Pi Browser.");
        alert("Please open this in Pi Browser to use Pi authentication.");
        return;
    }

    // Initialize Pi SDK
    Pi.init({ version: "2.0" }).then(() => {
        console.log("Pi SDK Initialized");

        // Authenticate User
        document.getElementById("login-btn").addEventListener("click", function () {
            Pi.authenticate(["username"]).then(function (user) {
                console.log("Authenticated User:", user);
                document.getElementById("user-info").innerHTML = "Welcome, " + user.username;
            }).catch(function (error) {
                console.error("Authentication failed:", error);
            });
        });

    }).catch((error) => {
        console.error("Pi SDK Initialization Failed:", error);
    });
});
