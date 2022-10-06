//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Immunity that protects the body from dis- ease in general and is the first line of defense against invading bacteria or organisms is called:",
        a: "Specific immunity", 
        b: "Nonspecific immunity", 
        c: "Active immunity", 
        d: "Passive immunity", 
        correct: "b",
            },
        {
        question: "With immunity, a person is given the antibodies needed to defend against an antigen.",
        a: "Acquired", 
        b: "Nonspecific", 
        c: "Deficient", 
        d: "Passive", 
        correct: "d",
            },
        {
        question: "Which of the following is a function of the immune system?",
        a: "Maintains blood sugar levels", 
        b: "Regulates the production of hormones", 
        c: "Protects against the invasion of foreign substances and pathogens", 
        d: "Regulates body temperature", 
        correct: "c",
            },
        {
        question: "A normal age-related change for the immune and lymphatic systems is the",
        a: "Immune system weakens", 
        b: "Antibody response speeds up", 
        c: "Number of T-cells increases", 
        d: "Response to vaccines increases", 
        correct: "a",
            },
        {
        question: "HIV can be transmitted",
        a: "To a nursing assistant who touches an infected resident’s telephone", 
        b: "To anyone who uses the same toilet as an infected person", 
        c: "To people who hug an infected person when that person has a fever", 
        d: "To a healthcare worker who comes into contact with a contaminated needle", 
        correct: "d",
            },
        {
        question: "Which of the following is a sign or symptom of the beginning stages of HIV infection?",
        a: "Poor circulation", 
        b: "Damage to the eyes", 
        c: "Open sores on the penis", 
        d: "Flu-like symptoms", 
        correct: "d",
            },
        {
        question: "Which of the following statements is true of HIV or AIDS?",
        a: "AIDS can be cured.", 
        b: "Having unprotected sex puts a person at a high risk for HIV/AIDS.", 
        c: "Standard Precautions do not need to be practiced on a person who has AIDS.", 
        d: "A person with HIV can be fired because of the disease.", 
        correct: "b",
            },
        {
        question: "A resident who has AIDS and has an infection of the mouth may need to eat food that is",
        a: "Spicy", 
        b: "Soft or pureed", 
        c: "Hot", 
        d: "Acidic", 
        correct: "b",
            },
        {
        question: "A resident who has AIDS and has nausea and is vomiting should",
        a: "Eat small, frequent meals", 
        b: "Eat quickly", 
        c: "Not drink liquids", 
        d: "Not eat at all", 
        correct: "a",
            },
        { 
        question: "The BRAT diet is helpful for",
        a: "Diarrhea", 
        b: "Weight gain", 
        c: "Weight loss", 
        d: "Numbness and tingling", 
        correct: "a",
            },
        { 
        question: "A tumor that is cancerous is called a(n) tumor.",
        a: "Opportunistic", 
        b: "Benign", 
        c: "Malignant", 
        d: "Ballistic", 
        correct: "c",
            },
        {
        question: "_____is a method of treatment for cancer that uses high-energy waves to attempt to destroy cancer cells in a specific area.",
        a: "Radiation therapy", 
        b: "Chemotherapy", 
        c: "Hormone therapy", 
        d: "Immunotherapy", 
        correct: "a",
            },
        { 
        question: "The key treatment for malignant tumors of the skin, breast, and colon is",
        a: "Surgery", 
        b: "Chemotherapy", 
        c: "Radiation", 
        d: "Diet and exercise", 
        correct: "a",
            },
        { 
        question: "When is a resident with cancer most likely to suffer from nausea, vomiting, diarrhea, hair loss, and decreased resistance to infection?",
        a: "Right after surgery", 
        b: "Just before the cancer is diagnosed", 
        c: "When the resident is near death", 
        d: "When undergoing chemotherapy", 
        correct: "d",
            },
        { 
        question: "Which of the following is a good idea for a nursing assistant who is communicating with a resident who has cancer?",
        a: "The NA should insist that the resident tell her what he is going through.", 
        b: "The NA should listen to the resident if he feels like talking.", 
        c: "If the resident is worried, the NA should tell him, “It’ll all be fine.”", 
        d: "The NA should tell the resident that her grandmother beat cancer and she is sure the resident will, too.", 
        correct: "b",
            },
        { 
        question: "Which of the following is helpful when providing skin care for a resident with cancer?",
        a: "Change positions at least every four hours.", 
        b: "Remove markings for radiation therapy each time you bathe the resident.", 
        c: "Avoid applying lotion to areas receiving radiation therapy.", 
        d: "Keeping the skin wet helps with the side effects of radiation therapy.", 
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