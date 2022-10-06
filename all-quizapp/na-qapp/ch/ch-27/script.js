//console.log("Hello NicK");
const quizData = [
 
    {
        question: "What does palliative care involve?",
        a: "The resident’s recovery", 
        b: "Comfort and managing symptoms", 
        c: "Teaching the resident to care for himself", 
        d: "Curing the resident’s illness", 
        correct: "b",
            },
        {
        question: "When is hospice care usually ordered by a doctor?",
        a: "When a diagnosis of an illness is made", 
        b: "When the long-term care facility can no longer care for the resident", 
        c: "When the resident requests it", 
        d: "When a person has six months or less to live", 
        correct: "d",
            },
        {
        question: "Ms. Fleming, a resident who has recently been diagnosed with terminal cancer, has accused the nursing assistants in her unit of taking poor care of her and causing her disease. In which stage of grief is Ms. Fleming?",
        a: "Denial", 
        b: "Anger", 
        c: "Bargaining", 
        d: "Depression", 
        correct: "a",
            },
        {
        question: "Mr. Parker has always been cheerful and optimistic, but since his diagnosis of Alzheimer’s disease, he has been quiet and withdrawn. He does not seem to enjoy any of his favorite activities and rarely talks to anyone. In which stage of grief is Mr. Parker?",
        a: "Depression", 
        b: "Bargaining", 
        c: "Denial", 
        d: "Acceptance", 
        correct: "a",
            },
        {
        question: "Mrs. Levine, a resident, prays about her terminal illness. She promises God that she will make peace with her sister, whom she has not seen in 20 years, if she is allowed to live. Which stage of grief is Mrs. Levine going through?",
        a: "Denial", 
        b: "Anger", 
        c: "Bargaining", 
        d: "Acceptance", 
        correct: "c",
            },
        {
        question: "A terminally ill resident, Mr. Castillo, visits with his family. He discusses his funeral arrangements with them. He lets them know that he is concerned about their well-being after he is gone. He says he wants to spend as much time as possible with them before he dies. Mr. Castillo is going through the stage of grief.",
        a: "Denial", 
        b: "Anger", 
        c: "Bargaining", 
        d: "Acceptance", 
        correct: "d",
            },
        {
        question: "Which of the following is part of The Dying Person’s Bill of Rights?",
        a: "I have the right to be told what to believe about life after death.", 
        b: "I have the right to be cared for by someone who will always tell me what she thinks I want to hear.", 
        c: "I have the right to have my questions answered honestly.", 
        d: "I have the right to be treated with forced cheerfulness.", 
        correct: "c",
            },
        {
        question: "Which of the following is true of a resident who is dying?",
        a: "Residents will always be able to express when they are in pain.", 
        b: "Residents should have their rooms brightly lit.", 
        c: "Residents should lie flat on their backs to ease problems with breathing.", 
        d: "Residents should be fed slowly to help prevent choking and aspiration.",
        correct: "d",
            },
        {
        question: "Which is generally the last sense to leave a person?",
        a: "Sight", 
        b: "Hearing", 
        c: "Touch", 
        d: "Smell", 
        correct: "b",
            },
        { 
        question: "One way for nursing assistants to help meet the psychosocial and spiritual needs of a dying resident is to",
        a: "Leave the resident alone as much as possible", 
        b: "Listen more, talk less", 
        c: "Share their religious beliefs with the resident", 
        d: "Tell the resident’s family things that the", 
        correct: "b",
            },
        { 
        question: "Which of the following is a sign of approaching death?",
        a: "Low blood pressure", 
        b: "Sharper vision", 
        c: "Warm, dry skin", 
        d: "Heightened sense of touch", 
        correct: "a",
            },
        { 
        question: "One change that might occur in the body after death is",
        a: "The mouth closes", 
        b: "The body will not have a pulse, respiration, or blood pressure", 
        c: "The eyes close", 
        d: "The pupils constrict", 
        correct: "b",
            },
        { 
        question: "Nursing assistants can help a resident’s family and friends deal with the resident’s death by",
        a: "Trying to calm any family members or friends who are upset with staff", 
        b: "Asking them not to cry and reassuring them that they will get over it", 
        c: "Listening to them if they want to talk", 
        d: "Not showing any feelings for the resident who has died", 
        correct: "c",
            },
        { 
        question: "Postmortem care is",
        a: "Examination of a body by a pathologist to try to determine the cause of death", 
        b: "Meeting the emotional needs of the resident’s family and friends", 
        c: "Grief counseling for staff after a resident’s death", 
        d: "Care of the body after death", 
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