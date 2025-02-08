// const menu = document.getElementById('menu-bar');
// const menuBox = document.getElementById('menu-box');


const menuBar = document.getElementById("menu-bar");
const menuBox = document.getElementById("menu-box");

menuBar.addEventListener("click", () => {
    if (menuBox.classList.contains("h-0")) {
        menuBox.classList.remove("w-0", "h-0", "overflow-hidden");
        menuBox.classList.add("w-[200px]", "h-auto");
    } else {
        menuBox.classList.remove("w-[200px]", "h-auto");
        menuBox.classList.add("w-0", "h-0", "overflow-hidden");
    }
});