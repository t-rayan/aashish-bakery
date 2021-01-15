const menuBtn = document.querySelector("#mobile_menu");
const mainMenu = document.querySelector(".main_menu");
const navLinks = mainMenu.querySelectorAll("a");

export default function mobileMenu() {
  openMenu();
  closeMenu();
}

// function to open mobile menu
function openMenu() {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mainMenu.classList.toggle("active");
  });
}

// function to close main menu when click on navlinks
function closeMenu() {
  navLinks.forEach((element) => {
    element.addEventListener("click", () => {
      mainMenu.classList.toggle("active");
      menuBtn.classList.toggle("is-active");
    });
  });
}
