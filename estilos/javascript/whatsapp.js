const valorChavePix = new URLSearchParams(window.location.search);
const valorPixURL = valorChavePix.get('whats');
const retornolink = document.querySelector("#retornolink")

retornolink.innerHTML=(valorPixURL)


function  gerarLinkwhats (span = valorPixURL) {
    let telefone = Number(window.document.getElementById("tel").value)
    let mensagem = String(window.document.getElementById("men").value)                                                                                                 
    window.open("https://wa.me/+55"+telefone+"?text="+mensagem+" - Segue o link do meu cartão - "+span, "_blank")
}