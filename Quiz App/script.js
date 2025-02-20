document.addEventListener('DOMContentLoaded', () => {
    let quizContainer = document.getElementById('quizContainer');
    let bottomButton = document.getElementById('bottomButton');
    let resultContainer = document.getElementById('resultContainer');


    //Add/Modify Questions
    let questions = JSON.parse(localStorage.getItem('questions')) ||
        [
            {
                question: "What is the capital of France?",
                op1: "Paris",
                op2: "London",
                op3: "Berlin",
                op4: "Madrid",
                selected: null,
                ans: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                op1: "Mars",
                op2: "Venus",
                op3: "Jupiter",
                op4: "Saturn",
                selected: null,
                ans: "Mars"
            },
            {
                question: "Who wrote 'Hamlet'?",
                op1: "Charles Dickens",
                op2: "Jane Austen",
                op3: "William Shakespeare",
                op4: "Mark Twain",
                selected: null,
                ans: "William Shakespeare"
            }
        ];
    let currentQuestionIndex = -1;
    bottomButton.addEventListener('click', () => {
        if (bottomButton.textContent == "Start Quiz") {
            bottomButton.classList.add('hidden');
            bottomButton.textContent = "Retry Quiz";
            startQuiz();
        }
        else if (bottomButton.textContent == "Retry Quiz") {
            resultContainer.innerHTML=``;
            bottomButton.textContent = "Start Quiz";
            quizContainer.innerHTML = '';
            currentQuestionIndex=-1;
            
        }
    });

    function saveLocal() {
        localStorage.setItem('questions', JSON.stringify(questions))
    }



    function startQuiz() {
        if (currentQuestionIndex >= questions.length-1) {
            quizContainer.innerHTML=``
            let result=0;
            for (const question of questions){
                if (question.selected==question.ans)result++;
            }
            resultContainer.innerHTML=
            `
            <h1>Your Score:</h1>
            <h2>${result} out of ${questions.length}</h2>
            `
            bottomButton.classList.remove('hidden');
         }
        else {
            
            let item = questions[++currentQuestionIndex];
            quizContainer.innerHTML = `
        <h2>${item.question}</h2>
        <form id="optionForm" class="optionForm">
        <input type="radio" name="options" value='${item.op1}'>${item.op1}</input>
        <input type="radio" name="options" value='${item.op2}'>${item.op2}</input>
        <input type="radio" name="options" value='${item.op3}'>${item.op3}</input>
        <input type="radio" name="options" value='${item.op4}'>${item.op4}</input>
        <button type="submit" class='hidden' id="nextQuestion">Next Question</button>
        </form>
        `
            let nextQuestion = document.getElementById('nextQuestion');
            let inputForm = document.getElementById("optionForm");
            inputForm.addEventListener('click', function (event) {
                if (event.target && event.target.matches("input[type='radio']")) {
                    nextQuestion.classList.remove('hidden');
                    questions[currentQuestionIndex].selected = event.target.value;
                    console.log("Clicked");

                }
            })
            inputForm.addEventListener('submit', (event) => {
                event.preventDefault();
                saveLocal();
                startQuiz();
            })
        }
    }
});