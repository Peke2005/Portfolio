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
  // Lo pongo aqui para no tener que crear otra funcion onScroll y es de la parte del curriculum
  mostrarEnScroll();
};

// Curriculum
const items = document.querySelectorAll(".aparecerDerecha, .aparecerIzquierda");

function mostrarEnScroll() {
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
}

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

// Ventana emergente 4
function abrir4() {
  document.getElementById("vent4").style.display = "block";
}

function cerrar4() {
  document.getElementById("vent4").style.display = "none";
}

// Para hacer el slider de los puntos
let sliderPuntos = document.querySelectorAll(".sliderPunto");
let puntoActual = 0;

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

function retrocederPunto() {
  sliderPuntos[puntoActual].style.backgroundColor = "";
  sliderPuntos[puntoActual].style.borderColor = "white";

  puntoActual--;

  if (puntoActual < 0) {
    puntoActual = sliderPuntos.length - 2;
  }

  sliderPuntos[puntoActual].style.backgroundColor = "white";
  sliderPuntos[puntoActual].style.borderColor = "";
}

// Para hacer el slider
let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 0;
let width = sliderIndividual[0].clientWidth;
let intervalo = 40000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transition = "transform .8s";
  avanzarPunto();
  contador++;
  if (contador == sliderIndividual.length - 1) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 0;
    }, 1500);
  }
  slider.style.transform = "translate(" + -width * contador + "px)";
}

//Para que funcionen los botones
document.addEventListener("DOMContentLoaded", function () {
  let botonesIzquierda = document.querySelector(".boton-izquierda");
  let botonesDerecha = document.querySelector(".boton-derecha");
  let sliderIndividual = document.querySelectorAll(".contenido-slider");

  function avanzarSeccion() {
    contador++;
    console.log(contador);
    if (contador >= sliderIndividual.length - 1) {
      contador = 0;
    }
    slider.style.transition = "transform .8s";
    slider.style.transform = "translate(" + -width * contador + "px)";
    avanzarPunto();
    mostrarSeccion(contador);
  }

  function retrocederSeccion() {
    slider.style.transition = "transform .8s";

    contador--;
    if (contador < 0) {
      contador = sliderIndividual.length - 2;
    }
    slider.style.transform = `translate(${-width * contador}px)`;
    retrocederPunto();
    mostrarSeccion(contador);
  }

  botonesDerecha.addEventListener("click", avanzarSeccion);
  botonesIzquierda.addEventListener("click", retrocederSeccion);
});
