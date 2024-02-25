//on window event
window.onload = function () {
    let recoverUsername = localStorage.getItem("username");

    let valueField = document.querySelector(".showUsername");

    valueField.textContent = recoverUsername;
    localStorage.clear();

}

let flag = false;

// on focus event text area
function textValidation() {
    let areaValidation = document.getElementById('userText').value.toLowerCase().trim();

    if (areaValidation.includes('ai')) {
        flag = true;
        enableButtonDeEncript();
    } else if (areaValidation.includes('enter')) {
        flag = true;
        enableButtonDeEncript();
    } else if (areaValidation.includes('imes')) {
        flag = true;
        enableButtonDeEncript();
    } else if (areaValidation.includes('ober')) {
        flag = true;
        enableButtonDeEncript();
    } else if (areaValidation.includes('ufat')) {
        flag = true;
        enableButtonDeEncript();
    }

}

// Encript Message
function encription(evt) {
    let finalText = document.getElementById('userText').value.toLowerCase().trim();
    let form = document.getElementById('formButton');
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        alert(finalText);


    })

}


//De-Encript Messaage
function deEncription(event) {
    let finalText = document.getElementById('userText').value.toLowerCase().trim();
    let form = document.getElementById('formButton');
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        alert(finalText);
        cleanText();

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

//Enable buttons
function enableButtonDeEncript() {
    if (flag) {
        let buttonDeEncript = document.getElementById('deEncript');
        let buttonEncript = document.getElementById('encript');


        buttonDeEncript.removeAttribute('disabled');

        //animation hover
        buttonDeEncript.addEventListener("mouseover", ev =>
            document.querySelector('.deEncript').animate(
                [
                    {transform: 'scale(1.2)'},
                    {color: 'white'},
                    {fontweight: 'bold'},
                ],
                {
                    duration: 1000,
                    direction: "reverse",

                }
            )
        )

        //animatiino focus
        buttonDeEncript.addEventListener("focus", ev =>
            document.querySelector('.deEncript').animate(
                [
                    {transform: 'scale(1.2)'},
                    {color: 'white'},
                    {fontweight: 'bold'},
                ],
                {
                    duration: 1000,
                    direction: "reverse",

                }
            )
        )

        buttonEncript.setAttribute('disabled', "");
    }
}

function cleanText() {
document.getElementById('userText').value = '';
}

