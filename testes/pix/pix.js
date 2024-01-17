// https://cartaovirtualdevisita.com.br/pix.html?pix=
const valorChavePix = new URLSearchParams(window.location.search);
const copiarPix = document.querySelector("#copiarPix")
const mostrarPix = document.querySelector("#mostrarPix")
const valorPixURL = valorChavePix.get('pix');
mostrarPix.innerHTML = `Chave Pix: ${valorPixURL}`
copiarPix.addEventListener("click", (evt)=>{
    navigator.clipboard.writeText(valorPixURL)
    alert(`Chave Pix ${valorPixURL} copiada com sucesso!`)
})


/* Código que está no IMAGEMAPPRO

document.getElementById("rect-9534").addEventListener("click", function() {     var textToCopy = "09307645000146";     navigator.clipboard.writeText(textToCopy)     .then(function() {         alert("PIX copiado com sucesso!");     })     .catch(function(err) {         console.error("Erro ao copiar: ", err);     });  });

*/