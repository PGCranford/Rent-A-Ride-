async function loginFormHandler(event) {
    event.preventDefault();

    const renterName = document.querySelector('#renter-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (renterName && email && password) {

        const response = await fetch('/api/renter/login', {
            method: 'post',
            body: JSON.stringify({
                renterName,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/rental');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const renterName = document.querySelector('#renter-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (renterName && email && password) {
        const response = await fetch('/api/renter', {
            method: 'post',
            body: JSON.stringify({
                renterName,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/rental');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);