/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const sectionsCount = document.querySelectorAll("section").length;
let navBar = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// This function Check if the element in view port
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((section) => {
  navBar.innerHTML += `<li>${section.dataset.nav}</li>`;
});
// Add class 'active' to section when near top of viewport
document.addEventListener(
  "scroll",
  function () {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("your-active-class");
      } else {
        section.classList.remove("your-active-class");
      }
    });
  },
  {
    passive: true,
  }
);
// Scroll to anchor ID using scrollTO event
navBar.addEventListener(
  "click",
  function (e) {
    let value = e.target.innerHTML;
    sections.forEach((section) => {
      console.log(section.dataset.nav, value);
      if (section.dataset.nav == value) {
        window.scrollTo(section.offsetLeft, section.offsetTop);
      }
    });
  },
  {
    passive: true,
  }
);
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
