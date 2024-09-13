function mudouTamanho() {
    if (window.innerWidth >= 992) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
 }

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}


/* Fazer contador
        var counter1 = document.getElementById('counter1');
        var counter2 = document.getElementById('counter2');

        function increment(i, max, element){
        if(i > max) return;
        setTimeout(function(){
            element.innerText = Math.round(i);
            increment(i+(max/100), max, element);
        },10)
        }

        increment(0, 5000, counter1 );
        increment(0, 4990, counter2 );*/