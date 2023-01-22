document.addEventListener('DOMContentLoaded', function() {
    let change = 0;
    const elem =  document.querySelector('.modal');
    const but1 =  document.querySelector('#but1');
    const but2 =  document.querySelector('#but2');
    let startDate = Date.now();

    const modCont = document.querySelector('.modal_content');
    modCont.style.display = 'none';

    but1.addEventListener('click', function () {
        startDate = Date.now();
        but1.style.display = 'none';
        requestAnimationFrame(open);
    });

    but2.addEventListener('click', function () {
        startDate = Date.now();
        modCont.style.display = 'none';
        requestAnimationFrame(close);
    });

    function open() {

        let timeDirection = Date.now() - startDate;
        change += 50;
        elem.style.width = change + "px";
        elem.style.height = change + "px";
        if (timeDirection < 100)
        window.requestAnimationFrame(open);
        else 
            modCont.style.display = 'block';

    }

    function close() {
        timeDirection = Date.now() - startDate;
        change -= 50;
        elem.style.width = change + "px";
        elem.style.height = change + "px";
        if (timeDirection < 100)
            window.requestAnimationFrame(close);
        else 
            but1.style.display = 'block';
   
    }
});
