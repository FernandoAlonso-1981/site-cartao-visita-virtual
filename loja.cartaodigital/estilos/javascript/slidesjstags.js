// Seleciona o contêiner do slideshow
let slideshowContainer1 = document.querySelector('.slideshow-container1');

// Criação da animação de slide
let keyframes = `
  @keyframes slideAnimation {
    0% {
        transform: translateX(0px); 
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
slideshowContainer1.style.animation = 'slideAnimation 3.5s infinite';

let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;

showSlides1();
showSlides2();
showSlides3();
showSlides4();

function showSlides1() {
  let slides = document.getElementsByClassName("mySlides1");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Oculta todos os slides
  }
  
  slideIndex1++;
  if (slideIndex1 > slides.length) { slideIndex1 = 1 } // Reinicia quando atinge o último slide
  
  slides[slideIndex1 - 1].style.display = "block"; // Exibe o slide atual
  
  setTimeout(showSlides1, 3500); // Altera o slide a cada 5 segundos (5000 milissegundos)
}

function showSlides2() {
  let slides = document.getElementsByClassName("mySlides2");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Oculta todos os slides
  }
  
  slideIndex2++;
  if (slideIndex2 > slides.length) { slideIndex2 = 1 } // Reinicia quando atinge o último slide
  
  slides[slideIndex2 - 1].style.display = "block"; // Exibe o slide atual
  
  setTimeout(showSlides2, 3500); // Altera o slide a cada 5 segundos (5000 milissegundos)
}

function showSlides3() {
  let slides = document.getElementsByClassName("mySlides3");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Oculta todos os slides
  }
  
  slideIndex3++;
  if (slideIndex3 > slides.length) { slideIndex3 = 1 } // Reinicia quando atinge o último slide
  
  slides[slideIndex3 - 1].style.display = "block"; // Exibe o slide atual
  
  setTimeout(showSlides3, 3500); // Altera o slide a cada 5 segundos (5000 milissegundos)
}

function showSlides4() {
  let slides = document.getElementsByClassName("mySlides4");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Oculta todos os slides
  }
  
  slideIndex4++;
  if (slideIndex4 > slides.length) { slideIndex4 = 1 } // Reinicia quando atinge o último slide
  
  slides[slideIndex4 - 1].style.display = "block"; // Exibe o slide atual
  
  setTimeout(showSlides4, 3500); // Altera o slide a cada 5 segundos (5000 milissegundos)
}
