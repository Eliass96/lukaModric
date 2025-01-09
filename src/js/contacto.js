const mensajes = [];

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isDarkTheme = document.body.classList.contains("dark-mode");
  Swal.fire({
    title: "Enviado correctamente",
    text: "Tu mensaje ha sido enviado.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
    background: isDarkTheme ? "#343a40" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  }).then(() => {
    mensajes.push({
      nombre: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mensaje: document.getElementById("message").value,
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.table(mensajes);
  });
});
