document.getElementById("rect-1274").addEventListener("click", function() {
    var textToCopy = "32.326.083/0001-08";
    navigator.clipboard.writeText(textToCopy)
    .then(function() {
        alert("Texto copiado com sucesso!");
    })
    .catch(function(err) {
        console.error("Erro ao copiar: ", err);
    });

});



// document.getElementById("btn_copy").addEventListener("click", function() {
//     var textToCopy = "32.326.083/0001-08";

//     if (navigator.userAgent.match(/ipad|iphone/i)) {
//         // Para dispositivos iOS (iPhone, iPad)
//         var el = document.createElement("textarea");
//         el.value = textToCopy;
//         document.body.appendChild(el);
//         el.select();
//         el.setSelectionRange(0, 99999); // Seleciona todo o texto para dispositivos iOS
//         document.execCommand("copy");
//         document.body.removeChild(el);
//         alert("Texto copiado com sucesso!");
//     } else {
//         // Para outros dispositivos móveis
//         navigator.clipboard.writeText(textToCopy)
//         .then(function() {
//             alert("Texto copiado com sucesso!");
//         })
//         .catch(function(err) {
//             console.error("Erro ao copiar: ", err);
//         });
//     }
// });

/**** O código comentado acima copia e cola também, mas usa um comando ultrapassado que é o execComand, ele está no código para ajudar a forçar a copia para iphone e ipad  ****/