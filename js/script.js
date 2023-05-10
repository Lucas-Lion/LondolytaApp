const londolytaIcon = document.getElementById("londolyta-icon");
const aboutMeSection = document.getElementById("about-me");
let sectionVisible = false;

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
