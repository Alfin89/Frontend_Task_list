const menuItems = document.querySelectorAll('.side-nav ul li')

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});