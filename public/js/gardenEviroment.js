document.addEventListener("DOMContentLoaded", async function () {
  const numAuras = 12;
  const containerAuras = document.getElementById("bottom-sectionGarden");
  const auraIdTxt2 = document.getElementById("auraIdTxt2");
  const txtboxAuraDetail = document.getElementById("txtboxAuraDetail");
  const auraDetailsPage = document.getElementById("auraDetailsPage");
  const auraOnDisplay = document.getElementById("auraOnDisplay");

  const randomAuras = await getRandomAuras(numAuras);

  for (const auraData of randomAuras) {
    const auras = document.createElement("button");
    auras.className = "blur-circleGarden1";
    auras.style.left = `${getRandomCoordinate(window.innerWidth - 100)}px`;
    auras.style.top = `${getRandomCoordinate(window.innerHeight - 90)}px`;

    // Usa los valores de colorName y colorDate de cada aura
    auras.style.setProperty("--color1", auraData.colorName);
    auras.style.setProperty("--color2", auraData.colorDate);

    containerAuras.appendChild(auras);

    auras.addEventListener("click", async () => {
      const auraDetails = await getAuraDetails(auraData.id);
      txtboxAuraDetail.textContent = auraData.auraContent;
    });

    auras.addEventListener("click", function () {
      if (isUp == true) {
        auraOnDisplay.style.setProperty("--color1", auraData.colorName);
        auraOnDisplay.style.setProperty("--color2", auraData.colorDate);
        auraIdTxt2.textContent = auraData.id;
        gardenPage.style.display = "none";
        auraDetailsPage.style.display = "flex";
      }
    });

    applyRandomMovement(auras);
  }

  function applyRandomMovement(element) {
    const randomDuration = Math.random() * 12 + 6;
    let randomX = getRandomCoordinate(window.innerWidth - 100);
    let randomY = getRandomCoordinate(window.innerHeight - 200);

    // Limitar las coordenadas dentro de los límites de la pantalla
    randomX = Math.max(randomX, 0);
    randomX = Math.min(randomX, window.innerWidth - 100);
    randomY = Math.max(randomY, 0);
    randomY = Math.min(randomY, window.innerHeight - 200);

    element.style.animation = `moveRandomly ${randomDuration}s infinite linear`;
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  function getRandomCoordinate(max) {
    return Math.random() * max;
  }

  async function getRandomAuras(count) {
    const auras = [];

    // Obtén una referencia a la colección de auras en tu base de datos Firestore
    const aurasCollection = firebase.firestore().collection('auras');

    // Obten las auras de la colección de forma aleatoria
    const snapshot = await aurasCollection.orderBy('timestamp').limit(count).get();

    // Procesa los documentos en el resultado de la consulta
    snapshot.forEach((doc) => {
      // Agrega los datos de las auras al array 'auras'
      auras.push({ id: doc.id, ...doc.data() });
    });

    return auras;
  }

  async function getAuraDetails(auraId) {
    const auraDoc = await firebase.firestore().collection('auras').doc(auraId).get();
    return auraDoc.data();
  }
});
  
  