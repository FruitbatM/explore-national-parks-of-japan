// Send email function (adapted from Code Institute walkthrough project)

function sendMail(contactForm) {
    emailjs.send('japan', 'template_29fdtiv', {
        'from_name': contactForm.fullname.value,
        'from_email': contactForm.email.value,
        'subject': contactForm.subject.value,
        'message': contactForm.message.value
    })
    .then(
        function() {
          // Sweet Alert custom pop-up alert if success
          Swal.fire(
            'Thank you for getting in touch!',
            'We will get back to you shortly.',
            'success'
          );
        },
        // Sweet Alert custom pop-up alert if fail
        function() {
          Swal.fire(
            'Ooops...',
            'Something went wrong.',
            'error'
            );
          });

    // Clear the form
    document.getElementById('contact-form').reset();
    return false;
}