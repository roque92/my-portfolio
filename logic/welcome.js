//on window event
window.onload = function () {
    let recoverUsername = localStorage.getItem("username");

    let valueField = document.querySelector(".showUsername");

    valueField.textContent = recoverUsername;
    localStorage.clear();

    let buttonEncript = document.getElementById('encript');
    let buttonDeEncript = document.getElementById('deEncript');

    buttonEncript.onclick = encription;
    buttonDeEncript.onclick = deEncription;

}

let flag = false;

// on focus event text area
function textValidation() {
    let areaValidation = document.getElementById('userText').value.toLowerCase().trim();

    let specialCharacters = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/;
    let numbers = /[0-9]/;


    if (areaValidation.includes('ai') || areaValidation.includes('enter') || areaValidation.includes('imes') || areaValidation.includes('ober') ||
        areaValidation.includes('ufat')) {
        flag = true;
        enableButtonDeEncript();
    } else if (numbers.test(areaValidation) || specialCharacters.test(areaValidation)) {
        //create alert
        cleanText();
    } else {
        encriptButton();
    }
}

// Encript Message
function encription() {
    // get the text on the textArea
    let text = document.getElementById('userText').value.toLowerCase().trim();
    let finalText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            finalText += 'ai';
        } else if (text[i] === 'e') {
            finalText += 'enter';
        } else if (text[i] === 'i') {
            finalText += 'imes';
        } else if (text[i] === 'o') {
            finalText += 'ober';
        } else if (text[i] === 'u') {
            finalText += 'ufat';
        } else {
            finalText += text[i];
        }
    }

    alert(finalText);
    cleanText();
}


//De-Encript Messaage
function deEncription() {
    let text = document.getElementById('userText').value.toLowerCase().trim();
    let finalText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            finalText += 'a';
            i += 1;
        } else if (text[i] === 'e') {
            finalText += 'e';
            i += 4;
        } else if (text[i] === 'i') {
            finalText += 'i';
            i += 3;
        } else if (text[i] === 'o') {
            finalText += 'o';
            i += 3;
        } else if (text[i] === 'u') {
            finalText += 'u';
            i += 3;
        } else {
            finalText += text[i];
        }
    }
    alert(finalText);
    cleanText();

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
    let interval = setTimeout(moveScreenUp, 200);

    window.scrollBy({
        top: 0,
        behavior: "smooth",

    });

    clearTimeout(interval);


}

//Enable button
function enableButtonDeEncript() {
    if (flag) {
        let buttonDeEncript = document.getElementById('deEncript');
        let buttonEncript = document.getElementById('encript');


        buttonDeEncript.removeAttribute('disabled');

        //hover animation
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

        //fcus animation
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

        buttonEncript.setAttribute('disabled', "true");
    }
}

function encriptButton() {
    let buttonEncript = document.getElementById('encript');

    //hover animation
    buttonEncript.addEventListener("mouseover", ev =>
        document.querySelector('.encript').animate(
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

    //focus animation
    buttonEncript.addEventListener("focus", ev =>
        document.querySelector('.encript').animate(
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

}

function cleanText() {
    document.getElementById('userText').value = '';
}

