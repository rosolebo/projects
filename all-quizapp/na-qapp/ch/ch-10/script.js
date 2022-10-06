//console.log("Hello NicK");
const quizData = [
    {
        question: "Which of the following is true of sleep?",
        a: "The elderly usually go to sleep faster than other groups.", 
        b: "The elderly are more able to tolerate sleep deprivation than other groups.", 
        c: "Lack of sleep can cause decreased mental function.", 
        d: "People can live in good health even without much sleep.", 
                correct: "c",
            },
        {
        question: "The circadian rhythm is",
        a: "A natural period of rest for the mind and body", 
        b: "Deep sleep that helps the body to renew", 
        c: "The 24-hour, day-night cycle", 
        d: "All of the natural biorhythms of the body", 
                correct: "c",
            },
        {
        question: "Sleep disorders are called",
        a: "Insomnias", 
        b: "Parasomnias", 
        c: "Somnambulisms", 
        d: "Bruxisms", 
                correct: "b",
            },
        {
        question: "One dietary habit that a nursing assistant can encourage to help residents sleep better is",
        a: "Limiting caffeine intake", 
        b: "Eating heavy meals before bedtime", 
        c: "Eating foods high in sugar", 
        d: "Serving meals later at night", 
                correct: "a",
            },
        {
        question: "Lack of sleep can cause",
        a: "Increased mental function", 
        b: "Increased reaction time", 
        c: "Increased immune system function", 
        d: "Increased irritability", 
        correct: "d",
            },
        {
        question: "One way for a nursing assistant to be respectful to a resident in his room is to",
        a: "Allow the resident to clean the room himself", 
        b: "Always knock and wait for permission before entering the room", 
        c: "Rearrange the resident’s personal items so that they look better", 
        d: "Ignore any safety hazards in the room", 
                correct: "b",
            },
        {
        question: "The bedside stand is used for",
        a: "Linen storage", 
        b: "Serving meals", 
        c: "Storing equipment", 
        d: "Storing valuables", 
                correct: "c",
            },
        {
        question: "What can an overbed table be used for?",
        a: "Placement of dirty linens", 
        b: "Placement of bedpans", 
        c: "Placement of meals", 
        d: "Placement of urinals", 
                correct: "c",
            },
        {
        question: "Why is disposable equipment used in health- care facilities?",
        a: "It is less expensive.", 
        b: "It prevents the spread of microorganisms.", 
        c: "It makes nursing assistants’ jobs easier.", 
        d: "It is safer.", 
                correct: "b",
            },
        { 
        question: "An example of disposable equipment is",
        a: "An autoclave", 
        b: "An electric razor", 
        c: "A sphygmomanometer", 
        d: "Gloves", 
        correct: "d",
            },
        { 
        question: "When leaving a resident’s room, a nursing assistant should",
        a: "Leave the unit tidy", 
        b: "Move the resident’s belongings", 
        c: "Leave spills for the next shift", 
        d: "Lock the resident’s door", 
                correct: "a",
            },
        { 
        question: "Where should the call light be placed when a nursing assistant leaves a resident’s room?",
        a: "On the bedside table beside the telephone", 
        b: "Next to the television remote", 
        c: "Within the resident’s reach", 
        d: "On a chair next to the resident’s bed", 
                correct: "c",
            },
        { 
        question: "When must a unit be completely cleaned and disinfected?",
        a: "Every day", 
        b: "When the resident has visitors", 
        c: "When a resident is transferred, discharged, or dies", 
        d: "When a resident has a sleep disorder", 
                correct: "c",
            },
        { 
        question: "Which of the following statements is true of linen?",
        a: "Linen should be carried close to the nursing assistant’s uniform.", 
        b: "Linen should be shaken to remove wrinkles.", 
        c: "Linen can be taken from one resident’s room into another resident’s room.", 
        d: "Dirty linen should be removed by rolling it away from the nursing assistant.", 
                correct: "d",
            },
        { 
        question: "A resident who is at risk for pressure injuries may have",
        a: "An alternating pressure mattress", 
        b: "A bariatric bed", 
        c: "An electric bed", 
        d: "A closed bed", 
                correct: "a",
            },
        { 
        question: "Which of the following terms describes a bed that is completely made with the bedspread and blankets in place?",
        a: "Closed bed", 
        b: "Open bed", 
        c: "Occupied bed", 
        d: "Unoccupied bed", 
                correct: "a",
            },
        { 
        question: "A(n) bed is made so that it can easily accept residents who must return to bed on stretchers or gurneys.",
        a: "Open", 
        b: "Closed", 
        c: "Surgical", 
        d: "Occupied", 
                correct: "c",
            },
        { 
        question: "The branch of medicine that deals with the prevention and treatment of obesity is",
        a: "Obstetrics", 
        b: "Bariatrics", 
        c: "Pediatrics", 
        d: "Dietetics", 
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