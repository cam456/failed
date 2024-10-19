console.log("test");
function boutonHamburger() {
    var list = document.getElementsByClassName("nav__list")[0];
    if (window.matchMedia("(max-width:1400px)").matches) {
        list.classList.toggle('list-active');
    } else {
        list.classList.remove('list-active');
    }
}

function TailleFenetre() {
    var list = document.getElementsByClassName("nav__list")[0];
    if (window.innerWidth >= 1400) {
        list.classList.remove('list-active');
    } else {
        list.classList.remove('list-active');
    }
}

window.addEventListener('resize', TailleFenetre);