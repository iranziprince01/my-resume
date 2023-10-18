const toggleButton = document.getElementById("toggleContactInfo");
const contactInfoSection = document.querySelector(".contact-info");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
  // Toggle the visibility of the "Contact Info" section
  if (
    contactInfoSection.style.display === "none" ||
    contactInfoSection.style.display === ""
  ) {
    contactInfoSection.style.display = "block";
  } else {
    contactInfoSection.style.display = "none";
  }
});
