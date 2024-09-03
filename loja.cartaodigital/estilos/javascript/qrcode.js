// https://cartaovirtualdevisita.com.br/pix/qrcode.html?qrcode=
const valorQRCode = new URLSearchParams(window.location.search);
const mostrarQRCode = document.querySelector("#mostrarQRCode")
const valorQRCodeURL = valorQRCode.get('qrcode');
let qrcodemostrar = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${valorQRCodeURL}`;
mostrarQRCode.innerHTML = ` <div class="spanep"><p><span class="roxo">Link:</span> ${valorQRCodeURL}</p></div>
                            <div><img id="qrcode"src="${qrcodemostrar}" alt=""></div>
                          `



/* Código que está no IMAGEMAPPRO

document.getElementById("rect-9534").addEventListener("click", function() {     var textToCopy = "09307645000146";     navigator.clipboard.writeText(textToCopy)     .then(function() {         alert("PIX copiado com sucesso!");     })     .catch(function(err) {         console.error("Erro ao copiar: ", err);     });  });

*/