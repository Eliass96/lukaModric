document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos el switch y el icono
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const iframe = document.getElementById("timeline");

  // Verificamos el tema al cargar la página
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
    themeIcon.classList.replace("bi-moon", "bi-sun");
    iframe.src =
      "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1iDCJ63Psx6COW96lNeMHvx4zEFg3KTkSydP6LEcswvQ&font=Default&lang=en&initial_zoom=2&height=650";
  }

  // Cambiar el tema cuando se hace el toggle
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.add("dark-mode");
      themeIcon.classList.replace("bi-sun", "bi-moon");
      localStorage.setItem("theme", "dark");
      iframe.src =
        "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1iDCJ63Psx6COW96lNeMHvx4zEFg3KTkSydP6LEcswvQ&font=Default&lang=en&initial_zoom=2&height=650";
    } else {
      document.body.classList.remove("dark-mode");
      themeIcon.classList.replace("bi-moon", "bi-sun");
      localStorage.setItem("theme", "light");
      iframe.src =
        "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=10Tzlkh2hAS6tt7t8Z_J_E9km9UCMH93X3shjtTelKIw&font=Default&lang=en&initial_zoom=2&height=650";
    }
  });
});
