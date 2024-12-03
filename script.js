document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const firstname = document.getElementById("form_name").value;
      const lastname = document.getElementById("form_lastname").value;
      const email = document.getElementById("form_email").value;
      const comment = document.getElementById("form_message").value;

      const commentsContainer = document.getElementById("commentsContainer");
      const commentsSection = document.getElementById("commentsSection");
      const popupMessage = `
        <strong>Name:</strong> ${firstname} ${lastname}
        <br><strong>Email:</strong> ${email}
      `;

      document.getElementById("popup-message").innerHTML = popupMessage;

      const modal = new bootstrap.Modal(
        document.getElementById("thankYouModal")
      );
      const commentCard = document.createElement("div");
      commentCard.classList.add("card", "mb-3");
      commentCard.innerHTML = `
            <div class="card-body  text-start">
              <h6 class="card-title"><strong>Name:</strong> ${firstname} ${lastname}</h6>
             <div><strong>Comment:</strong> ${comment}</div>
             </div>
        `;

      commentsContainer.prepend(commentCard);
      modal.show();

      if (commentsContainer.children.length > 0) {
        commentsSection.style.display = "block";
      }

      document.getElementById("contact-form").reset();
    });
});
