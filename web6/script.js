document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('select');
    const radio = document.getElementById("myradios");
    const check = document.getElementById('checks');
    radio.style.display = 'none';
    check.style.display = 'none';

    const num = document.querySelector('.kol');
    const r = document.querySelector('.cost');
    const radios = document.getElementsByName('rad1');
    const check1 = document.getElementsByName('check1');
    const reg = /\D/;

    const body = document.querySelector('body');

     num.addEventListener('change', function() {
      sum();
      });
    
      radio.addEventListener('change', function() {
        sum();
      });
      
      check.addEventListener('change', function() {
        sum();
      });

       select.addEventListener('change', function() {
        if (select.value == 'car') {
            radio.style.display = 'block';
            check.style.display = 'none';
            body.style.backgroundImage = "url('https://catherineasquithgallery.com/uploads/posts/2021-02/1614382526_62-p-mashini-na-svetlom-fone-73.jpg')";
            
        } else if (select.value == 'moto'){
            radio.style.display = 'none';
            check.style.display = 'block';
            body.style.backgroundImage = "url('https://w-dog.ru/wallpapers/0/98/332408938003767/yamaha-xt1200z-moto.jpg')";
            
        } else {
            radio.style.display = 'none';
            check.style.display = 'none';
            body.style.backgroundImage = "url('https://vashsport.com/wp-content/uploads/2021/04/pexels-adam-dubec-1595483-scaled.jpg')";

        }
        
        sum();
    });


    function sum() {
        if(reg.test(num.value))
            r.textContent = 'Неверный формат';
        else {
            if (select.value == 'car') {
                if (radios[0].checked) {
                    r.textContent = num.value * 5000000;
                  } else if (radios[1].checked) {
                    r.textContent = num.value * 4000000;
                  } else if (radios[2].checked) {
                    r.textContent = num.value * 3000000;
                  }

            } else if (select.value == 'moto'){
                if (check1[0].checked && check1[1].checked) {
                    r.textContent = num.value * 1700000;
                  } else if (check1[1].checked){
                    r.textContent = num.value * 700000;
                  } else if(check1[0].checked){
                    r.textContent = num.value * 1000000;
                  } else
                    r.textContent = num.value * 500000;

            } else {
                r.textContent = num.value * 50000;
            }       
        }
    }
});
