//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Infection prevention is",
        a: "The way in which infections occur", 
        b: "An infection limited to a specific part of the body", 
        c: "A set of methods used to prevent the spread of disease", 
        d: "An object that has not been contaminated with pathogens", 
        correct: "c",
            },
        {
        question: "When pathogens enter the bloodstream and move throughout the body, a_____has occurred.",
        a: "Systemic infection", 
        b: "Localized infection", 
        c: "Healthcare-associated infection", 
        d: "Cross-infection", 
        correct: "a",
            },
        {
        question: "One sign of a localized infection is",
        a: "Chills", 
        b: "Headache", 
        c: "Drainage from a wound or cavity", 
        d: "Mental confusion", 
        correct: "c",
            },
        {
        question: "An object can be called clean if",
        a: "It has not been used on or near a sick resident", 
        b: "No dirt or debris is visible on the object", 
        c: "It has been contaminated with pathogens", 
        d: "It has not been contaminated with pathogens", 
        correct: "d",
            },
        {
        question: "____destroys pathogens but not all pathogens, while destroys all microorganisms, including those that form spores.",
        a: "Sterilization, disinfection", 
        b: "Disinfection, sterilization", 
        c: "Asepsis, transmission", 
        d: "Transmission, asepsis", 
        correct: "b",
            },
        {
        question: "Making an area or object free of all microorganisms is called",
        a: "Infection prevention", 
        b: "Disinfection", 
        c: "Transmission", 
        d: "Surgical asepsis", 
        correct: "d",
            },
        {
        question: "Before a nursing assistant leaves a dirty utility room, what must she do to avoid transferring pathogens to other areas of the facility?",
        a: "Change her gloves", 
        b: "Disinfect any equipment she has used", 
        c: "Wash her hands", 
        d: "Close the door securely", 
        correct: "c",
            },
        {
        question: "How many links in the chain of infection must be broken to prevent infection?",
        a: "One", 
        b: "Two", 
        c: "Three", 
        d: "Four", 
        correct: "a",
            },
        {
        question: "A causative agent is",
        a: "Any microorganism in the body", 
        b: "A pathogen or microorganism that causes disease", 
        c: "Normal flora that live in or on the body", 
        d: "The waiting period between the time the pathogen enters the body and the time it causes infection", 
        correct: "b",
            },
        { 
        question: "Infection prevention for the portal of exit link in the chain of infection could include",
        a: "Covering the mouth when sneezing", 
        b: "Keeping surfaces clean and dry", 
        c: "Getting a vaccine for a particular disease", 
        d: "Handwashing", 
        correct: "a",
            },
        { 
        question: "In which of the following parts of the body are mucous membranes found?",
        a: "Feet", 
        b: "Hands", 
        c: "Genitals", 
        d: "Elbows", 
        correct: "c",
            },
        { 
        question: "A susceptible host is",
        a: "An infected person who could transfer disease to others", 
        b: "A pathogen that causes disease", 
        c: "An uninfected person who could get sick", 
        d: "A healthy person with strong resistance to disease", 
        correct: "c",
            },
        { 
        question: "Which of the following is a reason that people are at greater risk for infection as they get older?",
        a: "As people age, their immune systems become stronger.", 
        b: "Elderly people are hospitalized more often.", 
        c: "Older people recover from illness more quickly.", 
        d: "Infections tend to be less dangerous to older people.", 
        correct: "b",
            },
        { 
        question: "Which of the following increases the risk of infection in older adults?",
        a: "Thicker skin", 
        b: "Higher intake of fluids", 
        c: "Stronger appetite", 
        d: "Catheter use", 
        correct: "d",
            },
        { 
        question: "Standard Precautions means",
        a: "Not performing care on residents who have infectious diseases", 
        b: "Treating all blood, body fluids, and mucous membranes as if they were infected", 
        c: "Asking all residents if they have infectious diseases before performing care", 
        d: "Looking at residents’ charts to determine if they have an infectious disease", 
        correct: "b",
            },
        { 
        question: "With whom should a nursing assistant use Standard Precautions?",
        a: "With a resident who says he has an infectious disease", 
        b: "With a resident who suspects he might have an infectious disease", 
        c: "With every resident in his care", 
        d: "With a resident who requests that they be used", 
        correct: "c",
            },
        { 
        question: "Under Standard Precautions, the term body fluids includes",
        a: "Sweat", 
        b: "Water", 
        c: "Juice", 
        d: "Urine", 
        correct: "d",
            },
        { 
        question: "Which of the following statements is true of gloves?",
        a: "Gloves do not need to be worn when shaving a resident.", 
        b: "Disposable gloves can be washed and reused once they are clean.", 
        c: "Gloves should be worn when performing care on a resident who has broken skin.", 
        d: "After giving care, gloves are normally not contaminated.", 
        correct: "c",
            },
        { 
        question: "A mask and goggles should be worn",
        a: "During all care procedures", 
        b: "When caring for a resident with any infectious disease", 
        c: "If contact with splashing or spraying blood or body fluids is likely", 
        d: "At all times while in the facility", 
        correct: "c",
            },
        { 
        question: "The most important thing a nursing assistant can do to prevent the spread of disease is to",
        a: "Wear gloves and other PPE", 
        b: "Get vaccinated for common illnesses", 
        c: "Wash her hands", 
        d: "Use lotions to reduce the risk of broken skin", 
        correct: "c",
            },
        { 
        question: "Hand hygiene is",
        a: "Washing hands with soap and water only", 
        b: "Using alcohol-based hand rubs only", 
        c: "Wearing gloves when performing care procedures", 
        d: "Washing hands with either plain or anti-septic soap and water or using alcohol-based hand rubs", 
        correct: "d",
            },
        { 
        question: "When washing hands, a nursing assistant should use friction for",
        a: "At least 25 seconds", 
        b: "At least 20 seconds", 
        c: "At least 15 seconds", 
        d: "At least 5 seconds", 
        correct: "b",
            },
        { 
        question: "Which of the following is the proper order to don personal protective equipment (PPE)?",
        a: "Put on gown, mask, goggles, and gloves", 
        b: "Put on gloves, gown, and mask and goggles", 
        c: "Put on mask and goggles, gloves, and gown", 
        d: "Put on gown, gloves, and mask and goggles", 
        correct: "a",
            },
        { 
        question: "When handling dirty linen, a nursing assistant should",
        a: "Carry it close to her uniform", 
        b: "Wear gloves", 
        c: "Fold or roll it so the dirty area is on the outside", 
        d: "Shake it to remove any particles before removing it", 
        correct: "b",
            },
        { 
        question: "Where is the best place to dispose of sharps?",
        a: "In the trash can in the resident’s room", 
        b: "In the closest disposal container", 
        c: "In a puncture-proof biohazard container", 
        d: "With reusable equipment waiting to be cleaned and reprocessed", 
        correct: "c",
            },
        { 
        question: "What should a nursing assistant do if he spills a substance on his body?",
        a: "Immediately wash the area using the proper cleaning agent", 
        b: "Ignore it unless it is painful or uncomfortable", 
        c: "Finish cleaning the area before washing the spill off his body", 
        d: "Find the nurse and ask her what to do", 
        correct: "a",
            },
        { 
        question: "Droplets normally do not travel more than",
        a: "Six feet", 
        b: "Two feet", 
        c: "Eight feet", 
        d: "Ten feet", 
        correct: "a",
            },
        { 
        question: "Which of the following is true of Transmission-Based Precautions?",
        a: "An NA does not need to practice Standard Precautions if he practices Transmission-Based Precautions.", 
        b: "They are exactly the same as Standard Precautions.", 
        c: "They are practiced in addition to Standard Precautions.", 
        d: "They will not be listed in the care plan so as not to alarm anyone.", 
        correct: "c",
            },
        { 
        question: "Why would a resident be in isolation?",
        a: "Because the resident requires Transmission-Based Precautions", 
        b: "Because the resident requires Standard Precautions", 
        c: "Because the resident cannot get along with other residents", 
        d: "Because the resident cannot be managed by staff", 
        correct: "a",
            },
        { 
        question: "How should residents in isolation be treated?",
        a: "They should be left alone.", 
        b: "Their behavior should be monitored closely to make sure they do not infect any- one else.", 
        c: "They should not be allowed to use the phone or use utensils.", 
        d: "They should be listened to and encouraged to share their feelings and concerns.", 
        correct: "d",
            },
        { 
        question: "What is one responsibility of the Occupational Safety and Health Administration (OSHA)?",
        a: "To make rules to protect workers from hazards on the job", 
        b: "To help resolve conflicts between residents and staff members", 
        c: "To provide PPE for employees, visitors, and residents of facilities", 
        d: "To provide training on cultural tolerance", 
        correct: "a",
            },
        { 
        question: "How are bloodborne diseases transmitted?",
        a: "By hugging an infected person", 
        b: "By touching something an infected person has touched", 
        c: "By standing too close to an infected person when he coughs", 
        d: "By contact with blood or body fluids", 
        correct: "d",
            },
        { 
        question: "What is one way that the human immunodeficiency virus (HIV) is spread?",
        a: "Through the air when an infected person coughs", 
        b: "By hugging an infected person", 
        c: "By standing next to an infected person", 
        d: "By contact with an infected person’s blood", 
        correct: "d",
            },
        { 
        question: "Which of the following statements is true of hepatitis B (HBV)?",
        a: "HBV is not a serious threat to healthcare workers.", 
        b: "The vaccine for HBV helps prevent the disease.", 
        c: "HBV is spread by drinking contaminated water.", 
        d: "HBV cannot cause death.", 
        correct: "b",
            },
        { 
        question: "What is the best way to control methicillin- resistant Staphylococcuaureus (MRSA)?",
        a: "By placing residents in airborne infection isolation rooms (AIIRs)", 
        b: "Through proper handwashing", 
        c: "By wearing surgical masks", 
        d: "By taking the antibiotic vancomycin", 
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