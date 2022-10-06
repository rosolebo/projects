//console.log("Hello NicK");
const quizData = [
 
    {
        question: "What is another term for urinating?",
        a: "Digesting", 
        b: "Eliminating", 
        c: "Ingesting", 
        d: "Voiding", 
        correct: "d",
            },
        {
        question: "Normal qualities of urine include",
        a: "Pink or red color", 
        b: "Cloudiness when freshly voided", 
        c: "Clear or transparent color and a faint smell", 
        d: "Presence of protein or glucose", 
        correct: "c",
            },
        {
        question: "Which of the following needs to be reported to the nurse?",
        a: "Burning or pressure when urinating", 
        b: "Urinary output of 1200 to 1500 mL per day", 
        c: "Pale yellow urine", 
        d: "Clear urine", 
        correct: "a",
            },
        {
        question: "Which of the following statements is true of urination?",
        a: "Indwelling catheters do not affect muscle tone.", 
        b: "Fluids high in sodium increase urinary output.", 
        c: "A lack of privacy can affect urination, as can stress.", 
        d: "The bladder holds more urine as people age, causing them to urinate less frequently.", 
        correct: "c",
            },
        {
        question: "A way for a nursing assistant to promote normal elimination for residents is to",
        a: "Encourage Kegel exercises", 
        b: "Encourage residents to finish urinating as quickly as possible", 
        c: "Encourage female residents to lie flat on their backs when urinating", 
        d: "Discourage fluids for residents who urinate too frequently", 
        correct: "a",
            },
        {
        question: "What is one reason why women are more likely than men to have urinary tract infections?",
        a: "Women's gonads have a different gonads", 
        b: "Women's kidneys do not filter blood properly", 
        c: "Women have a shorter urethra", 
        d: "Women have urinary incontinence", 
        correct: "c",
            },
        {
        question: "When providing perineal care for a female resident, the nursing assistant should",
        a: "Wipe from front to back", 
        b: "Wipe from back to front", 
        c: "Wipe the anal area first", 
        d: "Use the same area of the washcloth for each stroke", 
        correct: "a",
            },
        {
        question: "The best position for men to urinate is",
        a: "Sitting", 
        b: "Standing", 
        c: "Lying", 
        d: "Crouching", 
        correct: "b",
            },
        {
        question: "One way for women to prevent UTIs is to",
        a: "Reduce fluid intake to minimize work for the bladder", 
        b: "Drink plenty of water and other fluids", 
        c: "Urinate less often", 
        d: "Take baths rather than showers", 
        correct: "b",
            },
        {
        question: "_____is an artificial means of removing the body’s waste products.",
        a: "Chronic renal failure", 
        b: "Kidney dialysis", 
        c: "Urine retention", 
        d: "Nephritis", 
        correct: "b",
            },
        { 
        question: "Which of the following is a guideline for dealing with urinary incontinence?",
        a: "The nursing assistant should let room-mates know when residents have been incontinent so that they can help notify the care team when incontinence occurs.", 
        b: "The nursing assistant should tell residents’ families about episodes of incontinence so they can encourage residents to do better.", 
        c: "The nursing assistant should change wet or soiled linens or incontinence briefs immediately.", 
        d: "The nursing assistant should not offer fluids because this will help lessen episodes of incontinence.", 
        correct: "c",
            },
        { 
        question: "A(n) catheter is inserted to drain urine from the bladder several times a day and is removed each time after urine is drained.",
        a: "Straight", 
        b: "Indwelling", 
        c: "Condom", 
        d: "Texas", 
        correct: "a",
            },
        { 
        question: "Guidelines for the nursing assistant to give proper catheter care include",
        a: "Making sure the drainage bag hangs higher than the level of the hips or bladder", 
        b: "Disconnecting the catheter when positioning or transferring the resident", 
        c: "Keeping the genital area clean to prevent infection", 
        d: "Hanging the drainage bag from the bedrail", 
        correct: "c",
            },
        { 
        question: "A urine specimen can be collected any time the resident voids.",
        a: "Routine", 
        b: "Clean-catch", 
        c: "24-hour", 
        d: "Sterile", 
        correct: "a",
            },
        { 
        question: "Which type of urine specimen does not include the first and last urine in the sample?",
        a: "Routine", 
        b: "Clean-catch", 
        c: "24-hour", 
        d: "36-hour", 
        correct: "b",
            },
        { 
        question: "People who have diabetes may have, chemical substance(s) produced when the body burns fat for energy or fuel, in their urine.",
        a: "Reagents", 
        b: "Glucose", 
        c: "Insulin", 
        d: "Ketones", 
        correct: "d",
            },
        { 
        question: "A resident should be offered a bedpan, urinal, or trip to the bathroom about minutes after fluids are consumed.",
        a: "10", 
        b: "30", 
        c: "45", 
        d: "60", 
        correct: "b",
            },
        { 
        question: "Which of the following is true of bladder retraining?",
        a: "The NA should encourage the resident to drink plenty of fluids even if incontinence is a problem.", 
        b: "The NA does not need to keep a record of the resident’s bladder habits.", 
        c: "The NA does not need to wear gloves when handling body wastes.", 
        d: "The NA should let the resident know when he is taking too long to urinate.", 
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