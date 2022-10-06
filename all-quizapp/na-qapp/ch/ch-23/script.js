//console.log("Hello NicK");
const quizData = [
 
    {
        question: "The gland is known as the master gland because it controls the hormone production of other glands.",
        a: "Pituitary", 
        b: "Thyroid", 
        c: "Parathyroid", 
        d: "Adrenal", 
        correct: "a",
            },
        {
        question: "The function of insulin is to",
        a: "Regulate growth", 
        b: "Stimulate the growth of nervous tissue", 
        c: "Trigger the fight or flight response in the body", 
        d: "Regulate the amount of glucose available to the cells for metabolism", 
        correct: "d",
            },
        {
        question: "Which of the following is a function of the endocrine system?",
        a: "Regulates body temperature", 
        b: "Gives the body shape and structure", 
        c: "Senses and interprets messages from the environment", 
        d: "Maintains blood sugar levels", 
        correct: "d",
            },
        {
        question: "Normal age-related changes for the endocrine system include the following:",
        a: "Decrease in levels of hormones signal the onset of menopause in women", 
        b: "Testosterone levels in males increase", 
        c: "Insulin production increases", 
        d: "Body is more able to handle stress", 
        correct: "a",
            },
        {
        question: "Which of the following conditions makes a person more likely to have diabetes?",
       
        a: "The person is obese.", 
        b: "The person is malnourished.", 
        c: "The person is incontinent.", 
        d: "The person has chronic obstructive pulmonary disorder.", 
        correct: "a",
            },
        {
        question: "Diabetes can lead to which of the following complications?",
        a: "Chronic cough", 
        b: "Problems with circulation", 
        c: "Lack of appetite", 
        d: "Improved ability to perform strenuous exercise", 
        correct: "b",
            },
        {
        question: "Prediabetes can be delayed or prevented by",
        a: "Change in diet and daily exercise", 
        b: "Medication", 
        c: "Surgery", 
        d: "Increasing intake of fluids", 
        correct: "a",
            },
        {
        question: "The most common form of diabetes is",
        a: "Prediabetes", 
        b: "Type 1 diabetes", 
        c: "Type 2 diabetes", 
        d: "Hypoglycemia", 
        correct: "c",
            },
        {
        question: "Symptoms of hypothyroidism include",
        a: "Intolerance to cold", 
        b: "Bulging or protruding eyes", 
        c: "Rapid heartbeat", 
        d: "Normal menstrual periods", 
        correct: "a",
            },
        { 
        question: "A resident who has diabetes should",
        a: "Skip meals", 
        b: "Go barefoot", 
        c: "Receive careful foot care", 
        d: "Avoid exercise", 
        correct: "c",
            },
        { 
        question: "Which of the following is a guideline for safe foot care for a resident who has diabetes?",
        a: "The NA should inspect and clean the resident’s feet every day.", 
        b: "The NA should clip the resident’s toenails frequently.", 
        c: "The NA should use lotion between the toes to prevent dryness and cracking.", 
        d: "The NA should use hot water for bathing the feet to help prevent infection.", 
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