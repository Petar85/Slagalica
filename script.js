// var startBtn = document.getElementById('start-btn')
// var questionBox = document.getElementById('questionBox')
// var timerTxt = document.getElementById('timer-txt')
// var result = document.getElementById('result')
// var questionIndex = 0;
// var questions = [
//     {
//         question: 'What is the capital of US?',
//         answers: ['Los Angeles', 'Washington D.C.', 'New York', 'Seattle'],
//         correct: 'Washington D.C.'
//     },
//     {
//         question: 'What is the capital of Canada?',
//         answers: ['Ottawa', 'Montreal', 'Victoria', 'Quebec'],
//         correct: 'Ottawa'
//     },
//     {
//         question: 'What is the capital of Germany?',
//         answers: ['Berlin', 'Bon', 'Dortmund', 'Hamburgh'],
//         correct: 'Berlin'
//     },
//     {
//         question: 'What is the capital of France?',
//         answers: ['Paris', 'Strasbourg', 'Tolouse', 'Nantes'],
//         correct: 'Paris'
//     },
//     {
//         question: 'What is the capital of Italy?',
//         answers: ['Rome', 'Naples', 'Torino', 'Genoa'],
//         correct: 'Rome'
//     },
// ];

// displayQuestion();

// function displayQuestion() {
//     var currentQuestion = questions[questionIndex];
//     questionBox.innerHTML = '';                         // <div id="questionBox"></div> -- Removes child HTML

//     var questionEl = document.createElement('h2');       // <h2></h2>
//     questionEl.textContent = currentQuestion.question;   // <h2>What is the capitol of US?</h2>
//     questionBox.appendChild(questionEl);

//     for (var i = 0; i < currentQuestion.answers.length; i++) {
//         var choice = document.createElement('button');

//         choice.textContent = currentQuestion.answers[i];
//         choice.classList.add('btn');
//         choice.addEventListener('click', check);

//         questionBox.appendChild(choice);
//     }
// }

// function check() {
//     console.log(this);
   


//     questionIndex++;
//     displayQuestion();
// }

// startBtn.on('click', function() {
//     var timer = 15;
//     timerTxt.textContent(timer)

//     var gameTimer = setInterval(() => {
//         timer--;
//         timerTxt.textContent(timer)

//         if(timer === 0) {
//             clearInterval(gameTimer);
//             alert('Time is up!')
//         }
//     },1000);
// })

// submitBtn.addEventListener("click", check)

function check() {
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result = document.getElementById("result");
    var quiz = document.getElementById("quiz");


    if (q1 === "Washington D.C.") { c++ }
    if (q2 === "Ottawa") { c++ }
    if (q3 === "Berlin") { c++ }
    if (q4 === "Paris") { c++ }
    if (q5 === "Rome") { c++ }

    document.write(c);
}    









