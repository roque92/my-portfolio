function getUsername() {
    let username = document.getElementById("username").value;
    let viewAlert = document.getElementById("alert");

    if (username === "") {
        viewAlert.style.opacity = '1';
    } else {
        alert(username);
    }
}

function closeAlert(ele) {
    ele.parentElement.style.opacity = '0';
}