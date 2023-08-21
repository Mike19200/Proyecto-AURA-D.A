const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  nav.classList.remove("cerrada");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  nav.classList.add("cerrada");
})

document.addEventListener("DOMContentLoaded", function () {
  const numCircles = 60; // Número de círculos que deseas generar
  const container = document.getElementById("circleContainer");

  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    circle.className = "circlebackground";
    circle.style.left = `${getRandomCoordinate(window.innerWidth - 100)}px`;
    circle.style.top = `${getRandomCoordinate(window.innerHeight - 90)}px`;
    circle.style.backgroundColor = getRandomColor();
    container.appendChild(circle);

    applyRandomMovement(circle);
  }

  function applyRandomMovement(element) {
    const randomDuration = Math.random() * 15 + 10; // Duración aleatoria entre 1 y 6 segundos
    const randomX = getRandomCoordinate(window.innerWidth - 100);
    const randomY = getRandomCoordinate(window.innerHeight - 90);

    element.style.animation = `moveRandomly ${randomDuration}s infinite linear`;
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  function getRandomCoordinate(max) {
    return Math.random() * max;
  }

  function getRandomColor() {
    const colors = ["#5900EB", "#00C0FF", "#9D7100", "#FFDC83", "#00789D", "#009D23", "#fd7a08", "#8aad36", "#d518af", "#17dfea"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});

const menubtn = document.getElementById("menu");
const startbtn = document.getElementById("startbtn");
const bottombtnSP = document.getElementById("bottom-buttonSP");
const continuebtn1 = document.getElementById("continuebtn1");
const continuebtn2 = document.getElementById("continuebtn2");
const continuebtn3 = document.getElementById("continuebtn3");
const continuebtn4 = document.getElementById("continuebtn4");
const continuebtn5 = document.getElementById("continuebtn5");
const inicioBtn = document.getElementById("inicioBtn");
const usBtn = document.getElementById("usBtn");
const crdsBtn = document.getElementById("crdsBtn");

var nameTxt = document.getElementById("nameTxtbox").value;
const warningTxt = document.getElementById("warningText");
const warningTxt2 = document.getElementById("warningText2");

const startPage = document.getElementById("startPage");
const usPage = document.getElementById("usPage");
const creditsPage = document.getElementById("creditsPage");
const gardenPage = document.getElementById("gardenPage");
const startPagebtn = document.getElementById("startPagebtn");
const introductionPage = document.getElementById("introductionPage");
const namePage = document.getElementById("namePage");
const birthdatePage = document.getElementById("birthdatePage");
const generatingPage = document.getElementById("generatingPage");
const resultsPage = document.getElementById("resultsPage");
const resultsPage2 = document.getElementById("resultsPage2");
const summitPage = document.getElementById("summitPage");

startbtn.addEventListener("click", function() {
  // Verificar si la página está abierta en un dispositivo móvil (ancho menor a 768px)
  if (window.innerWidth <= 768) {
    // Esperar 2 segundos antes de cambiar la sección
    setTimeout(function() {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      menubtn.style.display = "none";
      introductionPage.style.display = "block";
    }, 800);
  } else {
    // Cambiar la sección inmediatamente en otros dispositivos
    startPage.style.display = "none";
    startPagebtn.style.display = "none";
    menubtn.style.display = "none";
    introductionPage.style.display = "block";
  }
});

let isUp = false;

bottombtnSP.addEventListener("click", function(){

  if(!isUp)
  {
  startPage.style.display = "none";
  startPagebtn.style.display = "block";
  startPagebtn.classList.remove("button-container");
  startPagebtn.classList.add("button-containerOnGarden");
  startPagebtn.style.transform = "rotate(-180deg)"; 
  startPagebtn.style.transform = "translate(-50%, -100%)";
  gardenPage.style.display = "block";
  gardenPage.classList.add("slide-up");
  isUp = true;
  }
  else
  {
  startPage.style.display = "flex";
  startPage.style.top = "-3.6%";
  if (window.innerWidth <= 768) {
    startPage.style.top = "-7.5%"; 
  };
  startPagebtn.style.display = "absolute";
  startPagebtn.classList.remove("button-containerOnGarden");
  startPagebtn.classList.add("button-container");
  gardenPage.style.display = "none";
  startPage.classList.add("slide-down");
  isUp = !isUp;
  }
});

continuebtn1.addEventListener("click", function() {
  if (window.innerWidth <= 768) {
    setTimeout(function() {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      menubtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "block";
      warningTxt.style.display = "none";
    }, 800);
  } else {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "block";
      warningTxt.style.display = "none";
  }
});


continuebtn2.addEventListener("click", function() {
  var nameTxt = document.getElementById("nameTxtbox").value;
  if(nameTxt === "" )
  {
    warningTxt.style.display = "block";
  }
  else
  {
    if (window.innerWidth <= 768) {
      setTimeout(function() {
        startPage.style.display = "none";
        startPagebtn.style.display = "none";
        menubtn.style.display = "none";
        introductionPage.style.display = "none";
        namePage.style.display = "none";
        birthdatePage.style.display = "block";
        warningTxt2.style.display = "none";
      }, 800);
    } else {
        startPage.style.display = "none";
        startPagebtn.style.display = "none";
        menubtn.style.display = "none";
        introductionPage.style.display = "none";
        namePage.style.display = "none";
        birthdatePage.style.display = "block";
        warningTxt2.style.display = "none";
    }
  }
});

continuebtn3.addEventListener("click", function() {
  var dateTxt = document.getElementById("birthdateInput").value;
  if(dateTxt === "" )
  {
    warningTxt2.style.display = "block";
  }
  else
  {
    if (window.innerWidth <= 768) {
      setTimeout(function() {
        startPage.style.display = "none";
        startPagebtn.style.display = "none";
        menubtn.style.display = "none";
        introductionPage.style.display = "none";
        namePage.style.display = "none";
        birthdatePage.style.display = "none";
        generatingPage.style.display = "block";
        setTimeout(function() {
          generatingPage.style.display = "none";
          resultsPage.style.display = "block";
        }, 10000);
      }, 800);
    } 
    else {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      menubtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "none";
      generatingPage.style.display = "block";
      setTimeout(function() {
        generatingPage.style.display = "none";
        resultsPage.style.display = "block";
      }, 10000);
    }
  }
});
continuebtn4.addEventListener("click", function() {
  if (window.innerWidth <= 768) {
    setTimeout(function() {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      menubtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "none";
      generatingPage.style.display = "none";
      resultsPage.style.display = "none";
      resultsPage2.style.display = "flex";
    }, 800);
  } else {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      menubtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "none";
      generatingPage.style.display ="none";
      resultsPage.style.display = "none";
      resultsPage2.style.display = "flex";
  }
});

continuebtn5.addEventListener("click", function() {
  if (window.innerWidth <= 768) {
    setTimeout(function() {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      menubtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "none";
      generatingPage.style.display = "none";
      resultsPage.style.display = "none";
      resultsPage2.style.display = "none";
      summitPage.style.display = "block";
      setTimeout(function() {
        summitPage.style.display = "none";
        startPagebtn.style.display = "block";
        startPagebtn.classList.add("button-containerOnGarden");
        startPagebtn.style.transform = "rotate(-180deg)"; 
        startPagebtn.style.transform = "translate(-50%, -100%)";
        isUp = true;
        gardenPage.style.display = "block";
      }, 5000);
    }, 800);
  } else {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      menubtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "none";
      generatingPage.style.display = "none";
      resultsPage.style.display = "none";
      resultsPage2.style.display = "none";
      summitPage.style.display = "block";
      setTimeout(function() {
        summitPage.style.display = "none";
        startPagebtn.style.display = "block";
        startPagebtn.classList.add("button-containerOnGarden");
        startPagebtn.style.transform = "rotate(-180deg)"; 
        startPagebtn.style.transform = "translate(-50%, -100%)";
        isUp = true;
        menubtn.style.display = "block";
        gardenPage.style.display = "block";
      }, 5000);
  }
});

inicioBtn.addEventListener("click", function() {
  nav.classList.remove("visible");
  startPage.classList.add("slide-down");
  startPage.style.display = "block";
  startPage.style.display = "flex";
  startPage.style.top = "-3.6%";
  startPagebtn.style.display = "block";
  menubtn.style.display = "block";
  usPage.style.display = "none";
  startPage.style.display = "flex";
  startPagebtn.style.display = "absolute";
  startPagebtn.classList.remove("button-containerOnGarden");
  startPagebtn.classList.add("button-container");
  gardenPage.style.display = "none";
  creditsPage.style.display = "none";
});

usBtn.addEventListener("click", function() {
  nav.classList.remove("visible");
  usPage.classList.add("slide-down");
  startPage.style.display = "none";
  gardenPage.style.display = "none";
  startPagebtn.style.display = "none";
  usPage.style.display = "block";
  usPage.style.display = "flex";
  menubtn.style.display = "block";
  creditsPage.style.display = "none";
});

crdsBtn.addEventListener("click", function() {
  nav.classList.remove("visible");
  creditsPage.classList.add("slide-down");
  creditsPage.style.display = "flex";
  startPage.style.display = "none";
  gardenPage.style.display = "none";
  startPagebtn.style.display = "none";
  usPage.style.display = "none";
  menubtn.style.display = "block";
});