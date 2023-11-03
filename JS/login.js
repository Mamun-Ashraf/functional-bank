document.getElementById('btn-submit').addEventListener('click', function () {
    const emailInputField = document.getElementById('user-email');
    const email = emailInputField.value;
    const passwordInputField = document.getElementById('user-password');
    const password = passwordInputField.value;
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui password vule gesos!! Toke ami tejjo sontan ghoshona korlam');
    }
})