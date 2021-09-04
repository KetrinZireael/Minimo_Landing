function toogleMenu() {
    const button = document.querySelector('#btn-menu');
    const menu = document.querySelector('#list-menu');

    button.classList.toggle('active');
    menu.classList.toggle('active');
}