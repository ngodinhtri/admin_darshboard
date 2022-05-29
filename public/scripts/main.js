const sideMenu = document.getElementById("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.onclick = () => {
    sideMenu.dataset.expanded = "true";
}

closeBtn.onclick = () => {
     sideMenu.dataset.expanded = "false"
}