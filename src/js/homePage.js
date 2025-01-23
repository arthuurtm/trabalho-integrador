document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('hide-menu');
    menuBtn.addEventListener('click', updateMenuState);

    function updateMenuState() {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.classList.add('minimized');
        } else {
            menu.classList.add('active');
            menu.classList.remove('minimized');
        }
    }
});