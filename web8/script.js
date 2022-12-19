document.addEventListener('DOMContentLoaded', function() {

    const m_button = document.querySelector('button');
    const form = document.querySelector('form');
    const main = document.querySelector('section');

    let inputs = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea');
    const inputCheckbox = document.querySelector('.сheckbox');
    
    form.style.display = 'none';
    store();
    window.addEventListener('popstate', () => {
        form.style.display = 'none'; 
        main.style.display = 'block';
      });
    

      m_button.addEventListener('click', function (){
        history.pushState(null, null, '/form');
        main.style.display = 'none';
        form.style.display = 'block';
    });

    inputs[0].addEventListener('change', function() {
        localStorage.setItem('name', inputs[0].value);
        });

    inputs[1].addEventListener('change', function() {
        localStorage.setItem('E-mail', inputs[1].value);
        });

    inputs[2].addEventListener('change', function() {ы
        localStorage.setItem('text', textarea.value);
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
            block.style.background = "rgb(255,204,0)";
            block.innerText = "Подождите, форма отправляется";

            document.body.appendChild(block);
            setTimeout ( function() {
                block.remove();
                },
                3000
            );
            fetch('https://api.slapform.com/Aej7MSCv7', {
                method: 'POST',
                body: JSON.stringify({ // The data you want submitted and emailed to you
                name: inputs[0].value,
                email: inputs[1].value,
                message: textarea.value
                }), 
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            })
            .then(function (response) { // This function runs only on success
                block.style.background = "rgb(21, 216, 109)";
                block.innerText = "Форма отправлена";
                console.log('Success!', response);
            

            })
            .catch(function (response) { // This function runs only on error
                console.log('Fail!', response);
              });
                 
        }

        document.body.appendChild(block);
            setTimeout ( function() {
                block.remove();
                },
                3000
            );
    });

    function store() {
        inputs[0].value = localStorage.getItem('name');
        inputs[1].value = localStorage.getItem('E-mail');
        textarea.value = localStorage.getItem('E-mail');
        }

});
