var nameTxt = document.getElementById("nameTxtbox");
var dateTxt = document.getElementById("birthdateInput");

const colorCircle = document.getElementById("color-circle");
const colorCircle2 = document.getElementById("color-circle2");
const auraidTxt = document.getElementById("auraIdTxt");
const auraContentTxt = document.getElementById("txtboxAura");
const colorsName = {
  range1to4: ["#141E46", "#5B9A8B", "#0b5394", "#FF1744", "#3F2E3E", "#9C27B0", "#f1c232", "#6fa8dc", "#ff62b5", "#FF1744"],
  range4to8: ["#00BCD4", "#38761d", "#6fa8dc", "#38761d", "#8ad282"],
  range8to15: ["#9C27B0", "#f1c232", "#6fa8dc", "#ff62b5", "#FF1744"]
}

function generateRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

async function getNextAuraId() {
    const aurasCollection = firebase.firestore().collection("auras");
    const querySnapshot = await aurasCollection.orderBy("timestamp", "desc").limit(1).get();

    if (!querySnapshot.empty) {
        const lastAuraId = querySnapshot.docs[0].id;
        const lastNumber = parseInt(lastAuraId.substring(9)) + 1;
        return `AURA #DA${lastNumber.toString().padStart(4, "0")}`;
    } else {
        return "AURA #DA0001";
    }
}

let colorName = "";
let colorDate = "";

async function generateAura() {
  const nameLength = nameTxt.value.length;
  const dateMonth = new Date(dateTxt.value).getMonth();

    if (nameLength >= 1 && nameLength <= 4) {
        colorName = generateRandomColor(colorsName.range1to4);
    } else if (nameLength > 4 && nameLength <= 8) {
        colorName = generateRandomColor(colorsName.range4to8);
    } else if (nameLength > 8 && nameLength <= 15) {
        colorName = generateRandomColor(colorsName.range8to15);
    }
    
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

    const auraId = await getNextAuraId();

    // Aplica los colores a los círculos
    colorCircle.style.setProperty("--color1", colorName);
    colorCircle2.style.setProperty("--color1", colorName);
    colorCircle.style.setProperty("--color2", colorDate);
    colorCircle2.style.setProperty("--color2", colorDate);
    auraidTxt.textContent = auraId;
}

async function saveAura()
{
    const auraContent = auraContentTxt.value;
    const auraId = await getNextAuraId();
    const auraData = {
        auraId: auraId,
        colorName: colorName,
        colorDate: colorDate,
        auraContent: auraContent,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    saveAuraToFirestore(auraData);
}

continuebtn5.addEventListener("click", saveAura);

function saveAuraToFirestore(auraData) {
    // Obtiene una referencia a la colección "auras" en Firestore
    const aurasCollection = firebase.firestore().collection("auras");

    // Agrega los datos del aura a Firestore usando el Aura ID generado
    aurasCollection.doc(auraData.auraId).set(auraData)
        .then(() => {
            console.log("Aura guardado con éxito en Firestore!");
        })
        .catch(error => {
            console.error("Error al guardar el aura:", error);
        });
}

// Escucha los eventos de entrada en los campos de texto
nameTxt.addEventListener("input", generateAura);
dateTxt.addEventListener("input", generateAura);
