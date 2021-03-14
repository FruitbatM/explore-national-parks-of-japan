// Send email function (adapted from Code Institute walkthrough project)

function sendMail(contactForm) {
    emailjs.send("japan", "template_29fdtiv", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );

    // Clear the form
    document.getElementById('contact-form').reset();
    return false;
}