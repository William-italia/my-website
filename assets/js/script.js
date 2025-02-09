// const menu = document.getElementById('menu-bar');
// const menuBox = document.getElementById('menu-box');

const body = document.body;
const boxTheme = document.getElementById("box-theme");
const menuBar = document.getElementById("menu-bar");
const menuBox = document.getElementById("menu-box");
const box = document.getElementById('box');

menuBar.addEventListener("click", () => {
    if (menuBox.classList.contains("overflow-hidden")) {
        menuBox.classList.remove("w-0", "overflow-hidden");
        menuBox.classList.add("w-[200px]");
    } else {
        menuBox.classList.remove("w-[200px]");
        menuBox.classList.add("w-0", "overflow-hidden");
    }
});

boxTheme.addEventListener('click', (e) => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark')) {
        body.classList.remove('bg-[#F0E7DB]');
        body.classList.add('bg-[#202023]');
    } else {
        body.classList.remove('bg-[#202023]');
        body.classList.add('bg-[#F0E7DB]');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // box.classList.remove("hidden");
    box.classList.remove("opacity-0", "top-[600px]");
    // box.classList.add('show');
});

