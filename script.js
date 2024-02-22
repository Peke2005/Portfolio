let menuVisible = false;

// Funcion que muestra y oculta el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function sleccionar() {
  // Ocultar el menu cuando sellecionemos una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("redes");
    habilidades[1].classList.add("sistemas");
    habilidades[2].classList.add("robotica");
    habilidades[3].classList.add("programacion");
    habilidades[4].classList.add("ofimaticas");
    habilidades[5].classList.add("html");
    habilidades[6].classList.add("css");
    habilidades[7].classList.add("php");
    habilidades[8].classList.add("mysql");
    habilidades[9].classList.add("javascript");
  }
}
// Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

// Ventana emergente
function abrir1() {
  document.getElementById("vent1").style.display = "block";
}

function cerrar1() {
  document.getElementById("vent1").style.display = "none";
}

// Ventana emergente 2
function abrir2() {
  document.getElementById("vent2").style.display = "block";
}

function cerrar2() {
  document.getElementById("vent2").style.display = "none";
}

// Ventana emergente 3
function abrir3() {
  document.getElementById("vent3").style.display = "block";
}

function cerrar3() {
  document.getElementById("vent3").style.display = "none";
}

// Para hacer el slider de los puntos
// Obtener los puntos del slider
let sliderPuntos = document.querySelectorAll(".sliderPunto");
let intervaloPunto = 40000;
let puntoActual = 0;

// Función para avanzar al siguiente punto
function avanzarPunto() {
  sliderPuntos[puntoActual].style.backgroundColor = "";
  sliderPuntos[puntoActual].style.borderColor = "white";

  puntoActual++;
  if (puntoActual === sliderPuntos.length - 1) {
    puntoActual = 0;
  }

  sliderPuntos[puntoActual].style.backgroundColor = "white";
  sliderPuntos[puntoActual].style.borderColor = "";
}

// Para hacer el slider
let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 40000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + -width * contador + "px)";
  slider.style.transition = "transform .8s";
  contador++;
  avanzarPunto();
  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
  }
}
