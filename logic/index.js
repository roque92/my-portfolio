//get and save the username
function getUsername(event) {
    let username = document.getElementById("username").value;
    let viewAlert = document.getElementById("alert");
    let loginForm = document.getElementById("loginForm");

    if (username === "") {
        //if non username is entered alert shows
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            viewAlert.style.opacity = '1';
        })
    } else {
        //if uername is entered clear the form
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            localStorage.setItem("username", username);
            loginForm.reset();
            nextPage();
        })
    }
}

//Closing alert and focus content
function closeAlert(ele) {
    let input = document.getElementById("username");

    ele.parentElement.style.opacity = '0';
    input.focus();
}

//Navigate to the next HTML
function nextPage() {
    window.location.href = "view/welcome.html";
}