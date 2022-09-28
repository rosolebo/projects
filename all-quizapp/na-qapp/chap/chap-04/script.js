//console.log("Hello NicK");
const quizData = [
 
    {
        question: "One way for a nursing assistant to communicate effectively with a resident who has a visual impairment is to",
        a: "Wait until the resident speaks to her before identifying herself",
        b: " Touch the resident on the arm before identifying herself to let her know the NA is there",
        c: "Speak as little as possible while providing care",
        d: "Use the face of an imaginary clock to explain the position of objects",
        correct: "d",
    },
    {
        question: "If a resident has a hearing impairment, a nursing assistant should",
        a: "Make sure the light is on the resident’s face, not the NA’s",
        b: "Make sure the light is on the nursing assistant’s face, not the resident’s",
        c: "Raise the pitch of her voice so that the NA is heard",
        d: "Look at the ground when speaking to the resident",
        correct: "b",
    },
    {
        question: "While distributing meal trays, Shanice gives the wrong meal to a resident who has diabetes. She says that the resident distracted her by complaining about the food. Which defense mechanism is she using?",
        a: "Denial",
        b: "Projection",
        c: "Repression",
        d: "Rationalization",
        correct: "d",
    },
    {
        question: "Laura’s supervisor reprimands her for being late to work. Later that day, Laura yells at a resident for being incontinent. Which defense mechanism is she using?",
        a: "Displacement",
        b: "Regression",
        c: "Denial",
        d: "Rationalization",
        correct: "a",
    },
    {
        question: "Which of the following is the best example of how a nursing assistant should communicate with a resident who is anxious?",
        a: "The NA should gently ask the resident what is bothering him.",
        b: "The NA should speak more loudly.",
        c: "The NA should suggest medication that is commonly used for anxiety.",
        d: "The NA should tell the resident that it is best to stop worrying so much.",
        correct: "a",
    },
    {
        question: "Which of the following is the best way for a nursing assistant to communicate with a resident who has depression?",
        a: "The NA should use body language that shows interest.",
        b: "The NA should avoid eye contact with the resident.",
        c: "The NA should discourage other residents from talking to the resident.",
        d: "The NA should change the subject when the resident wants to talk about his feelings.",
        correct: "a",
    },
    {
        question: "Which of the following is the best way for a nursing assistant to respond to a resident who is angry?",
        a: "The NA should ignore the resident until the resident calms down.",
        b: "The NA should try to find out what is causing the resident’s anger.",
        c: "The NA should ask the resident to stop being angry.",
        d: "The NA should restrain the resident.",
        correct: "b",
    },
    {
        question: "Which of the following is an example of aggressive, rather than assertive, behavior?",
        a: "A resident tells a nursing assistant that she needs help cutting her food.",
        b: "A nursing assistant tells her supervisor that she does not have the training to complete an assigned task.",
        c: "A resident tells a nursing assistant that she is clumsy and is moving too slowly.",
        d: "A nursing assistant tells a resident that he has a stain on his shirt and helps him clean it.",
        correct: "c",
    },
    {
        question: "Which of the following is true of combative behavior?",
        a: " The behavior is usually a reaction to a specific person.",
        b: "The behavior is not a concern to staff or other residents.",
        c: "The behavior may be caused by disease or medication.",
        d: "The behavior does not need to be reported.",
        correct: "c",
    },
    {
        question: "If a resident becomes combative, a nursing assistant should",
        a: "Try to find out what triggered the behavior",
        b: "Leave the resident alone to calm down",
        c: "Tell the resident that he may be removed from the facility if he does not stop soon",
        d: "Argue with the resident to make him understand what is best",
        correct: "a",
    },
    {
        question: " When is it appropriate for a nursing assistant to hit a resident?",
        a: "When a resident is uncooperative during care",
        b: "When a resident threatens the nursing assistant or others",
        c: "When a resident hits the nursing assistant first",
        d: "Never",
        correct: "d",
    },
    {
        question: "Which of the following would be the best response by a nursing assistant if a resident is demonstrating inappropriate sexual behavior?",
        a: "The NA should distract the resident or direct her to a private area.",
        b: "The NA should ignore the behavior.",
        c: "The NA should let the resident know that everyone is very upset by this behavior.",
        d: "The NA should discuss the behavior with other residents to see if they found it upsetting.",
        correct: "a",
    },
    {
        question: "When a resident is confused, the nursing assistant should",
        a: "Leave the resident alone until she is oriented",
        b: "Provide a quiet environment",
        c: "Avoid telling the resident about plans for the day because it increases confusion",
        d: "Speak quickly to distract the resident",
        correct: "b",
    },
    {
        question: "A person in a coma may still be able to",
        a: "Hear",
        b: "Speak",
        c: "See",
        d: "Walk",
        correct: "a",
    },
    {
        question: "When communicating with a resident who has a functional barrier, the nursing assistant should",
        a: "Give the resident time to speak",
        b: "Remove oxygen before the resident speaks",
        c: "Insert the tracheostomy tube before the resident speaks",
        d: "Insist that the resident speak",
        correct: "a",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)   
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }

    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz() 
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})