const btnPrev = document.querySelector('.cards-slider__btn-prev');
const btnNext = document.querySelector('.cards-slider__btn-next');

btnNext.addEventListener('click', () => {
    const slide4 = document.getElementById('slide4');
    slide4.classList.remove('cards-slider__item-unshowed');
    const slide1 = document.getElementById('slide1');
    slide1.classList.add('cards-slider__item-unshowed');
    btnPrev.classList.remove('cards-slider__btn-disabled');
    
    btnNext.classList.add('cards-slider__btn-disabled');
})
btnPrev.addEventListener('click', () => {
    const slide4 = document.getElementById('slide4');
    slide4.classList.add('cards-slider__item-unshowed');
    const slide1 = document.getElementById('slide1');
    slide1.classList.remove('cards-slider__item-unshowed');
    btnNext.classList.remove('cards-slider__btn-disabled');
    btnPrev.classList.add('cards-slider__btn-disabled');

})