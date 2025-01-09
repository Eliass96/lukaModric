// Seleccionamos el switch y el icono
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const iframe = document.getElementById("timeline");

// Verificamos el tema al cargar la página
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
  themeIcon.classList.replace("bi-moon", "bi-sun");
}

// Cambiar el tema cuando se hace el toggle
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("bi-sun", "bi-moon");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.classList.replace("bi-moon", "bi-sun");
    localStorage.setItem("theme", "light");
  }
});
