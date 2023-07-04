const btnFirst = document.getElementById('first-btn');
const btnSecond = document.getElementById('second-btn');

const listFirst = document.getElementById('list1');
const listSecond = document.getElementById('list2');

btnSecond.addEventListener('click', () => {
    btnFirst.classList.remove('services-btn__active');
    btnSecond.classList.add('services-btn__active');
    listFirst.classList.add('services-list__unshowed');
    listSecond.classList.remove('services-list__unshowed');
})
btnFirst.addEventListener('click', () => {
    btnFirst.classList.add('services-btn__active');
    btnSecond.classList.remove('services-btn__active');
    listFirst.classList.remove('services-list__unshowed');
    listSecond.classList.add('services-list__unshowed');
})
