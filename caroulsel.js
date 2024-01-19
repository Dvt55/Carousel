(function() {
    let cont = 1;
    let btn1 = document.getElementById('radio1');
    let btn2 = document.getElementById('radio2');
    let btn3 = document.getElementById('radio3');

    document.getElementById('radio1').checked = true;

    setInterval(prox_img, 5000);

    function prox_img() {
        cont++;

        if (cont > 3) {
            cont = 1;
        }

        btn1.removeEventListener('click', () => {
            cont = parseInt(this.value);
        })
        btn2.removeEventListener('click', () => {
            cont = parseInt(this.value);
        })
        btn3.removeEventListener('click', () => {
            cont = parseInt(this.value);
        })
        

        btn1.addEventListener('click', () => {
            cont = 1;
        })
        btn2.addEventListener('click', () => {
            cont = 2;
        })
        btn3.addEventListener('click', () => {
            cont = 3;
        })

        document.getElementById('radio' + cont).checked = true;
    }

})();