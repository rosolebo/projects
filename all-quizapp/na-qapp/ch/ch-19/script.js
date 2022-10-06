//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Oxygen-rich blood is pumped from the left ventricle via the",
        a: "Right ventricle", 
        b: "Aorta", 
        c: "Capillaries", 
        d: "Veins", 
        correct: "b",
            },
        {
        question: "About 55% of blood is made up of.",
        a: "Erythrocytes", 
        b: "Leukocytes", 
        c: "Plasma", 
        d: "Platelets", 
        correct: "c",
            },
        {
        question: "Which of the following is one of the functions that the circulatory system performs?",
        a: "Senses and interprets information from the environment", 
        b: "Cushions the brain and spinal cord", 
        c: "Allows humans to reproduce", 
        d: "Transports oxygen, nutrients, and hormones to cells", 
        
        correct: "d",
            },
        {
        question: "A normal age-related change for the circulatory system is",
        a: "The heart pumps less efficiently", 
        b: "Blood vessels widen", 
        c: "Blood vessels become more elastic", 
        d: "Blood flow increases", 
        correct: "a",
            },
        {
        question: "The medical term for high blood pressure is",
        a: "Myocardial infarction", 
        b: "Hypotension", 
        c: "Hypertension", 
        d: "Peripheral vascular disease", 
        correct: "c",
            },
        {
        question: "One way for a person to keep hypertension under control and prevent complications is to",
        a: "Take medications to increase fluid in the body", 
        b: "Increase the intake of sodium", 
        c: "Stop smoking", 
        d: "Avoid exercise", 
        correct: "c",
            },
        {
        question: "The medical term for chest pain, pressure, or discomfort is",
        a: "Myocardial ischemia", 
        b: "Angina pectoris", 
        c: "Coronary artery disease", 
        d: "Hypertension", 
        correct: "b",
            },
        {
        question: "Which of the following is true of residents who have angina?",
        a: "Residents need to reduce emotional distress as much as possible.", 
        b: "Nursing assistants need to give residents nitroglycerin.", 
        c: "Residents should eat large meals to stay satisfied.", 
        d: "Nursing assistants should encourage residents to exercise most of the time.", 
        correct: "a",
            },
        {
        question: "One component of cardiac rehabilitation is",
        a: "A diet high in sodium will be ordered", 
        b: "Resident will be discouraged from exercising", 
        c: "A stress management program will be initiated", 
        d: "Residents will be encouraged to smoke to help deal with stress", 
        correct: "c",
            },
        { 
        question: "The most common type of peripheral vascular disease (PVD) is",
        a: "Phlebitis", 
        b: "Myocardial infarction (MI)", 
        c: "Peripheral arterial disease (PAD)", 
        d: "Coronary artery disease (CAD)", 
        correct: "c",
            },
        { 
        question: "When should elastic stockings be applied?",
        a: "In the evening", 
        b: "In the morning", 
        c: "Mid-afternoon", 
        d: "After residents have finished exercising", 
        correct: "b",
            },
        { 
        question: "Residents with congestive heart failure may",
        a: "Be on a high-sodium diet", 
        b: "Take medications that cause a decrease in urinary output", 
        c: "Have a force fluids medical order", 
        d: "Need to do range of motion exercises to improve muscle tone", 
        correct: "c",
            },
        { 
        question: "The most common form of anemia is",
        a: "Iron-deficiency anemia", 
        b: "Hypoxia", 
        c: "Pernicious anemia", 
        d: "Pulmonary anemia", 
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