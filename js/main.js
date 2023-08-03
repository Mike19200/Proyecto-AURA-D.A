document.addEventListener("DOMContentLoaded", function () {
  const numCircles = 50; // Número de círculos que deseas generar
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
    const randomDuration = Math.random() * 30 + 15; // Duración aleatoria entre 1 y 6 segundos
    const randomX = getRandomCoordinate(window.innerWidth - 200);
    const randomY = getRandomCoordinate(window.innerHeight - 190);

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

const startbtn = document.getElementById("startbtn");
const continuebtn1 = document.getElementById("continuebtn1");
const continuebtn2 = document.getElementById("continuebtn2");
const continuebtn3 = document.getElementById("continuebtn3");

const startPage = document.getElementById("startPage");
const introductionPage = document.getElementById("introductionPage");
const namePage = document.getElementById("namePage");
const birthdatePage = document.getElementById("birthdatePage");
const generatingPage = document.getElementById("generatingPage");
const resultsPage = document.getElementById("resultsPage");

startbtn.addEventListener("click", function() {
  // Verificar si la página está abierta en un dispositivo móvil (ancho menor a 768px)
  if (window.innerWidth <= 768) {
    // Esperar 2 segundos antes de cambiar la sección
    setTimeout(function() {
      startPage.style.display = "none";
      introductionPage.style.display = "block";
    }, 800);
  } else {
    // Cambiar la sección inmediatamente en otros dispositivos
    startPage.style.display = "none";
    introductionPage.style.display = "block";
  }
});

continuebtn1.addEventListener("click", function() {
  if (window.innerWidth <= 768) {
    setTimeout(function() {
      startPage.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "block";
    }, 800);
  } else {
      startPage.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "block";
  }
});

continuebtn2.addEventListener("click", function() {
  if (window.innerWidth <= 768) {
    setTimeout(function() {
      startPage.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "block";
    }, 800);
  } else {
      startPage.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "block";
  }
});

continuebtn3.addEventListener("click", function() {
  if (window.innerWidth <= 768) {
    setTimeout(function() {
      startPage.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "none";
      generatingPage.style.display = "block";
      setTimeout(function() {
        generatingPage.style.display = "none";
        resultsPage.style.display = "block";
      }, 10000);
    }, 800);
  } else {
      startPage.style.display = "none";
      introductionPage.style.display = "none";
      namePage.style.display = "none";
      birthdatePage.style.display = "none";
      generatingPage.style.display = "block";
      setTimeout(function() {
        generatingPage.style.display = "none";
        resultsPage.style.display = "block";
      }, 10000);
  }
});