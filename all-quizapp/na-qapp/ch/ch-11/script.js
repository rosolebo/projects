//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Which of the following is part of using proper body mechanics?",
        a: "Twisting the back when carrying objects", 
        b: "Pushing when possible, rather than lifting", 
        c: "Using a narrow base of support", 
        d: "Lifting with the back, not the legs", 
        correct: "b",
            },
        { 
        question: "Which of the following statements is true of positioning?",
        a: "Residents will not need help getting into comfortable positions or changing positions.", 
        b: "Constant pressure on an area helps pre- vent pressure injuries.", 
        c: "NAs should check residents’ skin each time they are repositioned.", 
        d: "Bedbound residents should be repositioned every three hours.", 
        correct: "c",
            },
        { 
        question: "In which position is a resident if he is lying flat on his back with his head and shoulders supported by a pillow?",
        a: "Lateral position", 
        b: "Sims’ position", 
        c: "Supine position", 
        d: "Prone position", 
        correct: "c",
            },
        { 
        question: "In which position is a resident if he is on his left side with his lower arm behind his back and his upper knee flexed?",
        a: "Sims’", 
        b: "Prone", 
        c: "Fowler’s", 
        d: "Supine", 
        correct: "a",
            },
        { 
        question: "Which of the following statements is true of a high-Fowler’s position?",
        a: "In this position, a resident is lying on his abdomen.", 
        b: "In this position, a resident is sitting nearly straight up.", 
        c: "In this position, a resident is lying on either side.", 
        d: "In this position, a resident is flat on his back.", 
        correct: "b",
            },
        { 
        question: "Draw sheets are used to",
        a: "Keep the bed covers from pushing down on a resident’s feet", 
        b: "Keep a resident’s fingers from curling tightly", 
        c: "Keep a resident’s joints in the correct position", 
        d: "Prevent damage to a resident’s skin caused by shearing", 
        correct: "d",
            },
        { 
        question: "If a nursing assistant feels it is not safe to move a resident by himself, he should",
        a: "Find a coworker to help", 
        b: "Move the resident anyway because every- one else is probably busy", 
        c: "Refuse to move the resident", 
        d: "Ask the resident to move himself", 
        correct: "a",
            },
        { 
        question: "Dangling means",
        a: "Sitting up with legs hanging over the side of the bed", 
        b: "Sitting up in a wheelchair with feet flat on the floor", 
        c: "Lying in bed with feet resting over the side of the bed", 
        d: "Hanging both arms over chair rests", 
        correct: "a",
            },
        { 
        question: "When using a transfer belt, the nursing assistant should",
        a: "Place it under a resident’s clothing", 
        b: "Place it around the fractured limb", 
        c: "Place it around a resident’s chest", 
        d: "Place it around a resident’s waist", 
        correct: "d",
            },
        { 
        question: "When transferring a resident who has a weak side,",
        a: "The weaker side moves first", 
        b: "The stronger side moves first", 
        c: "The strong side and weak side move at the same time", 
        d: "It does not matter which side moves first", 
        correct: "b",
            },
        { 
        question: "Which of the following is a guideline for safely using a wheelchair?",
        a: "The NA goes down the ramp forward, with the resident facing the bottom of the ramp.", 
        b: "The NA leaves the wheelchair’s wheels unlocked while positioning a resident in it.", 
        c: "When using an elevator, the NA should make sure the chair faces the back of the elevator.", 
        d: "The NA should check that the resident’s hips are positioned at the very back of the chair.", 
        correct: "d",
            },
        { 
        question: "A geriatric chair is used to",
        a: "Help residents who are mostly bedbound avoid the need to stay in bed all day", 
        b: "Assist with resident transfers", 
        c: "Position residents properly for personal care", 
        d: "Place residents in the prone position", 
        correct: "a",
            },
        { 
        question: "Which of the following is true of mechanical lifts?",
        a: "Mechanical lifts help prevent injury to the body.", 
        b: "It is safer for an NA to lift a resident without the help of a mechanical lift.", 
        c: "There is only one kind of mechanical lift.", 
        d: "When using a mechanical lift, the NA should pump it approximately five feet over the bed before moving the resident.", 
        correct: "a",
            },
        { 
        question: "A resident who is ambulatory can",
        a: "Feed himself", 
        b: "Remember who and where he is", 
        c: "Get out of bed and walk", 
        d: "Speak clearly", 
        correct: "c",
            },
        { 
        question: "When helping a resident who has a visual impairment to walk, where should the nursing assistant be?",
        a: "Standing slightly in front of the resident", 
        b: "Standing slightly behind the resident", 
        c: "Standing a few feet off to the side", 
        d: "Sitting in a chair in front of the resident", 
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