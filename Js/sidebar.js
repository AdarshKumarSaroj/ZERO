
const list = document.querySelectorAll('.list');
let storedActive = null; 


function activeLink() {

    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    storedActive = this;
}


function hoverHandler() {
    if (storedActive) {
        storedActive.classList.remove('active');
    }
}

list.forEach((item) => item.addEventListener('click', activeLink));
list.forEach((item) => item.addEventListener('mouseenter', hoverHandler));
list.forEach((item) => item.addEventListener('mouseleave', () => storedActive.classList.add('active')));
