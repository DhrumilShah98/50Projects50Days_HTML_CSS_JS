const search = document.querySelector('.search');
const input = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');


searchBtn.addEventListener('click', () => {
    // Way 1
    // (search.classList.contains('active')) ?
    //     search.classList.remove('active') :
    //     search.classList.add('active');

    // Way 2
    search.classList.toggle('active');
    input.focus();
});