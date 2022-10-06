//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Which of the following types of muscle is a voluntary muscle?",
        a: "Skeletal muscle", 
        b: "Smooth muscle", 
        c: "Pulmonary muscle", 
        d: "Cardiac muscle", 
        correct: "a",
            },
        {
        question: "Which of the following is a function of the bones?",
        a: "Protecting the body from disease", 
        b: "Lending support to body structures", 
        c: "Sending messages throughout the human body", 
        d: "Pumping blood throughout the body", 
        correct: "b",
            },
        {
        question: "Normal age-related changes for the musculoskeletal system include",
        a: "Muscles weaken and lose tone", 
        b: "Bones gain calcium", 
        c: "Muscle mass increases, causing weight gain", 
        d: "Joints become more flexible", 
        correct: "a",
            },
        {
        question: "Weakening, wasting away, and decrease in size of a muscle is called",
        a: "Dystrophy", 
        b: "Atrophy", 
        c: "Contracture", 
        d: "Dislocation", 
        correct: "b",
            },
        {
        question: "The painful and permanent stiffening of a muscle is called",
        a: "Dystrophy", 
        b: "Atrophy", 
        c: "Contracture", 
        d: "Dislocation", 
        correct: "c",
            },
        {
        question: "Osteoporosis is caused by a lack of in the diet.",
        a: "Sodium", 
        b: "Calcium", 
        c: "Iron", 
        d: "Protein", 
        correct: "b",
            },
        {
        question: "Rheumatoid arthritis is an autoimmune ill- ness. With an autoimmune illness, the body’s system attacks normal tissue.",
        a: "Endocrine", 
        b: "Lymphatic", 
        c: "Circulatory", 
        d: "Immune", 
        correct: "d",
            },
        {
        question: "Which of the following statements is true of osteoarthritis?",
        a: "Jaw and neck are usually affected.", 
        b: "Pain and stiffness increase in cold or damp weather.", 
        c: "Antibiotics are usually the first type of medication to treat osteoarthritis.", 
        d: "Residents will not be able to perform any ADLs if they have osteoarthritis.", 
        correct: "b",
            },
        {
        question: "After an amputation, a resident may experience phantom sensation. Phantom sensation is",
        a: "Not real", 
        b: "Sensation where the limb existed", 
        c: "The inability to use a new body part", 
        d: "The desire to get rid of a new body part", 
        correct: "b",
            },
        {
        question: "Which of the following is an example of a prosthesis?",
        a: "An assistive device to assist residents with dressing", 
        b: "Handrolls to keep residents’ fingers from curling too tightly", 
        c: "Special shoes to help residents with flat feet", 
        d: "An artificial arm to replace an arm that has been lost", 
        correct: "d",
            },
        {
        question: "Before applying a prosthesis, the area must be",
        a: "Dry", 
        b: "Damp", 
        c: "Cold", 
        d: "Warm", 
        correct: "a",
            },
        {
        question: "A fracture in which the skin is open and thebone may come through the skin is a(n)",
        a: "Closed fracture", 
        b: "Open fracture", 
        c: "Greenstick fracture", 
        d: "Compression fracture",
        correct: "b",
            }, 
        { 
        question: "Which of the following statements is true of cast care?",
        a: "Keep the cast wet or damp.", 
        b: "Use a sharp object to remove items that have fallen inside the cast.", 
        c: "Elevate an extremity that is in a cast.", 
        d: "Use warm water and soap to wash the cast when it gets dirty.", 
        correct: "c",
            },
        { 
        question: "A full weight-bearing order for a resident with a total hip replacement means that",
        a: "The resident is able to support some body weight on one or both legs", 
        b: "The resident is unable to support any body weight on one or both legs", 
        c: "The resident can bear full weight on both legs", 
        d: "The affected hip needs to be kept in abduction", 
        correct: "c",
            },
        { 
        question: "After a total hip replacement, the hip cannot be bent or flexed more than degrees.",
        a: "45", 
        b: "75", 
        c: "90", 
        d: "100", 
        correct: "c",
            },
        { 
        question: "Fluids are encouraged for residents who have had a total knee replacement to help prevent",
        
        a: "Myocardial infarctions", 
        b: "Urinary tract infections", 
        c: "Depression", 
        d: "Side effects of medication", 
        correct: "b",
            },
        { 
        question: "Elastic bandages are commonly used to",
        a: "Treat reddened skin", 
        b: "Keep dressings in place", 
        c: "Cover cuts in the skin", 
        d: "Stop numbness and tingling", 
        correct: "b",
            },
        { 
        question: "Which of the following is a nursing assistant’s responsibility regarding traction?",
        
        a: "The nursing assistant should adjust weights if the resident’s limb starts to lower.", 
        b: "The nursing assistant should keep the traction unit’s weights flat on the floor.", 
        c: "The nursing assistant should give pain medication if traction is causing the resident pain.", 
        d: "The nursing assistant should report to the nurse if the weights move.",
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