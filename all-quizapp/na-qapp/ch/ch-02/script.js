//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Which of the following statements is true of ethics?",
        a: "Ethics are rules set by the government to protect people.", 
        b: "Ethics are the knowledge of what is right and wrong.", 
        c: "Misdemeanors are examples of ethics.", 
        d: "Ethics do not apply to healthcare workers.", 
        correct: "b",
            },
        {
        question: "Which of the following statements is true of criminal laws?",
        a: "They protect society from harmful people or organizations.", 
        b: "They relate to resolving disputes between individuals.", 
        c: "They include any crime which is not a felony.", 
        d: "They are the code of proper behavior and courtesy in a certain setting.", 
        correct: "a",
            },
        {
        question: "Which of the following is an example of professional and ethical behavior by a nursing assistant?",
        a: "Keeping quiet if he makes a mistake", 
        b: "Documenting care accurately and promptly", 
        c: "Telling his friend details about the residents he works with", 
        d: "Rushing a resident through tasks if there is not much time left in the nursing assistant’s shift", 
        correct: "b",
            },
        {
        question: "Which of the following is an example of unprofessional behavior by a nursing assistant?",
        a: "Graciously accepting a gift from a favorite resident", 
        b: "Reporting all abuse or suspected abuse of residents", 
        c: "Coming to work every day on time", 
        d: "Being positive, pleasant, and tactful", 
        correct: "a",
            },
        {
        question: "A code of ethics revolves around",
        a: "Getting tasks done as quickly as possible", 
        b: "Controlling costs in the facility", 
        c: "Valuing residents and giving ethical care", 
        d: "Sharing opinions and personal values with residents", 
        correct: "c",
            },
        {
        question: "An example of ethical behavior by a nursing assistant is",
        a: "Keeping a resident’s information confidential", 
        b: "Not telling anyone when a mistake is made", 
        c: "Pretending to be a nurse in order to get residents to be more cooperative", 
        d: "Letting a resident know that the nursing assistant is having a bad day", 
        correct: "a",
            },
        {
        question: "The Omnibus Budget Reconciliation Act (OBRA) was passed as a response to",
        a: "Lack of funding for long-term care facilities", 
        b: "Reports of abuse and poor care in long- term care facilities", 
        c: "Complaints from long-term care facility staff about resident behavior", 
        d: "Nursing assistants being unable to pass competency examinations", 
        correct: "b",
            },
        {
        question: "How many hours of training does OBRA require for nursing assistants?",
        a: "At least 150 hours", 
        b: "At least 100 hours", 
        c: "At least 75 hours", 
        d: "At least 50 hours", 
        correct: "c",
            },
        {
        question: "Which of the following behaviors promotes Residents’ Rights?",
        a: "Deciding which clothing a resident should wear if she takes too long to decide for herself", 
        b: "Letting residents know when they are eating too slowly", 
        c: "Providing privacy during all care procedures", 
        d: "Restricting visitors for uncooperative residents", 
        correct: "c",
            },
        { 
        question: "Which of the following behaviors violates Residents’ Rights?",
        a: "A nursing assistant tells stories about her favorite residents to her family.", 
        b: "A nursing assistant helps a resident resolve a complaint.", 
        c: "A nursing assistant informs a resident in advance about a change of roommate.", 
        d: "A nursing assistant encourages a resident to choose her clothing for the day.", 
        correct: "a",
            },
        {
        question: "____means purposefully causing physical, mental, emotional, or financial pain or injury to someone.",
        a: "Abuse", 
        b: "Assault", 
        c: "Battery", 
        d: "Malpractice", 
        correct: "a",
            },
        { 
        question: "Threatening to harm a resident if he tells another caregiver about a problem is an example of which type of abuse?",
        a: "Physical abuse", 
        b: "Psychological abuse", 
        c: "Financial abuse", 
        d: "Substance abuse", 
        correct: "b",
            },
        { 
        question: "Negligence is",
        a: "Threatening to touch a person without permission", 
        b: "Touching a person without permission", 
        c: "Actions or the failure to act or give care to a person, resulting in unintended injury", 
        d: "Insulting, humiliating, or treating a person as a child", 
        correct: "c",
            },
        { 
        question: "If a nursing assistant sees or suspects that a resident is being abused, he must",
        a: "Report it at once to his supervisor", 
        b: "Confront the abuser", 
        c: "Try to stop the abuse himself", 
        d: "Call the resident’s family to inform them", 
        correct: "a",
            },
        { 
        question: "Which of the following is considered a sign of abuse?",
        a: "Missing teeth or hair", 
        b: "Ripped clothing", 
        c: "Pressure injuries", 
        d: "Unanswered call lights", 
        correct: "a",
            },
        { 
        question: "Which of the following is considered a sign of neglect?",
        a: "Burns shaped in certain ways", 
        b: "Weight loss", 
        c: "Changing doctors frequently", 
        d: "Wearing makeup to hide injuries", 
        correct: "b",
            },
        { 
        question: "Which of the following is a step taken when a nursing assistant is suspected of abuse?",
        a: "A meeting of staff members and residents is held so that everyone can discuss the problem.", 
        b: "The nursing assistant continues to work while the investigation is being completed.", 
        c: "The name of the resident or staff member who reported the abuse is announced so opinions can be gathered.", 
        d: "The nursing assistant is suspended immediately and an investigation is completed.", 
        correct: "d",
            },
        { 
        question: "Which of the following is an ombudsman’s responsibility?",
        a: "Helping with resident care procedures", 
        b: "Assisting with resolving staff disputes", 
        c: "Investigating and resolving resident complaints", 
        d: "Organizing outings and activities for residents", 
        correct: "c",
            },
        { 
        question: "With whom may a nursing assistant share a resident’s health information?",
        a: "Anyone who asks", 
        b: "Anyone who lives or works at the facility", 
        c: "The resident’s friends and family", 
        d: "Other care team members", 
        correct: "d",
            },
        { 
        question: "One reason that the Health Insurance Portability and Accountability Act (HIPAA) was passed was to",
        a: "Make sure nursing assistants receive adequate health insurance coverage", 
        b: "Protect privacy of health information", 
        c: "Ensure that care procedures are performed properly", 
        d: "Prevent abuse and neglect of residents", 
        correct: "b",
            },
        { 
        question: "Which of the following is the best way for a nursing assistant to keep residents’ health information confidential?",
        a: "Discuss a resident’s information away from the facility so that other residents cannot hear it", 
        b: "Bring family and friends to the facility to meet the residents", 
        c: "Return charts to their proper place after use", 
        d: "Post updates about favorite residents on her Facebook page to avoid being overheard", 
        correct: "c",
            },
        { 
        question: "A legal document that allows a person to decide what kind of medical care he wishes to have if he is unable to make those decisions himself is called a(n)",
        a: "Will", 
        b: "Advance directive", 
        c: "CPR", 
        d: "Power of attorney", 
        correct: "b",
            },
        { 
        question: "What is the purpose of the Patient Self-Determination Act (PSDA)?",
        a: "To offer in-service training for nursing assistants", 
        b: "To keep protected health information (PHI) private", 
        c: "To encourage people to make decisions about advance directives", 
        d: "To detail how abuse should be reported", 
        correct: "c",
            },
        { 
        question: "Which of the following is an example of an advance directive?",
        a: "Last Will and Testament", 
        b: "Power of Attorney", 
        c: "Divorce Decree", 
        d: "Durable Power of Attorney for Health Care", 
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