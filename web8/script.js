document.addEventListener('DOMContentLoaded', function() {
    const m_button = document.querySelector('button');
    const form = document.querySelector('form');
    const main = document.querySelector('header');
    form.style.display = 'none';
    m_button.addEventListener('click', function (){
        console.log('main_buttom is clicked');
        main.style.display = 'none';
        form.style.display = 'block';
    });
});
