//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Most of the accidents in a facility are related to",
        a: "Falls", 
        b: "Burns", 
        c: "Poisoning", 
        d: "Choking", 
        correct: "a",
            },
        {
        question: "Which of the following is the best way that a nursing assistant can help prevent falls?",
        a: "Clear walkways of clutter", 
        b: "Keep lights low", 
        c: "Move call lights further away from residents", 
        d: "Leave spills for housekeeping to clean", 
        correct: "a",
            },
        {
        question: "One way to prevent burns and scalds is to",
        a: "Place hot drinks on the edges of tables so that they will be easier to reach", 
        b: "Serve residents drinks while they are standing", 
        c: "Leave warm water applications on for 30 minutes at a time", 
        d: "Check water temperature before giving a bath or shower", 
        correct: "d",
            },
        {
        question: "When should a nursing assistant identify a resident?",
        a: "After giving care", 
        b: "When collecting meal trays", 
        c: "When shifts change", 
        d: "Before helping with feeding", 
        correct: "d",
            },
        {
        question: "How should a resident be positioned for eating?",
        a: "Lying flat on his back", 
        b: "Reclining at a 45-degree angle", 
        c: "Sitting as upright as possible", 
        d: "Lying on his side with his head propped up", 
        correct: "c",
            },
        {
        question: "What information does a Safety Data Sheet (SDS) contain?",
        a: "Costs of the chemical", 
        b: "Comparisons with other chemicals", 
        c: "Names of other facilities using the chemical", 
        d: "Description of emergency response actions", 
        correct: "d",
            },
        {
        question: "Which of the following needs to be disposed of in a biohazard container?",
        a: "Trash", 
        b: "Sharps", 
        c: "Aluminum cans", 
        d: "Food", 
        correct: "b",
            },
        {
        question: "To maintain proper body mechanics while lifting or carrying an object, a nursing assistant should",
        a: "Hold the object out and away from her body", 
        b: "Face the object or person she is moving", 
        c: "Twist at the waist as she picks up the object", 
        d: "Try to keep her center of gravity as high as possible", 
        correct: "a",
            },
        {
        question: "One way to use proper body mechanics on the job is to",
        a: "Stand back from an object while lifting it", 
        b: "Keep feet close together when lifting", 
        c: "Use the muscles of the lower back to lift", 
        d: "Bend at the knees to lift something", 
        correct: "d",
            },
        { 
        question: "Restraints may be used",
        a: "Whenever it is convenient for the facility staff", 
        b: "When a resident is being uncooperative", 
        c: "When there are not enough staff members to watch all the residents", 
        d: "Only with a doctor’s order", 
        correct: "d",
            },
        {
        question: "Which of the following statements is true of restraints?",
        a: "People tend to respond better to restraint alternatives than to restraints.", 
        b: "Laws allow the use of restraints when a facility is short-staffed.", 
        c: "Using restraints does not cause negative effects.", 
        d: "Restraint-free care means a facility uses restraints only for disciplining residents.", 
        correct: "a",
            },
        { 
        question: "An example of a restraint alternative is",
        a: "Tying the resident to the bed", 
        b: "Removing the resident’s call light", 
        c: "Giving frequent help with elimination", 
        d: "Locking the resident’s door from the outside", 
        
        correct: "c",
            },
        { 
        question: "Restraint-free care means that",
        a: "Restraints are only used if a resident is in danger of hurting himself or others", 
        b: "Restraints are only used with a doctor’s order", 
        c: "Restraints are only used when restraint alternatives fail", 
        d: "Restraints are not kept or used at the facility for any reason", 
        correct: "d",
            },
        { 
        question: "At least every hours, a restraint must be removed and care must be provided.",
        a: "3", 
        b: "2", 
        c: "5", 
        d: "4", 
        correct: "b",
            },
        { 
        question: "Why does working with oxygen require special safety precautions?",
        a: "Oxygen is an expensive medication.", 
        b: "Oxygen is a dangerous fire hazard.", 
        c: "Oxygen levels must be adjusted often.", 
        d: "Oxygen equipment is very fragile.", 
        correct: "b",
            },
        { 
        question: "Which of the following is a flammable liquid?",
        a: "Water", 
        b: "Sweat", 
        c: "Nail polish remover", 
        d: "Urine", 
        correct: "c",
            },
        { 
        question: "Which of the following guidelines is true of working around oxygen equipment?",
        a: "The NA should not allow open flames around oxygen.", 
        b: "The NA should adjust oxygen levels when they are too high or too low.", 
        c: "The NA should replace oxygen tubing if it becomes clogged.", 
        d: "The NA should prescribe skin medication if the oxygen device is causing skin irritation.", 
        correct: "a",
            },
        { 
        question: "When caring for residents who have IVs, a nursing assistant should",
        a: "Keep the IV site dry", 
        b: "Leave the tubing kinked", 
        c: "Touch the clamp", 
        d: "Lower the IV bag below the IV site", 
        correct: "a",
            },
        { 
        question: "RACE is an acronym for a safety rule, and means",
        a: "Run to A Close Exit", 
        b: "Rescue residents, Activate alarm, Contain fire, Extinguish", 
        c: "Restore power, Activate alarm, Call fire department, Exit the building", 
        d: "Remove window, Access outside, Call for help, Extinguisher opened", 
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