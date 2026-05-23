const quizData = [
  {
    question: "What does CSS stand for?",
    options: {
      a: "Computer Style Sheet",
      b: "Creative Style System",
      c: "Cascading Style Sheets",
      d: "Colorful Style Syntax"
    },
    correct: "c"
  },
  {
    question: "Which HTML tag is used for JavaScript?",
    options: {
      a: "<js>",
      b: "<javascript>",
      c: "<code>",
      d: "<script>"
    },
    correct: "d"
  },
  {
    question: "Which language is used for web apps?",
    options: {
      a: "PHP",
      b: "Python",
      c: "JavaScript",
      d: "All of the above"
    },
    correct: "d"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: {
      a: "<!-- -->",
      b: "//",
      c: "**",
      d: "##"
    },
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    options: {
      a: "Hyper Trainer Marking Language",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Marketing Language",
      d: "Hyper Tool Multi Language"
    },
    correct: "b"
  },
  {
    question: "Which company developed JavaScript?",
    options: {
      a: "Google",
      b: "Microsoft",
      c: "Netscape",
      d: "Apple"
    },
    correct: "c"
  },
  {
    question: "Inside which HTML element do we put CSS?",
    options: {
      a: "<css>",
      b: "<script>",
      c: "<style>",
      d: "<design>"
    },
    correct: "c"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: {
      a: "var",
      b: "int",
      c: "string",
      d: "define"
    },
    correct: "a"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: {
      a: "class",
      b: "style",
      c: "font",
      d: "styles"
    },
    correct: "b"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: {
      a: "alertBox('Hello World');",
      b: "msg('Hello World');",
      c: "alert('Hello World');",
      d: "msgBox('Hello World');"
    },
    correct: "c"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: {
      a: "<link>",
      b: "<a>",
      c: "<href>",
      d: "<url>"
    },
    correct: "b"
  },
  {
    question: "Which property is used to change text color in CSS?",
    options: {
      a: "font-color",
      b: "text-color",
      c: "color",
      d: "background-color"
    },
    correct: "c"
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    options: {
      a: "getElementById()",
      b: "querySelectorAll()",
      c: "getElementsByClass()",
      d: "selectElement()"
    },
    correct: "a"
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: {
      a: "<img>",
      b: "<image>",
      c: "<src>",
      d: "<pic>"
    },
    correct: "a"
  },
  {
    question: "What is the default position value in CSS?",
    options: {
      a: "absolute",
      b: "relative",
      c: "fixed",
      d: "static"
    },
    correct: "d"
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: {
      a: "==",
      b: "=",
      c: "===",
      d: "!="
    },
    correct: "c"
  },
  {
    question: "Which HTML tag is used for line break?",
    options: {
      a: "<lb>",
      b: "<break>",
      c: "<br>",
      d: "<line>"
    },
    correct: "c"
  },
  {
    question: "Which CSS property controls the size of text?",
    options: {
      a: "font-style",
      b: "text-size",
      c: "font-size",
      d: "text-style"
    },
    correct: "c"
  },
  {
    question: "Which function converts JSON to a JavaScript object?",
    options: {
      a: "JSON.parse()",
      b: "JSON.stringify()",
      c: "JSON.convert()",
      d: "JSON.toObject()"
    },
    correct: "a"
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: {
      a: "<h6>",
      b: "<heading>",
      c: "<h1>",
      d: "<head>"
    },
    correct: "c"
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: {
      a: "font-weight",
      b: "text-bold",
      c: "font-style",
      d: "weight"
    },
    correct: "a"
  },
  {
    question: "Which event occurs when a user clicks on an HTML element?",
    options: {
      a: "onmouseclick",
      b: "onchange",
      c: "onclick",
      d: "onhover"
    },
    correct: "c"
  },
  {
    question: "Which HTML tag is used to create a table?",
    options: {
      a: "<tab>",
      b: "<table>",
      c: "<tr>",
      d: "<td>"
    },
    correct: "b"
  },
  {
    question: "Which CSS property is used to change background color?",
    options: {
      a: "bgcolor",
      b: "color",
      c: "background-color",
      d: "background-style"
    },
    correct: "c"
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    options: {
      a: "func",
      b: "function",
      c: "define",
      d: "method"
    },
    correct: "b"
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: {
      a: "title",
      b: "alt",
      c: "src",
      d: "href"
    },
    correct: "b"
  },
  {
    question: "Which CSS property is used to center text?",
    options: {
      a: "align",
      b: "text-align",
      c: "center-text",
      d: "font-align"
    },
    correct: "b"
  },
  {
    question: "Which JavaScript method is used to write into the console?",
    options: {
      a: "console.write()",
      b: "console.log()",
      c: "print()",
      d: "log.console()"
    },
    correct: "b"
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: {
      a: "<ol>",
      b: "<ul>",
      c: "<li>",
      d: "<list>"
    },
    correct: "b"
  },
  {
    question: "Which CSS property is used to add space inside an element?",
    options: {
      a: "margin",
      b: "padding",
      c: "spacing",
      d: "border"
    },
    correct: "b"
  }
];


let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let userAnswers = []; // To store for review

// Elements
const quizContainer = document.getElementById("quiz");
const startScreen = document.getElementById("start-screen");
const scoreContainer = document.getElementById("scoreContainer");
const timerBar = document.getElementById("timer-bar");

// Initialize Theme
const toggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

document.getElementById("start-btn").addEventListener("click", () => {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  shuffleArray(quizData);
  loadQuestion();
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  updateTimerUI();
  
  const data = quizData[currentIndex];
  document.getElementById("question").textContent = data.question;
  document.getElementById("progressText").textContent = `Question ${currentIndex + 1}/${quizData.length}`;
  document.getElementById("progressFill").style.width = `${((currentIndex + 1) / quizData.length) * 100}%`;

  const options = ['a', 'b', 'c', 'd'];
  options.forEach(key => {
    const btn = document.getElementById(key);
    btn.textContent = data.options[key];
    btn.className = "option";
    btn.disabled = false;
  });

  document.getElementById("next").disabled = true;
  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoSubmit();
    }
  }, 1000);
}

function updateTimerUI() {
  document.getElementById("time").textContent = timeLeft;
  const offset = 283 - (timeLeft / 15) * 283;
  timerBar.style.strokeDashoffset = offset;
  timerBar.style.stroke = timeLeft <= 5 ? "var(--wrong)" : "var(--primary)";
}

document.querySelectorAll(".option").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
    e.target.classList.add("selected");
    document.getElementById("next").disabled = false;
  });
});

document.getElementById("next").addEventListener("click", () => {
  const selected = document.querySelector(".option.selected");
  handleAnswer(selected ? selected.id : null);
});

function autoSubmit() {
  handleAnswer(null);
}

function handleAnswer(answerId) {
  clearInterval(timer);
  const correct = quizData[currentIndex].correct;
  userAnswers.push({ q: quizData[currentIndex].question, a: answerId, c: correct });

  document.querySelectorAll(".option").forEach(btn => {
    btn.disabled = true;
    if (btn.id === correct) btn.classList.add("correct");
    if (btn.id === answerId && answerId !== correct) btn.classList.add("wrong");
  });

  if (answerId === correct) score++;

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < quizData.length) loadQuestion();
    else showResult();
  }, 1500);
}

function showResult() {
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  document.getElementById("finalScore").textContent = `${score} / ${quizData.length}`;
  
  const percent = (score / quizData.length) * 100;
  let rank = percent > 80 ? "Master 🏆" : percent > 50 ? "Scholar 📚" : "Novice 🌱";
  document.getElementById("rankText").textContent = `Rank: ${rank}`;

  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "<h3>Review:</h3>" + userAnswers.map(ua => `
    <div class="review-item">
      <p><strong>Q: ${ua.q}</strong></p>
      <p style="color: ${ua.a === ua.c ? 'var(--correct)' : 'var(--wrong)'}">
        Your Answer: ${ua.a ? quizData.find(q => q.question === ua.q).options[ua.a] : "None"}
      </p>
      ${ua.a !== ua.c ? `<p style="color: var(--correct)">Correct: ${quizData.find(q => q.question === ua.q).options[ua.c]}</p>` : ''}
    </div>
  `).join('');
}