//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Subacute care is for residents who",
        a: "Are relatively independent and do not need around-the-clock skilled care", 
        b: "Need less care than most long-term care facilities provide", 
        c: "Need more care than most long-term care facilities provide", 
        d: "Need emergency care for an accident or sudden illness", 
        correct: "c",
            },
        {
        question: "A pulse oximeter measures",
        a: "Blood pressure", 
        b: "Body temperature", 
        c: "Blood oxygen level", 
        d: "Blood glucose level", 
        correct: "c",
            },
        {
        question: "Which of the following statements is true of how a nursing assistant should care for a resident with a telemetry pack?",
        a: "The NA should not get the unit or electrodes wet.", 
        b: "The NA should not monitor vital signs.", 
        c: "The NA should not report cracked skin because that is normal due to the electrode placement.", 
        d: "The NA should make sure that the electrodes hang loosely from the resident’s chest.", 
        correct: "a",
            },
        {
        question: "What is the function of an artificial airway?",
        a: "To feed a resident who cannot swallow or digest food", 
        b: "To keep the airway open for the lungs to perform air exchange", 
        c: "To check a resident’s vital signs", 
        d: "To prepare a resident for a medical test", 
        correct: "b",
            },
        {
        question: "The method used to insert an artificial airway is called",
        a: "Telemetry", 
        b: "Intubation", 
        c: "Ventilation", 
        d: "Dyspnea", 
        correct: "b",
            },
        {
        question: "Alternate communication methods for a resident with an artificial airway include",
        a: "Playing charades", 
        b: "Shouting at the resident", 
        c: "Asking the resident’s family what they think he wants", 
        d: "Using communication boards", 
        correct: "d",
            },
        {
        question: "What might a nursing assistant do for a resident with a tracheostomy?",
        a: "Provide skin care to the site around the tube", 
        b: "Perform suctioning", 
        c: "Remove the tube for cleaning", 
        d: "Insert the tube", 
        correct: "a",
            },
        {
        question: "Which of the following statements is true of a resident on a ventilator?",
        a: "The resident will be especially relaxed.", 
        b: "Clipboards, pads, and communication boards can help with communication.", 
        c: "Being on a ventilator is not much different from regular breathing.", 
        d: "The resident will be able to speak.", 
        correct: "b",
            },
        {
        question: "Symptoms of respiratory distress include",
        a: "Gurgling", 
        b: "Decreased respiratory rate", 
        c: "Redness of the skin", 
        d: "Apathy", 
        correct: "a",
            },
        { 
        question: "Which of the following statements is true of chest tubes?",
        a: "The drainage system must be kept above the level of the resident’s chest.", 
        b: "The chest drainage must be observed for amount and color.", 
        c: "The tubing should be kinked.", 
        d: "Chest tubes will only be in the front of the body.", 
        correct: "b",
            },
        { 
        question: "A tube that is inserted into the nose, throughthe esophagus, and into the stomach for feeding is called a(n)",
         a: "Nasogastric tube", 
        b: "Orogastric tube", 
        c: "Percutaneous endoscopic gastrostomy (PEG) tube", 
        d: "Central venous line", 
        correct: "a",
            },
        { 
        question: "What is one of the nursing assistant’s responsibilities for tube feedings?",
        a: "Inserting tubes", 
        b: "Giving tube feedings", 
        c: "Positioning the resident", 
        d: "Cleaning or suctioning the tubes", 
        correct: "c",
            },
        { 
        question: "Care guidelines for dialysis include",
        a: "Advising the resident to wear tight sleeves", 
        b: "Checking blood pressure readings on the access arm", 
        c: "Following instructions for intake and output measurement carefully", 
        d: "Encouraging residents to put pressure on the access arm", 
        correct: "c",
            },
        { 
        question: "One reason why a resident may not be allowed fluids before surgery is",
        a: "The resident may drink more fluids than usual", 
        b: "Not drinking fluids can help prevent vomiting and aspiration", 
        c: "Having fluids increases the risk of incontinence after surgery", 
        d: "The surgery has a higher rate of success if no fluids are consumed", 
        correct: "b",
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