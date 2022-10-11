function sum() {
    let f = document.getElementsByName("field");
    let r = document.getElementById("result");
        r.innerHTML = f[0].value * f[1].value;    
       return false;
}

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log('bottom (Вычисление суммы) is Clicked');
    this.classList.add("active");
});



