//on window event
window.onload = function () {

    //recovver and use the username from index
    let recoverUsername = localStorage.getItem("username");
    let valueField = document.querySelector(".showUsername");
    valueField.textContent = recoverUsername;
    localStorage.clear();

    // button events
    let buttonEncript = document.getElementById('encript');
    let buttonDeEncript = document.getElementById('deEncript');
    let signOutuser = document.getElementById('signout');
    let copy = document.getElementById('copyButton');

    buttonEncript.onclick = encription;
    buttonDeEncript.onclick = deEncription;
    signOutuser.onclick = signOut;
    copy.onclick = copyText;

    moveScreenUp();

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
        enableAlert();
        cleanText();
    } else {
        flag = false;
        encriptButton();

    }
}

// Encript Message
function encription() {
    // get the text on the textArea
    let text = document.getElementById('userText').value.toLowerCase().trim();
    let finalText = "";
    let alertMessage = document.querySelector('.alert');
    let span = document.querySelector('.closebtnAlert');

    let newMessage = '';

    if (text === '') {
        alertMessage = 'Enter a text to encript';
        span = 'x';
        newMessage = `<span class="closebtnAlert" onclick="closeAlert(this)">${span}</span>${alertMessage}`;

        document.querySelector('.alert').innerHTML = newMessage;
        enableAlert();

    } else {
        hideImg();
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
            document.getElementById('convertedText').value = finalText;
            moveScreenDown();
        }
        // send the text to the final location
    }


    cleanText();
}


//De-Encript Messaage
function deEncription() {
    let text = document.getElementById('userText').value.toLowerCase().trim();
    let finalText = "";
    hideImg();
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
        // send the text to the final location
        document.getElementById('convertedText').value = finalText;
        moveScreenDown();
        flag = false;
    }
    cleanText();

}

//copyText
function copyText() {
    let text = document.getElementById('convertedText').value.trim();
    let newMessage = '';

    if (text === '') {
        alertMessage = 'Enter a text to encript';
        span = 'x';
        newMessage = `<span class="closebtnAlert" onclick="closeAlert(this)">${span}</span>${alertMessage}`;

        document.querySelector('.alert').innerHTML = newMessage;
        enableAlert();
        moveScreenUp();
    } else {
        navigator.clipboard.writeText(text);
        showImg()
        cleanText();
        cleanConvertedText();
        moveScreenUp();
    }
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
        top: -window.innerHeight,
        behavior: "smooth",

    });

    clearTimeout(interval);


}

//Enable button
function enableButtonDeEncript() {
    let buttonDeEncript = document.getElementById('deEncript');
    let buttonEncript = document.getElementById('encript');

    if (flag) {

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

        //focus animation
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
    let buttonDeEncript = document.getElementById('deEncript');

    buttonEncript.removeAttribute('disabled');
    buttonDeEncript.setAttribute('disabled', "true");

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

function cleanConvertedText() {
    document.getElementById('convertedText').value = '';
}

function cleanAlert() {
    let alertMessage = document.querySelector('.alert');
    let span = document.querySelector('.closebtnAlert');

    let newMessage = '';

    alertMessage = 'Warning! Number and Special Characters are not allowed.';
    span = 'x';

    newMessage = `<span class="closebtnAlert" onclick="closeAlert(this)">${span}</span>${alertMessage}`;

    document.querySelector('.alert').innerHTML = newMessage;

}

function enableAlert() {
    let ele = document.getElementById('alert');

    ele.style.padding = '20px';
    ele.style.marginBottom = '15px';
    ele.style.opacity = '1';

}

function closeAlert(ele) {

    ele.parentElement.style.opacity = '0';
    ele.parentElement.style.padding = '0';
    ele.parentElement.style.marginBottom = '0';

    cleanAlert();
}

function signOut() {
    window.location.href = "../index.html";

}

function hideImg() {
    let img = document.getElementById('imgContainer');

    img.style.display = 'none';

}

function showImg() {
    let img = document.getElementById('imgContainer');

    img.style.display = 'flex';

}