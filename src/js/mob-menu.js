const mobList = document.querySelector('.mob-menu');
const mobContainer = document.querySelector('.mob-menu-container')
const content = document.querySelector('.content');
const hero = document.querySelector('.hero-wrap');

const listMarkup = `  
                <ul class="header-mob-list">
                  <li class="header-mob-item">
                    <a href="#" class="header-mob-link">Home</a>
                  </li>
                  <li class="header-mob-item">
                    <a href="#" class="header-mob-link"
                      >Car stickers</a
                    >
                  </li>
                  <li class="header-mob-item">
                    <a href="#" class="header-mob-link"
                      >Car detailing</a
                    >
                  </li>
                  <li class="header-mob-item">
                    <a href="#" class="header-mob-link">Gallery</a>
                  </li>
                </ul>`;

mobContainer.insertAdjacentHTML('beforeend', listMarkup);

const openMenu = document.querySelector('.header-svg');
const closeMenu = document.querySelector('.closeBtn');

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    content.classList.toggle('no-skroll');
    document.body.classList.toggle('no-skroll');

    mobList.classList.toggle('is-hidden');
}

