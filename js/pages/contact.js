const contactForm = document.querySelector("#contact-form");
const formSuccess = document.querySelector(".form-success");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const subject = contactForm.subject.value;
  const msg = contactForm.message.value;
  contactForm.style.display = "none";
  formSuccess.style.display = "flex";
  formSuccess.innerHTML = `
  <div class="success-icon"> &#10003; </div>
  <h3 class="form-success-p">Thank you ${name} for your feedback!</h3>
  <p>We will get back to you as soon as we can on the email you provided (${email})</p>
  <p  class="form-success-p">A summary is provided below:</p>
  <div>
  <p class="form-success-p">Subject:</p>
  <p>${subject}</p>
  </div>
  <div>
  <p class="form-success-p">Message:</p>
  <p>${msg}</p>
  </div>
  <div class="flex-row form-success-cta-container">
  <a href="/index.html" class="cta form-success-cta">Home</a>
  <a href="/articles.html" class="cta form-success-cta">All Articles</a>
  </div>
  `;
});
