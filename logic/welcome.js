window.onload = function () {
    let recoverUsername = localStorage.getItem("username");

    let valueField = document.querySelector(".showUsername");

    valueField.textContent = recoverUsername;
    localStorage.clear();

}
