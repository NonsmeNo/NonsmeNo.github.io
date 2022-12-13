document.addEventListener('DOMContentLoaded', function() {

    const m_button = document.querySelector('button');
    const form = document.querySelector('form');
    const main = document.querySelector('section');

    let inputs = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea');
    const inputCheckbox = document.querySelector('.сheckbox');

    

    form.style.display = 'none';
    m_button.addEventListener('click', function (){
        console.log('main_buttom is clicked');
        main.style.display = 'none';
        form.style.display = 'block';
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let block = document.createElement('div');
        block.classList.add('block'); 

        if (inputs[0].value == "") {
            block.style.background = "rgb(221, 67, 67)";
            block.innerText = "Введите пожалуйста ваше имя";
        } else if (inputs[1].value == "") {
            block.style.background = "rgb(221, 67, 67)";
            block.innerText = "Введите пожалуйста ваш E-mail";
        } else if (textarea.value == "") {
            block.style.background = "rgb(221, 67, 67)";
            block.innerText = "Текст отзыва не может быть пустым";
        } else if (!inputCheckbox.checked) {
            block.style.background = "rgb(221, 67, 67)";
            block.innerText = "Вы не согласились с политикой обработки персональных данных";
            document.body.appendChild(block);
            setTimeout ( function() {
                block.remove();
                },
                2000
            );
        } else {
            fetch('https://api.slapform.com/k6boe3mx8', {
                method: 'POST',
                body: JSON.stringify({ // The data you want submitted and emailed to you
                name: inputs[0].value,
                email: inputs[1].value,
                message: textarea.value
            })
            })
            .then(function (response) { // This function runs only on success
                block.style.background = "rgb(21, 216, 109)";
                block.innerText = "Форма отправлена";
                console.log('Success!', response);
            

            })
            .catch(function (response) { // This function runs only on error
            console.log('Fail!', response);
            block.innerText = "Ошибка отправки формы";
            });

            
        }
        document.body.appendChild(block);
            setTimeout ( function() {
                block.remove();
                },
                2000
            );
    });
});
