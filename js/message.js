const londolytaIcon = document.getElementById("londolyta-icon");
const messageContainer = document.getElementById("message-container");
let sectionVisible = false;

londolytaIcon.addEventListener("mouseenter", () => {
  messageContainer.style.display = "block";
});

londolytaIcon.addEventListener("mouseleave", () => {
  messageContainer.style.display = "none";
});

londolytaIcon.addEventListener("click", () => {
  if (sectionVisible) {
    aboutMeSection.style.opacity = "0";
    setTimeout(() => {
      aboutMeSection.style.display = "none";
    }, 500);
  } else {
    aboutMeSection.style.display = "block";
    setTimeout(() => {
      aboutMeSection.style.opacity = "1";
    }, 0);
  }
  sectionVisible = !sectionVisible;
});
