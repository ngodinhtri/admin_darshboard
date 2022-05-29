
const sideMenu = document.getElementById("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggle = document.getElementById("theme-toggle");

menuBtn.onclick = () => {
    sideMenu.dataset.expanded = "true";
}

closeBtn.onclick = () => {
    sideMenu.dataset.expanded = "false"
}

themeToggle.onclick = () => {
    if (document.body.dataset.darkTheme == "true") {
        document.body.dataset.darkTheme = "false"
    } else {
        document.body.dataset.darkTheme = "true"
    }

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
}