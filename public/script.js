function checkLoyaltyPoints() {
    const phone = document.getElementById('phone').value;
    const validPhone = '173527250';

    if (phone === validPhone) {
        window.location.href = 'RegistrationPage.html';
    } else {
        alert('Invalid phone number');
    }
}

function submitDetails() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const email = document.getElementById('email').value;

    if (name && birthday && email) {
        localStorage.setItem('name', name);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('email', email);
        window.location.href = 'DisplayPage.html';
    } else {
        alert('Please fill in all fields');
    }
}

window.onload = function() {
    const phone = '+60173527250';  // Assuming phone number is static as per Page 1
    const name = localStorage.getItem('name');
    const birthday = localStorage.getItem('birthday');
    const email = localStorage.getItem('email');

    document.getElementById('details').innerHTML = `
        <strong>Phone Number:</strong> ${phone}<br>
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Birthday:</strong> ${birthday}
    `;
}


function goBack() {
    window.location.href = 'RegistrationPage.html'; // Adjust the URL as needed
}

function goDone() {
    window.location.href = 'index.html'; // Adjust the URL as needed
}