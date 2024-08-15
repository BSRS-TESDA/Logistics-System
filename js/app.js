const parent = document.querySelectorAll('.js-input');

window.addEventListener('pageshow', () => {
    parent.forEach(e => {
        e.addEventListener('focus', (e) => {
            focusState(e.target);
        });
        e.addEventListener('blur', (e) => {
            blurState(e.target);
        });

        focusState(e);
        blurState(e);
    });     
});

function focusState(e){
    parentEl = e.parentElement;
    parentEl.classList.add('focus');
}

function blurState(e){
    parentEl = e.parentElement;
    if(!e.value){
        parentEl.classList.remove('focus');
    }
}

const passInput = document.querySelector('.js-pass');
const showHidePass = document.querySelector('#show-hide-pass');

showHidePass.addEventListener('click', () => {
    if(passInput.type === "password"){
        passInput.type = "text";
        showHidePass.src = "assets/hidePass.svg";
    } else {
        passInput.type = "password";
        showHidePass.src = "assets/showPass.svg";
    }
});

const loginButton = document.querySelector('#login-button');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

// Predefined username and password
const validUsername = "PP Namias";
const validPassword = "12345";

loginButton.addEventListener('click', () => {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if(enteredUsername === validUsername && enteredPassword === validPassword) {
        window.location.href = "./employee-management-frontend/src/index.html";
    } else {
        errorMessage.style.display = "block";
    }
});
