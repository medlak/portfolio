// Select menu icon and navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle menu visibility on click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));

      let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
  //REMOVE THE MENU BUTTON AND THE NAVBAR AFTER CHOSSING ONE OF THE PAGES
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});
