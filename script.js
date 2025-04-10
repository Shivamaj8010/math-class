// Toggle mobile nav menu
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.md:hidden'); // Select the mobile menu button
    const navLinks = document.querySelector('nav'); // Select the navigation links

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('hidden'); // Toggle the visibility of the nav links
    });
});

// Open Google Form on Enroll Now button click
document.addEventListener('DOMContentLoaded', function () {
    const enrollButton = document.getElementById('enroll-button'); // Select the Enroll Now button

    enrollButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSf6MV6CwZUKLsE6SFT8OPRwFaku8VfYiSSh4Ayb4BwRorIjlg/viewform', '_blank'); // Open the Google Form in a new tab
    });
});

// (Optional) Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('iframe'); // Select the iframe for the Google Form
    const submitButton = document.querySelector('button[type="submit"]'); // Select the submit button

    if (submitButton) {
        submitButton.addEventListener('click', function (e) {
            const name = form.querySelector('input[placeholder="Name"]') ? form.querySelector('input[placeholder="Name"]').value.trim() : '';
            const email = form.querySelector('input[placeholder="Email"]') ? form.querySelector('input[placeholder="Email"]').value.trim() : '';
            const message = form.querySelector('textarea') ? form.querySelector('textarea').value.trim() : '';

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                e.preventDefault(); // prevent form submission
            }
        });
    }
});