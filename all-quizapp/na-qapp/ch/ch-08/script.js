//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Which of the following conditions may mean a person needs emergency medical help?",
        a: "Person is behaving rudely.", 
        b: "Person has a scratch.", 
        c: "Person does not want help.", 
        d: "Person is unconscious.", 
        correct: "d",
            },
        {
        question: "The first two steps in approaching an emergency are",
        a: "Perform first aid and assess the situation", 
        b: "Call the victim’s family and then call 911", 
        c: "Assess the situation and the victim", 
        d: "Get assistance and perform CPR", 
        correct: "c",
            },
        {
        question: "After an emergency, the nursing assistant will need to",
        a: "Document the incident", 
        b: "Give an opinion about what is wrong with the resident", 
        c: "Tell the resident she is very worried about his condition", 
        d: "Prescribe medication for the resident", 
        correct: "a",
            },
        {
        question: "When a person’s breathing stops, it is called",
        a: "Cardiac arrest", 
        b: "Respiratory arrest", 
        c: "CPR", 
        d: "Choking", 
        correct: "b",
            },
        {
        question: "If a person’s breathing and heartbeat stop, brain damage can occur within minutes.",
        a: "4–6 ", 
        b: "8–10",  
        c: "10–15 ", 
        d: "15–20", 
        correct: "a",
            },
        {
        question: "If a nursing assistant is in an emergency situation but has not been trained to perform CPR, she should",
        a: "Perform CPR anyway", 
        b: "Ask someone at the scene to tell her how to do it", 
        c: "Give basic first aid until the emergency medical team arrives", 
        d: "Do nothing", 
        correct: "c",
            },
        {
        question: "In which of the following situations should a nursing assistant give abdominal thrusts to someone?",
        a: "The person is coughing.", 
        b: "The person cannot speak, cough, or breathe.", 
        c: "The person is breathing very rapidly.", 
        d: "The person tells the nursing assistant that she feels short of breath.", 
        correct: "b",
            },
        {
        question: "One sign that a person is in shock is",
        a: "Flushed or reddish skin", 
        b: "Decreased pulse and respiration rates", 
        c: "Increased blood pressure", 
        d: "Extreme thirst", 
        correct: "d",
            },
        {
        question: "To control bleeding, a nursing assistant should",
        a: "Use her bare hands to stop it", 
        b: "Lower the wound below the heart", 
        c: "Hold a thick pad or clean cloth against the wound and press down hard", 
        d: "Apply light pressure with a Band-aid", 
        correct: "c",
            },
        { 
        question: "If a resident has a minor burn, a nursing assistant should use to decrease the temperature of the skin.",
        a: "Ice or ice water", 
        b: "Cool water", 
        c: "Burn ointment", 
        d: "Olive or canola oil", 
        correct: "b",
            },
        { 
        question: "If a resident feels faint, a nursing assistant should",
        a: "Try to have the resident stand up before fainting occurs", 
        b: "Have the resident lean forward and place her head between her knees", 
        c: "Tighten the resident’s clothing", 
        d: "Leave the resident alone as soon as symptoms disappear", 
        correct: "b",
            },
        { 
        question: "Which of the following can a nursing assistant do if poisoning is suspected?",
        a: "Suggest the resident put his finger down his throat to induce vomiting.", 
        b: "Feed the resident crackers or bread to soak up the poison.", 
        c: "Give the resident medication and then call poison control.", 
        d: "Look for a container that will help him find out what the resident took or ate.", 
        correct: "d",
            },
        { 
        question: "Which of the following is a correct response to a nosebleed?",
        a: "Lower the head of the bed", 
        b: "Ask the person to lie down", 
        c: "Apply ice directly to the skin to stop the bleeding faster", 
        d: "Apply pressure near the bridge of the nose", 
        correct: "d",
            },
        { 
        question: "Another word for fainting is",
        a: "Syncope", 
        b: "Epistaxis", 
        c: "Dyspnea", 
        d: "Emesis", 
        correct: "a",
            },
        { 
        question: "When a resident is suspected of having a heart attack, a nursing assistant should",
        a: "Not give the resident food or fluids", 
        b: "Cover the resident with a heavy blanket", 
        c: "Make sure the resident is standing up to promote circulation", 
        d: "Leave the resident to call his family", 
        correct: "a",
            },
        { 
        question: "Which of the following symptoms is more often experienced by women during a heart attack?",
        a: "Normal breathing", 
        b: "Extreme fatigue", 
        c: "Anxiety and a sense of doom", 
        d: "Low blood pressure", 
        correct: "b",
            },
        { 
        question: "Another term for insulin reaction is",
        a: "Myocardial infarction", 
        b: "Diabetic coma", 
        c: "Hypoglycemia", 
        d: "Dyspnea", 
        correct: "c",
            },
        { 
        question: "Diabetic ketoacidosis may be caused by",
        a: "Having too much insulin in the body", 
        b: "Having too little insulin in the body", 
        c: "Eating too little food", 
        d: "Too much exercise", 
        correct: "b",
            },
        { 
        question: "Which of the following would be the best response by the nursing assistant if a resident is having a seizure?",
        a: "The NA should give the resident a glass of water and ask him to drink it.", 
        b: "The NA should hold the resident down if he is shaking severely.", 
        c: "The NA should move furniture away to prevent injury to the resident.", 
        d: "The NA should open the resident’s mouth to move the tongue to the side.", 
        correct: "c",
            },
        { 
        question: "A transient ischemic attack is a warning sign of",
        a: "Cerebrovascular accident", 
        b: "Myocardial infarction", 
        c: "Hypoglycemia", 
        d: "Epistaxis", 
        correct: "a",
            },
        { 
        question: "A sign that a stroke is occurring is",
        a: "Abdominal pain", 
        b: "Gasping for air", 
        c: "Low blood pressure", 
        d: "Facial droop", 
        correct: "d",
            },
        { 
        question: "In a healthcare facility, codes are used to",
        a: "Keep track of residents", 
        b: "Inform staff of emergencies without alarming residents and visitors", 
        c: "Teach procedures to new nursing assistants", 
        d: "Welcome new residents to the facility", 
        correct: "b",
            },
        { 
        question: "During code team procedures, a nursing assistant might be asked to",
        a: "Give a resident oxygen", 
        b: "Call the resident’s family", 
        c: "Work with the suction machine", 
        d: "Give chest compressions during CPR", 
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