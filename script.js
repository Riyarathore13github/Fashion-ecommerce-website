/*Validation for contact page */
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var address = document.getElementById("address").value.trim();
    var message = document.getElementById("message").value.trim();

    var phonePattern = /^\d{10,}$/; // At least 10 digits
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (minimum 10 digits).");
      event.preventDefault();
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    } else {
      // All validations passed, display the modal
      var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
      });
      myModal.show();
      
      // Clear the form fields
      document.getElementById("contactForm").reset();
      
      event.preventDefault(); // Prevent form submission
    }
  });
  