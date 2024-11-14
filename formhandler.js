// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Save form data to local storage for persistence
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Alert the user and log form data to the console
    alert('Your information has been saved!');
    console.log('Form Data:', formData); // Output the form data in the console for debugging

    // Clear the form after submission
    document.getElementById('contactForm').reset();
});

// Form Reset Handling
document.getElementById('contactForm').addEventListener('reset', function () {
    // Clear data from local storage
    localStorage.removeItem('contactFormData');
    alert('All input has been cleared.');
});
