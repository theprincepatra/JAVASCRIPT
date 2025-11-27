const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Hyper Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyperlinking Text Mark Language",
    correct: "b"
  },
  {
    question: "Which CSS property is used to change text color?",
    a: "color",
    b: "font-color",
    c: "text-style",
    d: "background-color",
    correct: "a"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<javascript>",
    d: "<code>",
    correct: "a"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "style",
    b: "class",
    c: "font",
    d: "styles",
    correct: "a"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const submitBtn = document.getElementById('submit');

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  q1.innerText = currentQuizData.a;
  q2.innerText = currentQuizData.b;
  q3.innerText = currentQuizData.c;
  q4.innerText = currentQuizData.d;

  // Uncheck previous selections
  document.querySelectorAll('input[name="answer"]').forEach(el => el.checked = false);
}

function getSelected() {
  const answerEl = document.querySelector('input[name="answer"]:checked');
  return answerEl ? answerEl.value : undefined;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      document.getElementById('quiz-container').innerHTML = `<h2>Quiz Over! Your score: ${score}/${quizData.length}</h2>`;
    }
  } else {
    alert("Please select an answer before submitting!");
  }
});

loadQuiz();
