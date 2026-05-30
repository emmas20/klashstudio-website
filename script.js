function toggleMenu() {
  const navMenu = document.getElementById("navMenu");

  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formMessage = document.getElementById("formMessage");
    const formData = new FormData(bookingForm);

    const bookingData = {
      clientName: formData.get("clientName"),
      clientEmail: formData.get("clientEmail"),
      clientPhone: formData.get("clientPhone"),
      serviceName: formData.get("serviceName"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      depositName: formData.get("depositName"),
      allergies: formData.get("allergies"),
      wearsGlasses: formData.get("wearsGlasses"),
      wearsContacts: formData.get("wearsContacts"),
      notes: formData.get("notes"),
      consentAgreed: true,
      signature: formData.get("signature")
    };

    try {
      const response = await fetch("https://esargsyan.app.n8n.cloud/webhook/lashkstudio-booking-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        formMessage.textContent = "Your booking form has been submitted successfully 💕";
        bookingForm.reset();
      } else {
        formMessage.textContent = "Something went wrong. Please try again or contact LashKStudio.";
      }
    } catch (error) {
      formMessage.textContent = "There was an error submitting the form. Please try again.";
    }
  });
}