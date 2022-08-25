let btn = document.querySelector(".showcase__menuBtn");
let menuLinks = document.querySelector(".showcase__menu");

setInterval(() => {
    if (screen.width > 1080) {
        menuLinks.classList.remove("list_display")
    }

}, 200);

btn.addEventListener("click", () => {

    menuLinks.classList.toggle("list_display");
});

