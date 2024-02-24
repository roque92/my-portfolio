window.onload = function () {
    let recoverUsername = localStorage.getItem("username");

    let valueField = document.querySelector(".showUsername");

    valueField.textContent = recoverUsername;
    localStorage.clear();



}
// Encript Message
function encript(event) {
    let finalText = document.getElementById("userText").value;
    let buttons = document.getElementById("formButton")
    let secondarySection = document.getElementById("secondarySection");
    let body = document.getElementById("welcomeBody");

    if (finalText ===""){
        //create alert
    } else {
        //only if the
        buttons.addEventListener("submit",function (e) {
            e.preventDefault();
            secondarySection.style.opacity = '1';
            secondarySection.style.width = '86vw'
            secondarySection.style.height = '95vh'
            moveScreenDown();

        })
    }




}

//De-Encript Messaage
function deEncript(event) {
    let finalText = document.getElementById("userText").value;
    let buttons = document.getElementById("formButton")

    buttons.addEventListener("submit",function (e) {
        e.preventDefault();
        alert(finalText)
        moveScreenUp();
    })

}

//pageScrollDown
function moveScreenDown() {
    let interval = setTimeout(moveScreenDown, 200);

    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",

    });

    clearTimeout(interval);

}

//scrollPageUp
function moveScreenUp() {
    let interval = setTimeout(moveScreenDown, 200);

    window.scrollBy({
        top: 0,
        behavior: "smooth",

    });

    clearTimeout(interval);


}