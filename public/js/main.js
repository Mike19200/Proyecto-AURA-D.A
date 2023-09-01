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
const auraDetailsPage = document.getElementById("auraDetailsPage");


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
  startPagebtn.style.display = "absolute";
  startPagebtn.classList.remove("button-container");
  startPagebtn.classList.add("button-containerOnGarden");
  startPagebtn.style.transform = "rotate(-180deg)"; 
  gardenPage.classList.add("slide-up");
  gardenPage.style.display = "block";
  document.body.style.display ="block";
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
  startPagebtn.style.transform = "translate(-50%, -50%)";
  startPage.classList.add("slide-down");
  gardenPage.style.display = "none";
  document.body.style.display ="flex";
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
        startPagebtn.style.display = "grid";
        startPagebtn.classList.add("button-containerOnGarden");
        startPagebtn.classList.remove("button-container");
        startPagebtn.style.transform = "rotate(-180deg)"; 
        startPagebtn.style.transform = "translate(-50%, -100%)";
        isUp = true;
        gardenPage.style.display = "block";
        document.body.style.display ="block";
      }, 5000);
    }, 800);
  } else {
      startPage.style.display = "none";
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
        startPagebtn.style.display = "grid";
        startPagebtn.classList.add("button-containerOnGarden");
        startPagebtn.classList.remove("button-container");
        startPagebtn.style.transform = "rotate(-180deg)"; 
        startPagebtn.style.transform = "translate(-50%, -100%)";
        isUp = true;
        menubtn.style.display = "block";
        gardenPage.style.display = "block";
        document.body.style.display ="block";
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
  document.body.style.display ="flex";
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