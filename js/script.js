// ICONS
lucide.createIcons();


// SCROLL HEADER EFFECT

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){

    header.style.background = "rgba(5,5,5,0.85)";

  }else{

    header.style.background = "rgba(5,5,5,0.6)";
  }

});