//console.log("Hello NicK");
const quizData = [
 
    {
        question: "One thing that would make a positive impression on a family visiting a facility is",
        a: "Lack of physical, occupational, and speech therapists available", 
        b: "No interpreters available who speak the resident’s native language", 
        c: "A safe and homelike atmosphere", 
        d: "Poor results from previous inspections", 
         correct: "c",
            },
        {
        question: "Which of the following is a reason that new residents may have trouble adjusting to life in a healthcare facility?",
        a: "They will have more independence in a facility.", 
        b: "Their health is improving.", 
        c: "They have had to leave their home.", 
        d: "The other residents and staff are people they already know well.", 
         correct: "c",
            },
        {
        question: "A good way for a nursing assistant to help a new resident adjust to life in the facility is to",
        a: "Think about how it would feel to have to move into a facility", 
        b: "Tell the resident how much work it is to care for him", 
        c: "Cover up any mistakes to make the resident feel more confident about the facility’s care", 
        d: "Push the resident to join in activities even if he says he does not want to", 
         correct: "a",
            },
        {
        question: "One way for a nursing assistant to make a positive first impression on a new resident is to",
        a: "Place his personal items where the NA thinks they look best", 
        b: "Get the admission process completed as quickly as possible", 
        c: "Allow the resident to introduce himself to everyone in the facility", 
        d: "Prepare his room before his arrival so that he feels expected and welcome", 
         correct: "d",
            },
        {
        question: "When beginning to weigh a resident, the scale should be balanced at",
        a: "Zero", 
        b: "Five pounds", 
        c: "Ten pounds", 
        d: "Negative two pounds", 
         correct: "a",
            },
        {
        question: "There are inches in a foot.",
        a: "10", 
        b: "12", 
        c: "15", 
        d: "20", 
         correct: "b",
            },
        {
        question: "The permanent and painful shortening of a muscle, tendon, or ligament is called a(n)",
        a: "Abdominal girth", 
        b: "Sternal notch", 
        c: "Contracture", 
        d: "Demi-span", 
         correct: "c",
            },
        {
        question: "How will a nursing assistant measure the height of a resident who cannot get out of bed?",
        a: "The NA will use a scale.", 
        b: "The NA will use a tape measure.", 
        c: "The NA will estimate height by looking at the resident.", 
        d: "The NA will not be able to measure height.", 
         correct: "b",
            },
        {
        question: "What is a nursing assistant’s responsibility during an in-house transfer of a resident?",
        a: "The NA decides that the resident must be transferred.", 
        b: "The NA must keep the fact that a transfer will occur a secret.", 
        c: "The NA packs all of the resident’s belongings.", 
        d: "The NA tells the resident’s roommate about the transfer.", 
         correct: "c",
            },
        { 
        question: "Which of the following would be the best response by the nursing assistant if a resident wants to leave a facility against medical advice (AMA)?",
        a: "The NA should counsel the resident as to why he should not leave the facility.", 
        b: "The NA should remind the resident that he is very sick and needs to stay until his family arrives.", 
        c: "The NA should report to the charge nurse.", 
        d: "The NA should restrain the resident to prevent him from leaving.", 
         correct: "c",
            },
        { 
        question: "How can a nursing assistant help make discharge easier for a resident?",
        a: "Allow him to pack his belongings himself", 
        b: "Be positive and reassuring about the change", 
        c: "Let the resident walk to the car by himself", 
        d: "Recommend exercises for the resident to do after discharge", 
         correct: "b",
            },
        { 
        question: "A nursing assistant’s responsibility for the resident during discharge ends",
        a: "When the doctor writes the discharge order", 
        b: "When the resident’s belongings are packed", 
        c: "When the resident is seated in the vehicle", 
        d: "When the vehicle’s doors are closed", 
         correct: "c",
            },
        { 
        question: "In which position is the resident placed for examination of the breasts, chest, and abdomen?",
        a: "Knee-chest position", 
        b: "Lithotomy position", 
        c: "Dorsal recumbent", 
        d: "Trendelenburg position", 
         correct: "d",
            },
        {
        question: "Why might a resident need emotional support during a physical exam?",
        a: "Residents are always frightened of exams.", 
        b: "Doctors are not very sensitive to their patients’ emotions.", 
        c: "The resident has probably never had a physical exam before.", 
        d: "The resident may fear what the examiner will find.", 
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