const startbtn = document.getElementById("startbtn");
const startPage = document.getElementById("startPage");
const introductionPage = document.getElementById("introductionPage");

startbtn.addEventListener("click", function() {
  startPage.style.display = "none";
  introductionPage.style.display = "block";
});