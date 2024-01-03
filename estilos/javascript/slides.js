// Seleciona o contêiner do slideshow
let slideshowContainer = document.querySelector('.slideshow-container');

// Criação da animação de slide
let keyframes = `
  @keyframes slideAnimation {
    0% {
        transform: translateX(200px); 
       }
      100% {
        transform: translateX(0px);
      }
  }
`;

// Cria um elemento <style> e adiciona os keyframes a ele
let styleElement = document.createElement('style');
styleElement.innerHTML = keyframes;
document.head.appendChild(styleElement);

// Aplica a animação ao elemento
slideshowContainer.style.animation = 'slideAnimation 5s infinite';






let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Oculta todos os slides
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } // Reinicia quando atinge o último slide
  
  slides[slideIndex - 1].style.display = "block"; // Exibe o slide atual
  
  setTimeout(showSlides, 5000); // Altera o slide a cada 5 segundos (5000 milissegundos)
}

