const quizData = [
  {
    question: "In what year was the first iPhone released?",
    a: "2001",
    b: "1998",
    c: "2005",
    d: "2007",
    correct: "d",
  },
  {
    question: "The tallest building in the world is located in which city?",
    a: "Chicago (Sears Tower)",
    b: "Dubai (Burj Khalifa)",
    c: "Paris (Eifel Tower)",
    d: "Shanghai (Shanghai Tower)",
    correct: "b",
  }, 
  {
    question: "Who directed Pulp Fiction?",
    a: "Stephen Spielberg",
    b: "Martin Scorsese",
    c: "Quentin Tarantino",
    d: "James Cameron",
    correct: "c",
  }, 
  {
    question: "How many actors have played the role of James Bond?",
    a: "Nine",
    b: "Seven",
    c: "Ten",
    d: "Four",
    correct: "a",
  }, 
  {
    question: "What company is also the name of one of the longest rivers in the world?",
    a: "Google",
    b: "Amazon",
    c: "Twitter",
    d: "TikTok",
    correct: "b",
  }, 
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>
      <button onclick="location.reload()">Retry</button>`;
    }
  }
});
