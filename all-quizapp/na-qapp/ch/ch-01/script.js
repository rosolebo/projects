//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Long-term care is offered in",
        a: "Hospitals", 
        b: "Adult day services facilities", 
        c: "Skilled nursing facilities", 
        d: "Ambulatory surgical centers", 
        correct: "c",
            },
        {
        question: "Residents in_________are usually more independent and do not need skilled care.",
        a: "Acute care facilities", 
        b: "Assisted living facilities", 
        c: "Subacute care facilities", 
        d: "Hospice facilities", 
        correct: "b",
            },
        {
        question: "Which of the following types of health care is generally for people who will die in six months or less?",
        a: "Long-term care", 
        b: "Outpatient care", 
        c: "Intergenerational care", 
        d: "Hospice care", 
        correct: "d",
            },
        {
        question: "_____is a federal health insurance program for people who are 65 years of age or older or people of any age with permanent kidney failure or certain disabilities.",
        a: "Medicare", 
        b: "Medicaid", 
        c: "Occupational Safety and Health Administration", 
        d: "Health and Human Services", 
        correct: "a",
            },
        {
        question: "____is a medical assistance program for people who have a low income or certain disabilities.",
        a: "Medicare", 
        b: "Medicaid", 
        c: "Department of the Treasury", 
        d: "Committee on the Budget", 
        correct: "b",
            },
        {
        question: "Medicare will pay for",
        a: "All care requested by the recipient", 
        b: "All care requested by the doctor", 
        c: "All care requested by the facility", 
        d: "Care that it determines to be medically necessary", 
        correct: "d",
            },
        {
        question: "The amount that Medicare and Medicaid will pay long-term care facilities for services is based on",
        a: "The resident’s background", 
        b: "The resident’s need upon admission and throughout his stay", 
        c: "The size of the facility", 
        d: "The financial contributions from the resident’s family", 
        correct: "b",
            },
        {
        question: "The residents with the longest average stay in long-term care facilities are",
        a: "Residents admitted for terminal care", 
        b: "Residents admitted for rehabilitation or temporary illness", 
        c: "Residents who are developmentally disabled", 
        d: "Residents who have dementia", 
        correct: "c",
            },
        {
        question: "A disorder in which a person has a serious loss of mental abilities, including the ability to think, remember, and reason, is known as",
        a: "A terminal illness", 
        b: "Dementia", 
        c: "Heart disease", 
        d: "Chronic disorder", 
        correct: "b",
            },
        { 
        question: "Which of the following is a typical task that nursing assistants perform?",
        a: "Administering medication", 
        b: "Bathing a resident", 
        c: "Changing sterile dressings", 
        d: "Giving tube feedings", 
        correct: "b",
            },
        { 
        question: "Which of the following is a task that nursing assistants do not perform?",
        a: "Shaving a resident", 
        b: "Inserting tubes into a resident’s body", 
        c: "Helping a resident with elimination needs", 
        d: "Caring for equipment", 
        correct: "b",
            },
        { 
        question: "Professionalism is related to",
        a: "How a person behaves at home", 
        b: "How a person behaves at work", 
        c: "How well a person performs on tests", 
        d: "How a resident behaves in a facility", 
        correct: "b",
            },
        { 
        question: "A resident has purchased a special gift for her nursing assistant (NA). Which of the following would be the best response by the nursing assistant?",
        a: "The NA should refuse the gift but thank the resident for thinking of her.", 
        b: "The NA should refuse the gift and let the resident know her employer is very unfair about employees accepting gifts from residents.", 
        c: "The NA should accept the gift if the resident will keep it confidential.", 
        d: "The NA should accept the gift and thank the resident for thinking of her.", 
        correct: "a",
            },
        { 
        question: "One example of professional behavior by nursing assistants when working with residents is",
        a: "Keeping all resident information confidential", 
        b: "Sharing funny stories about coworkers with the residents", 
        c: "Giving gifts to favorite residents", 
        d: "Asking residents for advice about personal problems", 
        correct: "a",
            },
        
        { 
        question: "Which of the following is the best example of a nursing assistant demonstrating that she is dependable?",
        a: "The nursing assistant shows an interest in others and their problems.", 
        b: "The nursing assistant performs tasks that she does not know how to do so she does not bother her supervisor.", 
        c: "The nursing assistant avoids excessive absences from work.", 
        d: "The nursing assistant respects an individual’s background and beliefs.", 
        correct: "c",
            },
        { 
        question: "To hold oneself accountable means to",
        a: "Admit mistakes and apologize for them", 
        b: "Always speak positively about situations and people", 
        c: "Be able to work with people of many different backgrounds", 
        d: "Care about the problems of others", 
        correct: "a",
            },
        { 
        question: "What does the term empathetic mean?",
        a: "Empathetic means being alert around others.", 
        b: "Empathetic means being able to document accurately.", 
        c: "Empathetic means identifying with and understanding the feelings of others.", 
        d: "Empathetic means taking responsibility for one’s own actions.", 
        correct: "c",
            },
        { 
        question: "Which of the following is part of proper personal grooming by a nursing assistant?",
        a: "Bathing once every other day", 
        b: "Applying perfume daily", 
        c: "Keeping hair neatly tied back away from the face", 
        d: "Wearing polished artificial nails to work",
        correct: "c",
            },
        { 
        question: "The best type of jewelry for an NA to wear to work is",
        a: "A broach", 
        b: "A watch", 
        c: "A bracelet", 
        d: "A necklace", 
        correct: "b",
            },
        { 
        question: "The most important member of the care team is",
        a: "The nurse", 
        b: "The nursing assistant", 
        c: "The physician", 
        d: "The resident", 
        correct: "d",
            },
        { 
        question: "Which member of the care team assesses residents, monitors progress, and gives treatments and medication?",
        a: "The nurse", 
        b: "The nursing assistant", 
        c: "The medical social worker", 
        d: "The registered dietitian", 
        correct: "a",
            },
        { 
        question: "Which member of the care team has the most direct contact with the residents?",
        a: "The nursing assistant", 
        b: "The nurse", 
        c: "The physician", 
        d: "The activities director", 
        correct: "a",
            },
        { 
        question: "The chain of command is",
        a: "A legal term meaning a person can be held responsible for harming someone else", 
        b: "The person in charge of the department for each shift", 
        c: "The line of authority in a facility", 
        d: "The department that a nursing assistant goes to if he wants to report a problem", 
        correct: "c",
            },
        
        { 
        question: "In which type of nursing care does the registered nurse give much of the daily care to the residents?",
        a: "Facility nursing", 
        b: "Team nursing", 
        c: "Primary nursing", 
        d: "Functional nursing", 
        correct: "c",
            },
        { 
        question: "What is one possible negative result of the functional nursing style of care?",
        a: "There are too many tasks to be completed effectively.", 
        b: "Nursing assistants may not be adequately trained for their tasks.", 
        c: "Staff may overlook changes in a resident’s condition.", 
        d: "Residents may get tired of seeing the same care team members every day.", 
        correct: "c",
            },
        { 
        question: "Which of the following is associated with person-centered care?",
        a: "Nursing staff decide what a resident needs.", 
        b: "A resident’s personal preferences and individual choices are promoted.", 
        c: "All residents are treated the same way.", 
        d: "Nursing assistants make sure that all residents participate in the same activities.", 
        correct: "b",
            },
        { 
        question: "A policy is",
        a: "A course of action that should be taken every time a certain situation occurs", 
        b: "A specific method of doing something", 
        c: "The chain of command within the facility", 
        d: "Another term for a state inspection of a healthcare facility", 
        correct: "a",
            },
        { 
        question: "Which of the following would be the best response by a nursing assistant if he forgets how to perform a procedure?",
        a: "The NA should review the steps of the procedure in the procedure manual.", 
        b: "The NA should perform the procedure anyway, knowing the correct order will come to him.", 
        c: "The NA should check online for instructions on how to perform the procedure.", 
        d: "The NA should ask the resident for a reminder on how to perform the procedure.", 
        correct: "a",
            },
        { 
        question: "What would be the best response by a nursing assistant if a surveyor asks her a question?",
        a: "The NA should answer honestly and to the best of her ability.", 
        b: "The NA should offer suggestions for making improvements in the facility.", 
        c: "The NA should refuse to answer any questions until her supervisor is present.", 
        d: "The NA should make up an answer if she does not know the answer to the question.", 
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