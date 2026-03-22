function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}