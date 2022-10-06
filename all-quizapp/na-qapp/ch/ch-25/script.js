//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Which of the following issues regarding rehabilitation and restorative care should be reported to the nurse?",
        a: "Whether the resident’s family is visiting", 
        b: "How much television the resident watches", 
        c: "Whether the resident uses the call light too many times per day", 
        d: "The resident shows signs of depression", 
        correct: "d",
            },
        {
        question: "Which of the following statements is true of a nursing assistant’s role in restorative care?",
        a: "If a resident takes too long to do a task by himself, the nursing assistant should do it for him.", 
        b: "The nursing assistant should give the resident pain medication before the rehabilitation session begins.", 
        c: "The nursing assistant should recognize that setbacks occur and be reassuring.", 
        d: "The nursing assistant should tell the family that progress is happening faster than it really is so they can feel better about the situation.", 
        correct: "c",
            },
        {
        question: "Guidelines for the NA for rehabilitation and restorative care include",
        a: "Not following the care plan if the resident seems to be making more progress than expected", 
        b: "Discouraging activity to make sure the resident gets enough rest", 
        c: "Providing plenty of privacy to avoid distractions and embarrassment", 
        d: "Focusing on setbacks so the resident will be motivated to do better", 
        correct: "c",
            },
        {
        question: "Complications of immobility for the nervous system include",
        a: "Pneumonia", 
        b: "Depression or insomnia", 
        c: "Weight gain", 
        d: "Constipation", 
        correct: "b",
            },
        {
        question: "How does regular activity and exercise benefit the integumentary system?",
        a: "Interaction between the resident and his roommate is improved.", 
        b: "The resident’s spiritual needs are fulfilled.", 
        c: "The resident’s family has a better opinion of the facility.", 
        d: "Quality and health of the skin is improved.", 
        correct: "d",
            },
        {
        question: "Benefits of regular activity and exercise for the endocrine system include",
        a: "Increased metabolism", 
        b: "Improved circulation", 
        c: "Improved relaxation and sleep", 
        d: "Increased blood flow to the muscles and improved strength", 
        correct: "a",
            },
        {
        question: "A cane is used",
        a: "To help a person with balance", 
        b: "For residents who cannot bear weight on one leg", 
        c: "To provide stability when a person is unsteady or has some weakness", 
        d: "When a resident cannot get out of bed", 
        correct: "a",
            },
        {
        question: "How many feet does a quad cane have?",
        a: "1", 
        b: "2", 
        c: "3", 
        d: "4", 
        correct: "d",
            },
        {
        question: "When a resident has one weaker leg,",
        a: "The cane should be held on the weaker side", 
        b: "The cane should be held on the stronger side", 
        c: "The resident should use a wheelchair", 
        d: "The resident should not get out of bed", 
        correct: "b",
            },
        { 
        question: "When a resident uses a cane, walker, or crutches, the nursing assistant should",
        a: "Stay on the resident’s stronger side", 
        b: "Stay on the resident’s weaker side", 
        c: "Walk in front of the resident", 
        d: "Walk behind the resident", 
        correct: "b",
            },
        { 
        question: "Orthotic devices are used to",
        a: "Keep joints in correct position and improve function", 
        b: "Assist residents with ADLs", 
        c: "Maintain proper body alignment", 
        d: "Prevent rubbing, irritation, and pressure injuries", 
        correct: "a",
            },
        { 
        question: "Passive range of motion exercises are done",
        a: "When a resident cannot move on her own", 
        b: "By the resident herself", 
        c: "By the resident with some help and support from the nursing assistant", 
        d: "By a doctor or physical therapist only", 
        correct: "a",
            },
        { 
        question: "When assisting with ROM exercises, the nursing assistant should begin at the and work her way the body.",
        a: "Abdomen, up", 
        b: "Feet, up", 
        c: "Shoulders, down", 
        d: "Thighs, down", 
        correct: "c",
            },
        { 
        question: "Abduction is",
        a: "Bending a body part backward", 
        b: "Another name for the hip", 
        c: "Another name for the leg", 
        d: "Moving a body part away from the body", 
        correct: "d",
            },
        { 
        question: "Bending a body part is called",
        a: "Extension", 
        b: "Rotation", 
        c: "Flexion", 
        d: "Supination", 
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