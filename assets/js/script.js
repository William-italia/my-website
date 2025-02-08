// const menu = document.getElementById('menu-bar');
// const menuBox = document.getElementById('menu-box');


const menuBar = document.getElementById("menu-bar");
const menuBox = document.getElementById("menu-box");

menuBar.addEventListener("click", () => {
    if (menuBox.classList.contains("overflow-hidden")) {
        menuBox.classList.remove("w-0", "overflow-hidden");
        menuBox.classList.add("w-[200px]");
    } else {
        menuBox.classList.remove("w-[200px]");
        menuBox.classList.add("w-0", "overflow-hidden");
    }
});