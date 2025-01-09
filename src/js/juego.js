// Preguntas y respuestas
const questions = [
    {
      question: "¿Dónde nació Luka Modrić?",
      answers: ["Zadar, Croacia", "Zagreb, Croacia", "Split, Croacia"],
      correct: 0,
    },
    {
      question: "¿En qué año debutó Luka Modrić con el Real Madrid?",
      answers: ["2011", "2012", "2013"],
      correct: 1,
    },
    {
      question: "¿Qué posición juega Luka Modrić?",
      answers: ["Defensa", "Delantero", "Centrocampista"],
      correct: 2,
    },
    {
      question: "¿Cuántas veces ha ganado la Champions League con el Real Madrid (en Enero de 2025)?",
      answers: ["4", "5", "6"],
      correct: 2,
    },
    {
      question: "¿En qué año ganó el Balón de Oro?",
      answers: ["2018", "2017", "2016"],
      correct: 0,
    },
    {
      question: "¿Contra qué equipo debutó en la Champions con el Real Madrid?",
      answers: ["PSG", "Manchester City", "Dinamo Zagreb"],
      correct: 1,
    },
    {
      question: "¿Qué dorsal lleva Luka Modrić?",
      answers: ["7", "10", "8"],
      correct: 1,
    },
    {
      question: "¿Qué título ganó Croacia en 2018?",
      answers: ["Ninguno, fue subcampeón del Mundial", "Eurocopa", "Liga de Naciones"],
      correct: 0,
    },
    {
      question: "¿Qué equipo europeo fichó a Luka antes del Real Madrid?",
      answers: ["Dinamo Zagreb", "Tottenham Hotspur", "Bayern Munich"],
      correct: 1,
    },
    {
      question: "¿Cuántas temporadas lleva en el Real Madrid (a 2025)?",
      answers: ["11", "12", "10"],
      correct: 1,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Elementos del DOM
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("nextButton");
  
  // Cargar una pregunta
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
  
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "btn btn-outline-primary d-flex align-items-center";
      button.textContent = answer;
  
      button.onclick = () => selectAnswer(index, button);
  
      answersElement.appendChild(button);
    });
  
    nextButton.disabled = true;
  }
  
  // Seleccionar respuesta
  function selectAnswer(selectedIndex, selectedButton) {
    const question = questions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;
  
    // Resaltar la respuesta seleccionada
    answersElement.childNodes.forEach((button, index) => {
      button.disabled = true;
  
      if (index === question.correct) {
        button.classList.add("correct");
        button.innerHTML += " ✅";
      } else if (index === selectedIndex && !isCorrect) {
        button.classList.add("incorrect");
        button.innerHTML += " ❌";
      }
    });
  
    if (isCorrect) {
      score++;
    }
  
    nextButton.disabled = false;
  }
  
  // Siguiente pregunta
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });
  
  // Mostrar resultados
  function showResults() {
    questionElement.textContent = `Juego terminado. Tu puntuación es ${score}/${questions.length}.`;
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
  }
  
  // Iniciar juego
  loadQuestion();
  