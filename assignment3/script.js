// Image Gallery
const galleryImage = document.getElementById("gallery-image");
const nextButton = document.getElementById("next-image");

const images = [
    { src: "images/coffee1.jpg", alt: "A cup of coffee" },
    { src: "images/coffee2.jpg", alt: "Coffee and conversation" },
    { src: "images/coffee3.jpg", alt: "A relaxing coffee break" }
];

let currentImage = 0;

if (nextButton && galleryImage) {
    nextButton.addEventListener("click", function () {
        currentImage = (currentImage + 1) % images.length;
        galleryImage.src = images[currentImage].src;
        galleryImage.alt = images[currentImage].alt;
    });
}


// Contact Form Validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
        } else if (!email.includes("@")) {
            formMessage.textContent = "Please enter a valid email.";
        } else {
            formMessage.textContent = "Thank you! Your message was sent.";
            contactForm.reset();
        }
    });
}


// FAQ
const faqButton = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

if (faqButton && faqAnswer) {
    faqButton.addEventListener("click", function () {
        const isHidden = faqAnswer.hidden;
        faqAnswer.hidden = !isHidden;
        faqButton.setAttribute("aria-expanded", isHidden);
    });
}
