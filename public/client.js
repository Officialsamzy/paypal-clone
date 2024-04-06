// client.js

document.querySelector('.form-login-btn').addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.querySelector('.form-login-input[name="email"]').value;
    const password = document.querySelector('.form-login-input[name="password"]').value;

    if (!email || !password) {
        alert('Email and password are required.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5500/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        });

        const data = await response.text();

        if (response.ok) {
            alert(data);
        } else {
            throw new Error(data);
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
        alert('Failed to send email.');
    }
});

// ... Other client-side code
