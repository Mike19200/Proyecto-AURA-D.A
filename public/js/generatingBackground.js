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