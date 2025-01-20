const form = document.querySelector("form");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput")

function validateEmail(emailValue) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(emailValue)) {
        alert("Email invalido.");
        return false;
    }
    return true;
}

function validatePassword(passwordValue) {
    if (passwordValue.length < 6) {
        alert("Senha com menos de 6 caracteres.")
        return false;
    }
    return true;
}

form.addEventListener('submit', (e) => {

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const isEmailValid = validateEmail(emailValue);
    const isPasswordValid = validatePassword(passwordValue);

    if (!isEmailValid || !isPasswordValid) {
        e.preventDefault();
        return;
    }

    alert('Validações feitas com sucesso! Entrou no sistema!');
})