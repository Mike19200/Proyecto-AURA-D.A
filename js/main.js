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

var nameTxt = document.getElementById("nameTxtbox")
var dateTxt = document.getElementById("birthdateInput");
const warningTxt = document.getElementById("warningText");
const warningTxt2 = document.getElementById("warningText2");

const colorCircle = document.getElementById("color-circle");
const colorCircle2 = document.getElementById("color-circle2");
const colorsName = {
  range1to4: ["#141E46", "#5B9A8B", "#0b5394", "#FF1744", "#3F2E3E", "#9C27B0", "#f1c232", "#6fa8dc", "#ff62b5", "#FF1744"],
  range4to8: ["#00BCD4", "#38761d", "#6fa8dc", "#38761d", "#8ad282"],
  range8to15: ["#9C27B0", "#f1c232", "#6fa8dc", "#ff62b5", "#FF1744"]
}

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
    }, 800);
  } else {
      startPage.style.display = "none";
      startPagebtn.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "block";
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
      }, 800);
    } else {
        startPage.style.display = "none";
        startPagebtn.style.display = "none";
        menubtn.style.display = "none";
        introductionPage.style.display = "none";
        namePage.style.display = "none";
        birthdatePage.style.display = "block";
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

function generateRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

let colorName = "";
let colorDate = "";

function updateNameCircleColor() {
  const nameLength = nameTxt.value.length;

  if (nameLength >= 1 && nameLength <= 4) {
    colorName = colorsName.range1to4[Math.floor(Math.random() * colorsName.range1to4.length)];
  } else if (textLength > 4 && textLength <= 8) {
    colorName = colorsName.range4to8[Math.floor(Math.random() * colorsName.range4to8.length)];
  } else if (textLength > 8 && textLength <= 15) {
    colorName = colorsName.range8to15[Math.floor(Math.random() * colorsName.range8to15.length)];
  }

  colorCircle.style.setProperty("--color1", colorName);
  colorCircle2.style.setProperty("--color1", colorName);
}

function updateDateCircleColor() {
  const dateMonth = new Date(dateTxt.value).getMonth();
  
  switch (dateMonth) {
    case 0: // febrero
      colorDate = '#8e7cc3';
      break;
    case 1: // Marzo
      colorDate = '#6fa8dc';
      break;
    case 2: // Abril
      colorDate = '#e3492d';
      break;
    case 3: // Mayo
      colorDate = 'green';
      break;
    case 4: // Junio
      colorDate = '#ba8d00';
      break;
    case 5: // Julio
      colorDate = '#FF7F50';
      break;
    case 6: // Agosto
      colorDate = '#ff8200';
      break;
    case 7: // Septiembre
      colorDate = '#5ea7ea';
      break;
    case 8: // Octubre
      colorDate = '#00437f';
      break;
    case 9: // Noviembre
      colorDate = 'red';
      break;
    case 10: // Diciembre
      colorDate = '#c2c2c2';
      break;
    case 11: // Enero
      colorDate = '#448224';
      break;
    default:
      colorDate = 'black'; // Valor por defecto
  }
  
  colorCircle.style.setProperty("--color2", colorDate);
  colorCircle2.style.setProperty("--color2", colorDate);
}

nameTxt.addEventListener("input", updateNameCircleColor);
dateTxt.addEventListener("input", updateDateCircleColor);


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