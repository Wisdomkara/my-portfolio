const display = document.getElementById("form");

display.addEventListener("submit", function (e) {
  e.preventDefault();
  const pop = document.createElement("h1");
  pop.textContent = "thanks!!!! you will receive a newsletter soon";
  display.appendChild(pop);
  pop.classList.add("formstyle");
});
