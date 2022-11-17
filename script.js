const buttonMenu = document.querySelector("[data-menu]");
const sidebar = document.querySelector("[data-sidebar]");

buttonMenu.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--inactive");
})