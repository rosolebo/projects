//console.log("Hello NicK");
const quizData = [
 
    {
        question: "The is the outer layer of the skin which is composed of dead cells.",
        a: "Integument", 
        b: "Epidermis", 
        c: "Dermis", 
        d: "Melanocyte", 
        correct: "b",
            },
        {
        question: "The largest organ in the human body is the",
        a: "Heart", 
        b: "Lungs", 
        c: "Skin", 
        d: "Kidneys", 
        correct: "c",
            },
        {
        question: "Which of the following is a function of the integumentary system?",
        a: "Regulates hormone levels in the body", 
        b: "Prevents the loss of too much water", 
        c: "Allows the body to move", 
        d: "Provides an environment for the development of a fetus", 
        correct: "b",
            },
        {
        question: "Which of the following is a normal age-related change of the integumentary system?",
        a: "Amount of fat and collagen increases.", 
        b: "Pressure injuries occur.", 
        c: "Hair thickens.", 
        d: "Skin becomes thinner and more fragile.", 
        correct: "d",
            },
        {
        question: "A burn that affects the epidermis and causes redness and pain is a",
        a: "First-degree (superficial) burn", 
        b: "Second-degree (partial-thickness) burn", 
        c: "Third-degree (full-thickness) burn", 
        d: "Scald", 
        correct: "a",
            },
        {
        question: "Which of the following is true of scabies?",
        a: "It is caused by a buildup of bacteria in the skin.", 
        b: "Symptoms include rash, intense itching, and sores that may become infected.", 
        c: "It is not contagious.", 
        d: "Teenage children and young adults are at a higher risk of acquiring scabies.", 
        correct: "b",
            },
        {
        question: "Shingles is a viral infection caused by the same virus that causes and can occur in anyone who has had it.",
        a: "Scabies", 
        b: "Herpes", 
        c: "Chickenpox", 
        d: "Eczema", 
        correct: "c",
            },
        {
        question: "Skin that is not intact is considered a(n)",
        a: "Open wound", 
        b: "Closed wound", 
        c: "Contusion", 
        d: "Bruise", 
        correct: "a",
            },
        {
        question: "One of the nursing assistant’s responsibilities regarding eczema is",
        a: "Prescribing topical lotions", 
        b: "Reporting signs of infection", 
        c: "Draining any oozing fluid from the skin", 
        d: "Administering medications", 
        correct: "b",
            },
        { 
        question: "In which part of the body do fungal infections often occur?",
        a: "The groin", 
        b: "The head", 
        c: "The arms", 
        d: "The cheeks", 
        correct: "a",
            },
        { 
        question: "A stage 1 pressure injury has skin that is",
        a: "Nonintact", 
        b: "A deep crater", 
        c: "Deep purple", 
        d: "Red or a different color than the surrounding area", 
        correct: "d",
            },
        { 
        question: "A pressure injury with partial-thickness skin loss that may look like a blister is a stage pressure injury.",
        a: "1", 
        b: "2", 
        c: "3", 
        d: "4", 
        correct: "b",
            },
        { 
        question: "Which of the following is a condition that increases the risk of pressure injuries?",
        a: "Resident flexibility", 
        b: "Cold air", 
        c: "Healthy circulation", 
        d: "Restricted mobility", 
        correct: "d",
            },
        { 
        question: "Which of the following statements is true of pressure injuries?",
        a: "When skin begins to break down, it appears as a deep crater.", 
        b: "Pressure injuries are difficult to heal but do not hurt much.", 
        c: "Pressure injuries are impossible to prevent.", 
        d: "Pressure injuries can lead to life-threatening infections.", 
        correct: "d",
            },
        { 
        question: "One benefit of applying heat to the body is that",
        a: "Heat helps stop bleeding", 
        b: "Heat increases muscular tension", 
        c: "Heat decreases blood flow due to constriction of blood vessels", 
        d: "Heat increases movement of oxygen and nutrients into the tissues", 
        correct: "d",
            },
        { 
        question: "How does moisture affect warm and cold applications?",
        a: "It strengthens their effects.", 
        b: "It reduces their effects.", 
        c: "It makes applications less likely to cause injury.", 
        d: "It allows applications to be applied for a longer time.", 
        correct: "a",
            },
        { 
        question: "Warm or cold applications should generally be applied for",
        a: "10 minutes", 
        b: "20 minutes", 
        c: "30 minutes", 
        d: "40 minutes", 
        correct: "b",
            },
        { 
        question: "A sitz bath is used to",
        a: "Relax the resident", 
        b: "Encourage slow, deep breathing", 
        c: "Measure a resident’s pulse", 
        d: "Increase blood flow to pelvic area", 
        correct: "d",
            },
        { 
        question: "Nonsterile dressings are applied to",
        a: "Open wounds", 
        b: "Draining wounds", 
        c: "Dry wounds that have less chance of infection", 
        d: "New wounds", 
        correct: "c",
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