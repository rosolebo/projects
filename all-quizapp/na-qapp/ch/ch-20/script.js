//console.log("Hello NicK");
const quizData = [
 
    {
        question: "The acts like a lid to shut off the larynx during the swallowing process.",
        a: "Trachea", 
        b: "Epiglottis", 
        c: "Bronchi", 
        d: "Alveoli", 
         correct: "b",
            },
        {
        question: "What is the function of the larynx?",
        a: "Enables speech", 
        b: "Blocks food from entering the trachea", 
        c: "Allows for passage of air and food", 
        d: "Transfers air to the lungs", 
         correct: "a",
            },
        {
        question: "The process of breathing in and out is called",
        a: "Inspiration", 
        b: "Respiration", 
        c: "Expiration", 
        d: "Expansion", 
         correct: "b",
            },
        {
        question: "Which of the following is a function of the respiratory system?",
        a: "Regulates body temperature", 
        b: "Pumps blood throughout the body", 
        c: "Supplies oxygen to body cells", 
        d: "Gives the body shape and structure", 
         correct: "c",
            },
        {
        question: "Normal age-related changes for the respiratory system include",
        a: "Lung strength decreases", 
        b: "Airways become more elastic", 
        c: "Cough becomes stronger", 
        d: "Oxygen in the blood increases", 
         correct: "a",
            },
        {
        question: "Residents with COPD have trouble with",
        a: "Breathing", 
        b: "Urination", 
        c: "Losing weight", 
        d: "Vision", 
         correct: "a",
            },
        {
        question: "How should a resident with COPD be positioned?",
        a: "Flat on his back", 
        b: "Sitting upright", 
        c: "Lying on his stomach", 
        d: "Lying on his side", 
         correct: "b",
            },
        {
        question: "What should a resident who has asthma avoid?",
        a: "Inhalers", 
        b: "Talking", 
        c: "Fluids", 
        d: "Strong smells", 
         correct: "d",
            },
        {
        question: "A person with TB infection does not show symptoms and cannot infect others; a person with TB shows symptoms of the illness and can spread it to others.",
        a: "Latent, disease", 
        b: "Active, latent", 
        c: "MDR, active", 
        d: "Latent, MDR-TB", 
         correct: "a",
            },
        { 
        question: "Why is it important for a resident with TB to take all of the prescribed medication?",
        a: "The medication is very expensive.", 
        b: "The healthcare facility loses Medicare funding if all of the medication is not taken.",
        c: "Failure to finish the medication makes the person more likely to spread the disease to others.", 
        d: "Failure to take all of the medication prescribed can weaken the person’s musculoskeletal system.", 
         correct: "c",
            },
        { 
        question: "Which of the following guidelines is true of working around oxygen equipment?",
        a: "Nursing assistants should not allow open flames around oxygen.", 
        b: "Nursing assistants should adjust oxygen levels when they are too high or too low.", 
        c: "Nursing assistants should replace oxygen tubing if it becomes clogged.", 
        d: "Nursing assistants should prescribe a new oxygen delivery device if the current one is causing skin problems.", 
         correct: "a",
            },
        { 
        question: "The best time to collect a sputum specimen is",
        a: "Early in the morning", 
        b: "After the resident has eaten a meal", 
        c: "Right before bedtime", 
        d: "Right before lunch", 
         correct: "a",
            },
        { 
        question: "What is a possible benefit of using an incentive spirometer?",
        a: "Increasing heart strength", 
        b: "Strengthening back muscles", 
        c: "Opening nasal passages", 
        d: "Helping clear the lungs", 
         correct: "d",
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