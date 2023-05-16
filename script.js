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
