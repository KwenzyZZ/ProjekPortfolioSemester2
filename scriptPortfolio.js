AOS.init();

const buttons = document.querySelectorAll(".switch-button");
const slider = document.querySelector(".switch-slider");
const projectsDesign = document.querySelector(".projects");
const projectsCode = document.querySelector(".projects-code");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
slider.style.left = index === 0 ? "0" : "50%";

    if (index === 0) {
      projectsDesign.style.display = "block";
      if (projectsCode) projectsCode.style.display = "none";
    } else {
      projectsDesign.style.display = "none";
      if (projectsCode) projectsCode.style.display = "block";
    }
  });
});

projectsDesign.style.display = "block";
if (projectsCode) projectsCode.style.display = "none";
