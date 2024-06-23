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
