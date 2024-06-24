// Change Header Background Function
function scrollHeader() {
  const header = document.getElementById("header");
  // When scroll greater than 50 viewport height, add the scroll-header class.
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Swiper Popular
var swiperPopular = new Swiper(".popular-container", {
  spaceBetween: 32,
  grabCurspr: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Value Accordion
const accordionItems = document.querySelectorAll(".value-accordion_item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value-accordion_header");

  // For Click event, onClick toggle item
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    // This If condiiton  for check if item opend close other opened items.
    toggleItem(item);
    if (openItem && openItem !== item) toggleItem(openItem);
  });
});

// For toggle item ( open & close).
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value-accordion_content");
  // This If condiiton  for check if it contains open class remove it else add it.
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// Scroll Section Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*="' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav-menu a[href*="' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Show Scroll UP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the scroll-up
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Dark Light Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain the current theme that the interface has by validating the dark-theme class.
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// Validate if the user previously chose a topic.
if (selectedTheme) {
  // This if condiiton for validation, I ask what the issue was to know if I activated or deactivated the Dark theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or Remove the dark icon theme.
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // For SAVE the theme and current icon that user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Scrollreveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(
  `.home-title, .popular-container, .subscribe-container, .footer-container`
);
sr.reveal(`.home-description, .footer-info`, { delay: 500 });
sr.reveal(`.home-search`, { delay: 600 });
sr.reveal(`.home-value`, { delay: 700 });
sr.reveal(`.home-images`, { delay: 800, origin: "bottom" });
sr.reveal(`.logos-img`, { interval: 100 });
sr.reveal(`.value-images, .contact-content`, { origin: "left" });
sr.reveal(`.value-content, .contact-images`, { origin: "right" });
