document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const firstname = document.getElementById("form_name").value;
      const lastname = document.getElementById("form_lastname").value;
      const email = document.getElementById("form_email").value;

      const popupMessage = `
        <strong>Name:</strong> ${firstname} ${lastname}
        <br><strong>Email:</strong> ${email}
      `;

      document.getElementById("popup-message").innerHTML = popupMessage;

      const modal = new bootstrap.Modal(
        document.getElementById("thankYouModal")
      );
      modal.show();

      document.getElementById("contact-form").reset();
    });
});
