document.addEventListener("DOMContentLoaded", function() {

    const updatesContainer = document.getElementById("updates-container");
    updates.forEach(update => {
        const updateElement = document.createElement("p");
        updateElement.textContent = update;
        updatesContainer.appendChild(updateElement);
    });

    // Form submission handling
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message!");
        contactForm.reset();
    });
});
