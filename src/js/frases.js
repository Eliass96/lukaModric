const frases = [
  "No importa de dónde vienes, lo importante es a dónde vas.",
  "El trabajo duro siempre supera al talento, si el talento no trabaja duro.",
  "Nunca te rindas, incluso cuando los demás no crean en ti.",
  "El fútbol no es solo un deporte, es una forma de vida.",
  "Siempre doy lo mejor de mí porque el equipo siempre es lo primero.",
  "Lo que haces en los momentos difíciles define quién eres.",
  "Cada partido es una nueva oportunidad para demostrar tu valía.",
  "No hay atajos hacia el éxito, solo esfuerzo constante.",
  "Los sueños se cumplen si tienes la valentía de perseguirlos.",
  "El éxito no es el final, el fracaso no es fatal: lo que cuenta es el coraje de continuar.",
];

const randomIndex = Math.floor(Math.random() * frases.length);
const randomQuote = frases[randomIndex];

document.getElementById("randomQuote").innerText = randomQuote;
