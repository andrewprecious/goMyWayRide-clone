const hambuger = document.querySelector(".hambuger");
navLinks = document.querySelector(".nav-ul");

hambuger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
