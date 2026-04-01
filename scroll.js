const indicator = document.getElementById('scroll-indicator');

window.addEventListener('scroll', () => {
    const fadeEnd = 200;
    let opacity = 1 - (window.scrollY / fadeEnd);
    opacity = Math.max(0, Math.min(1, opacity));
    indicator.style.opacity = opacity;
});