document.addEventListener('DOMContentLoaded', function() {
    const f1 = document.getElementsByName("field1");
    const f2 = document.getElementsByName("field2");
    const r = document.getElementById("result");
    const btn = document.querySelector('button');

    const reg = /\D/;

    function sum() {
        if(reg.test(f1[0].value) || reg.test(f2[0].value))
            r.textContent = 'Неверный формат';
        else {
            r.textContent = f1[0].value * f2[0].value; 
        }
    }
        
    btn.addEventListener('click', function () {
        console.log('bottom (Вычисление суммы) is Clicked');
        sum();
    });
});
