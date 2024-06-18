// Change Header Background Function
function scrollHeader() {
  const header = document.getElementById("header");
  // When scroll greater than 50 viewport height, add the scroll-header class.
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
