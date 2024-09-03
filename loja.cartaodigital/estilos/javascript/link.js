// https://cartaovirtualdevisita.com.br/link.html?link=
const valorChavePix = new URLSearchParams(window.location.search);
const copiarPix = document.querySelector("#copiarPix")
const mostrarPix = document.querySelector("#mostrarPix")
const valorPixURL = valorChavePix.get('link');
mostrarPix.innerHTML = `<div><span>Link: ${valorPixURL}</span></div>`
copiarPix.addEventListener("click", function() {
    navigator.clipboard.writeText(valorPixURL)
    .then(function() {
        alert(`LINK ${valorPixURL} COPIADO COM SUCESSO!`);
    })
    .catch(function(err) {
        console.error("Erro ao copiar: ", err);
    });
})


/* Código que está no IMAGEMAPPRO

document.getElementById("rect-9534").addEventListener("click", function() {     var textToCopy = "09307645000146";     navigator.clipboard.writeText(textToCopy)     .then(function() {         alert("PIX copiado com sucesso!");     })     .catch(function(err) {         console.error("Erro ao copiar: ", err);     });  });

*/

/* código que está no site da tuosa

document.getElementById("btn_copy").addEventListener("click", function() {
    var textToCopy = "32.326.083/0001-08";

    if (navigator.userAgent.match(/ipad|iphone/i)) {
        // Para dispositivos iOS (iPhone, iPad)
        var el = document.createElement("textarea");
        el.value = textToCopy;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        alert("CHAVE PIX COPIADA COM SUCESSO!");
    } else {
        // Para outros dispositivos móveis
        navigator.clipboard.writeText(textToCopy)
        .then(function() {
            alert("CHAVE PIX COPIADA COM SUCESSO!");
        })
        .catch(function(err) {
            console.error("Erro ao copiar: ", err);
        });
    }
});

*/