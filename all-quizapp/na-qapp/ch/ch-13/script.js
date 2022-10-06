//console.log("Hello NicK");
const quizData = [
 
    { 
        question: "Which of the following is considered a vital sign?",
        a: "Body temperature", 
        b: "Orientation", 
        c: "Telemetry", 
        d: "Glycemic index", 
        correct: "a",
            },
        { 
        question: "If a nursing assistant is unable to obtain a proper reading of a resident’s vital signs, she should",
        a: "Guess", 
        b: "Use the previous reading from the same resident", 
        c: "Tell the nurse", 
        d: "Leave the space blank and move on to the next resident or procedure", 
        correct: "c",
            },
        { 
        question: "Common symptoms of a fever include",
        a: "Muscle aches", 
        b: "Sleepiness", 
        c: "Slow movements", 
        d: "Nausea", 
        correct: "a",
            },
        { 
        question: "If a nursing assistant suspects that a resident has a fever, he should",
        a: "Give the resident medication", 
        b: "Take the resident’s temperature", 
        c: "Ask the resident how she is feeling", 
        d: "Measure the resident’s pulse rate", 
        correct: "b",
            },
        { 
        question: "Which of the following is the normal temperature range for the oral method?",
        a: "97.6–99.6 degrees F", 
        b: "96.6–98.6 degrees F", 
        c: "93.6–97.9 degrees F", 
        d: "98.6–100.6 degrees F", 
        correct: "a",
            },
        { 
        question: "Which of the following is another word for armpit?",
        a: "Tympanum", 
        b: "Rectum", 
        c: "Axilla", 
        d: "Temporal", 
        correct: "c",
            },
        { 
        question: "Which method of taking temperature is considered to be the most accurate?",
        a: "Oral", 
        b: "Rectal", 
        c: "Tympanic", 
        d: "Axillary", 
        correct: "b",
            },
        { 
        question: "An oral thermometer is usually color-coded",
        a: "Green or blue", 
        b: "Red or orange", 
        c: "Black or white", 
        d: "White or gray", 
        correct: "a",
            },
        { 
        question: "Under which of the following conditions should a nursing assistant not take an oral temperature on a person?",
        a: "The person has influenza.", 
        b: "The person almost certainly has a fever.", 
        c: "The person is over six years old.", 
        d: "The person is confused or disoriented.", 
        correct: "d",
            },
        { 
        question: "Which of the following thermometers is used to measure temperature in the ear?",
        a: "Mercury thermometer", 
        b: "Axillary thermometer", 
        c: "Tympanic thermometer", 
        d: "Temporal artery thermometer", 
        correct: "c",
            },
        { 
        question: "Which of the following statements is true of taking rectal temperatures?",
        a: "The nursing assistant should not explain the procedure before beginning so the resident will not feel anxious.", 
        b: "Rectal thermometers should be inserted two inches into the rectum.", 
        c: "The nursing assistant must hold on to the thermometer at all times while taking a rectal temperature.", 
        d: "To obtain an accurate temperature, the resident should move around slowly during the procedure.", 
        correct: "c",
            },
        { 
        question: "How far into the ear should a tympanic thermometer be inserted?",
        a: "¼ to ½ inch", 
        b: " ½ to 1 inch",
        c: "1 to 1 ½ inches", 
        d: "1 to 2 inches", 
        correct: "a",
            },
        { 
        question: "The normal pulse rate for adults is",
        a: "25 to 50 beats per minute", 
        b: "60 to 100 beats per minute", 
        c: "100 to 150 beats per minute", 
        d: "150 to 175 beats per minute", 
        correct: "b",
            },
        { 
        question: "The most common site that is used for measuring pulse rate is the",
        a: "Radial pulse", 
        b: "Brachial pulse", 
        c: "Carotid pulse", 
        d: "Pedal pulse", 
        correct: "a",
            },
        { 
        question: "The normal respiration rate for adults is",
        a: "18–30 breaths per minute", 
        b: "15–25 breaths per minute", 
        c: "12–20 breaths per minute", 
        d: "8–10 breaths per minute", 
        correct: "c",
            },
        { 
        question: "The medical term for difficulty breathing is",
        a: "Eupnea", 
        b: "Apnea", 
        c: "Tachypnea", 
        d: "Dyspnea", 
        correct: "d",
            },
        { 
        question: "Why is respiration rate usually counted directly after taking the pulse rate, while the fingers are still on the wrist?",
        a: "It is less work for the nursing assistant to count respirations right after taking the pulse.", 
        b: "People may breathe more quickly if they know they are being observed.", 
        c: "The chest will not rise and fall if the rate is not counted immediately.", 
        d: "The respiration rate will be different if the nursing assistant waits to take it.", 
        correct: "b",
            },
        { 
        question: "The difference between the apical and radial pulse is called the",
        a: "Pulse rate", 
        b: "Cheyne-Stokes", 
        c: "Pulse deficit", 
        d: "BPM", 
        correct: "c",
            },
        { 
        question: "The blood pressure is the top number in a blood pressure reading, while the is the bottom number.",
        a: "Radial, apical", 
        b: "Apical, radial", 
        c: "Diastolic, systolic", 
        d: "Systolic, diastolic", 
        correct: "d",
            },
        { 
        question: "Which of the following blood pressure readings falls within the normal range?",
        a: "119/75", 
        b: "135/90", 
        c: "91/58", 
        d: "140/80", 
        correct: "a",
            },
        { 
        question: "Hypertension is",
        a: "High fever", 
        b: "High blood pressure", 
        c: "High pulse rate", 
        d: "Low blood pressure", 
        correct: "b",
            },
        { 
        question: "Blood pressure is measured using a",
        a: "Thermometer", 
        b: "Watch", 
        c: "Finger", 
        d: "Sphygmomanometer", 
        correct: "d",
            },
        { 
        question: "Both the and pulses are used in taking blood pressure.",
        a: "Radial and apical", 
        b: "Apical and brachial", 
        c: "Radial and brachial", 
        d: "Brachial and femoral", 
        correct: "c",
            },
        { 
        question: "Which of the following is an example of a correct way to write a blood pressure reading?",
        a: "110/70", 
        b: "110+70", 
        c: "110-70", 
        d: "110*70", 
        correct: "a",
            },
        { 
        question: "Which of the following statements is true of pain?",
        a: "Everyone experiences pain in the same way.", 
        b: "Everyone will express freely when they are in pain.", 
        c: "Pain is a different experience for each person.", 
        d: "Pain levels do not need to be monitored.", 
        question: "",
        correct: "c",
            },
        { 
        question: "Which of the following can help reduce pain?",
        a: "Pounding the resident on the back", 
        b: "Jumping jacks", 
        c: "Squeezing the body part hard", 
        d: "Change of position", 
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