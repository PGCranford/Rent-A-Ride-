async function logout() {
    const response = await fetch('/api/renter/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

console.log("button was clicked")

document.querySelector('#logout').addEventListener('click', logout);
