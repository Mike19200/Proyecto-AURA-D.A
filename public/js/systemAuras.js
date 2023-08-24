var nameTxt = document.getElementById("nameTxtbox")
var dateTxt = document.getElementById("birthdateInput");

const colorCircle = document.getElementById("color-circle");
const colorCircle2 = document.getElementById("color-circle2");
const colorsName = {
  range1to4: ["#141E46", "#5B9A8B", "#0b5394", "#FF1744", "#3F2E3E", "#9C27B0", "#f1c232", "#6fa8dc", "#ff62b5", "#FF1744"],
  range4to8: ["#00BCD4", "#38761d", "#6fa8dc", "#38761d", "#8ad282"],
  range8to15: ["#9C27B0", "#f1c232", "#6fa8dc", "#ff62b5", "#FF1744"]
}

function generateRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}
  
let colorName = "";
let colorDate = "";
  
function updateNameCircleColor() {
    let colorName = "";
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