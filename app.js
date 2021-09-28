const hamburger = document.querySelector("#header .hamburger");
const mobile_menu = document.querySelector("#header nav ul");
const menu_item = document.querySelectorAll("#header nav ul li a");
const header = document.querySelector("#header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "rgba(30,30,30)";
    } else {
        header.style.backgroundColor = "rgba(30, 30, 30, 0.25)";
    }
});
