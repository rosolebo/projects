//console.log("Hello NicK");
const quizData = [
 
    {
      
        question: "The male and female sexual reproductive glands are called",
        a: "Gonads", 
        b: "Hormones", 
        c: "Cowper’s glands", 
        d: "Fallopian tubes", 
            correct: "a",
            },
        {
        question: "Which of the following is a function of the female reproductive system?",
        a: "Manufacturing ova, estrogen, and progesterone", 
        b: "Manufacturing testosterone", 
        c: "Manufacturing sperm", 
        d: "Manufacturing insulin", 
            correct: "a",
            },
        {
        question: "Which of the following is a normal age-related change for the male reproductive system?",
        a: "The prostate gland shrinks.", 
        b: "Number and capability of sperm decreases.", 
        c: "Sexual response is faster.", 
        d: "Menopause begins.", 
            correct: "b",
            },
        {
        question: "Which of the following is a normal age-related change for the female reproductive system?",
        a: "Lung capability increases.", 
        b: "The response to vaccines decreases.", 
        c: "The amount of calcium in the body increases.", 
        d: "Vaginal walls become drier and thinner.", 
            correct: "d",
            },
        {
        question: "Sexually-transmitted infections are caused by sexual contact with an infected person. Sexual contact includes which of the following?",
        a: "Mouth-to-mouth kissing", 
        b: "Contact of hands with the breasts", 
        c: "Holding hands", 
        d: "Contact of the mouth with the genitals", 
            correct: "d",
            },
        {
        question: "A person with cannot be treated with antibiotics or cured, and may have repeated outbreaks of the disease for the rest of his or her life.",
        a: "Chlamydia", 
        b: "Genital herpes", 
        c: "Gonorrhea", 
        d: "Syphilis", 
            correct: "b",
            },
        {
        question: "A man with benign prostatic hypertrophy may have difficulty with",
        a: "Walking", 
        b: "Reproducing", 
        c: "Urinating", 
        d: "Ejaculating", 
            correct: "c",
            },
        {
        question: "Which of the following is true of sexual needs in the elderly?",
        a: "As a person ages, she completely loses interest in sex.", 
        b: "Impotence is a normal change of aging.", 
        c: "Vaginal dryness cannot be treated.", 
        d: "Lack of privacy in a facility can affect sexual activity.", 
            correct: "d",
            },
        {
        question: "If a nursing assistant encounters any sexual situation between two consenting adult residents, she should",
        a: "Ask the residents to stop", 
        b: "Tell the residents how cute they are", 
        c: "Provide privacy and leave the area", 
        d: "Tell the residents’ friends and families what she saw", 
            correct: "c",
            },
        { 
        question: "When does menopause occur in females?",
        a: "12 months after a woman’s last menstrual period", 
        b: "Once a woman has reached 60 years of age", 
        c: "When a woman decides that she does not want children", 
        d: "3 months after giving birth", 
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