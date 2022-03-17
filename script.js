const nav = document.querySelector(".main-nav");
const mobileButton = document.querySelector("#mobileButton");
const links = document.querySelector("#links");
const menulinks = document.querySelectorAll(".menulink");
const toTopButton = document.querySelector("#toTopButton");
let scrollPos; // variable to store scroll position when menu is opened
let scrollPosAlt; // variable to store scroll position when menu is opened for some other browsers

window.onscroll = () => {
  // checking if user scrolls the page to close the menu, if user scrolls more than 100px the menu will close
  // using more than 0px is to prevent menu closing by accidental little movement
  if (
    (document.body.scrollTop - scrollPosAlt > 100 &&
      !links.classList.contains("hideMenu")) ||
    (document.documentElement.scrollTop - scrollPos > 100 &&
      !links.classList.contains("hideMenu")) ||
    (document.body.scrollTop - scrollPosAlt < -100 &&
      !links.classList.contains("hideMenu")) ||
    (document.documentElement.scrollTop - scrollPos < -100 &&
      !links.classList.contains("hideMenu"))
  ) {
    links.classList.add("hideMenu");
  }

  // changing the top nav bar background color if page is scrolled
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    nav.classList.add("bg");
    toTopButton.style.visibility = "visible";
  } else {
    nav.classList.remove("bg");
    toTopButton.style.visibility = "hidden";
  }
};

const showMobileMenu = () => {
  // getting the position when mobilemenu is opened
  scrollPos = document.documentElement.scrollTop;
  scrollPosAlt = document.body.scrollTop;
  // toggling the menu visible/hidden;
  links.classList.toggle("hideMenu");
};

// basic eventlisteners for for buttons and links
mobileButton.addEventListener("click", showMobileMenu);
menulinks.forEach((link) => {
  link.addEventListener("click", showMobileMenu);
});
toTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  if (!links.classList.contains("hideMenu")) {
    showMobileMenu();
  }
});
