//console.log("Hello NicK");
const quizData = [
 
    {
        question: "The basic working unit of the nervous system is the",
        a: "Brain", 
        b: "Spinal cord", 
        c: "Neuron", 
        d: "Receptor", 
        correct: "c",
            },
        {
        question: "The_______is/are part of the peripheral nervous system.",
        a: "Brain", 
        b: "Spinal cord", 
        c: "Cerebrum", 
        d: "Spinal nerves", 
        correct: "d",
            },
        {
        question: "The is the circular opening which dilates and constricts to adjust the amount of light coming into the eye.",
        a: "Sclera", 
        b: "Iris", 
        c: "Retina", 
        d: "Pupil", 
        correct: "d",
            },
        {
        question: "The tiny bones within the middle ear that pick up vibrations and send impulses to the brain are the",
        a: "Ossicles", 
        b: "Eardrums", 
        c: "Cochleas", 
        d: "Auricles", 
        correct: "a",
            },
        {
        question: "Which of the following is a function of the nervous system?",
        a: "Gives the body shape and structure", 
        b: "Provides a natural protective covering to the body", 
        c: "Produces and supplies antibodies and other infection-fighting blood cells", 
        d: "Senses and interprets information from outside the body", 
        correct: "d",
            },
        {
        question: "Normal age-related changes for the nervous system include the following:",
        a: "Responses and reflexes speed up", 
        b: "Some memory loss occurs", 
        c: "Sensitivity of nerve endings in skin increases", 
        d: "Senses of vision, smell, and taste become stronger", 
        correct: "b",
            },
        {
        question: "Which of the following is a care guideline for residents recovering from a CVA?",
        a: "The NA should do as much as possible for the resident so that care can be completed more efficiently.", 
        b: "The NA should encourage resident to finish tasks as quickly as possible to help speed recovery.", 
        c: "The NA should assist with ambulation to prevent falls.", 
        d: "The NA should place food in the affected/weaker side of the mouth when feeding.", 
        correct: "c",
            },
        {
        question: "Parkinson’s disease typically causes",
        a: "A shuffling gait", 
        b: "Extremely straight posture", 
        c: "Memory loss", 
        d: "Aggressive behavior", 
        correct: "a",
            },
        {
        question: "Guidelines for caring for a resident with multiple sclerosis include",
        a: "Rushing resident through tasks", 
        b: "Administering medications", 
        c: "Preventing falls", 
        d: "Encouraging the resident to speak faster", 
        correct: "c",
            },
        {
        question: "_____is the loss of function of the lower body and legs.",
        a: "Concussion", 
        b: "Paraplegia", 
        c: "Quadriplegia", 
        d: "Hemiplegia", 
        correct: "b",
            },
        { 
        question: "Treatment for seizures includes",
        a: "Range of motion exercises", 
        b: "Restraining the resident when seizures occur", 
        c: "Medication or surgery", 
        d: "Physical therapy", 
        correct: "c",
            },
        { 
        question: "Which of the following is a care guideline for visual impairments?",
        a: "Use the face of an imaginary clock as a guide to explain position of objects in the room.", 
        b: "Keep the room as dark as possible.", 
        c: "Walk behind the resident while touching his back.", 
        d: "Touch the resident before identifying your- self, so as not to startle him.", 
        correct: "a",
            },
        { 
        question: "How should an artificial eye be cleaned?",
        a: "With alcohol", 
        b: "With water", 
        c: "With toothpaste", 
        d: "With bleach", 
        correct: "b",
            },
        { 
        question: "Which of the following is a proper guideline for hearing aids?",
        a: "Hearing aids should be left on when not inuse.", 
        b: "The batteries in a hearing aid last for the life of the hearing aid and do not need to be changed.", 
        c: "Make sure residents with hearing aids have them turned on.", 
        d: "Soaking hearing aids in water makes cleaning them easier.", 
        correct: "c",
            },
        { 
        question: "The ability to think logically is called",
        a: "Cognition", 
        b: "Dementia", 
        c: "Awareness", 
        d: "Dysphagia", 
        correct: "a",
            },
        { 
        question: "Which of the following terms means 'a serious loss of mental abilities'?",
        a: "Cognition", 
        b: "Irreversible", 
        c: "Dementia", 
        d: "Onset", 
        correct: "c",
            },
        { 
        question: "Which of the following statements is true of Alzheimer’s disease (AD)?",
        a: "Skills a person has used over a lifetime are usually kept longer.", 
        b: "Residents with AD will show the same signs at the same times.", 
        c: "NAs should do everything for residents with AD.", 
        d: "Alzheimer’s disease is a normal part of aging.", 
        correct: "a",
            },
        { 
        question: "Strategies for better communication with residents who have AD include",
        a: "Only talking about one subject at a time, using simple, short sentences", 
        b: "Not repeating instructions or questions because this may upset the resident", 
        c: "Knowing that nonverbal cues are usually not helpful with residents with AD", 
        d: "Telling the resident “don’t” when he does something unsafe", 
        correct: "a",
            },
        { 
        question: "If a resident with AD has lost most of his verbal skills, the NA should",
        a: "Assume the resident cannot understand what is being said", 
        b: "Use touch, smiles, and laughter", 
        c: "Ask the resident questions", 
        d: "Not involve resident in activities", 
        correct: "b",
            },
        { 
        question: "If a resident with AD is incontinent, the nursing assistant should",
        a: "Withhold fluids", 
        b: "Dim the bathroom lights", 
        c: "Mark the bathroom with a sign or picture", 
        d: "Wait longer periods of time before taking the resident to the bathroom so that he will really need to go when he gets there", 
        correct: "c",
            },
        { 
        question: "If a resident with AD has problems with bathing, the nursing assistant should",
        a: "Schedule bathing when the resident is least agitated", 
        b: "Hurry the resident through the bath", 
        c: "Insist that the resident bathe even if she does not want to", 
        d: "Surprise the resident with the bath", 
        correct: "a",
            },
        { 
        question: "If a resident with AD becomes violent, the NA should",
        a: "Step out of the way and remove triggers if possible", 
        b: "Restrain the resident", 
        c: "Yell at the resident", 
        d: "Ignore the resident", 
        correct: "a",
            },
        { 
        question: "One way for a nursing assistant to help a resident with AD with eating is to",
        a: "Put a few types of food on the plate at the same time", 
        b: "Use dishes without a pattern and a simple place setting", 
        c: "Withhold food until the resident is really hungry", 
        d: "Serve steaming hot foods and drinks", 
        correct: "b",
            },
        { 
        question: "If a resident with AD has problems with dressing, the nursing assistant should",
        a: "Lay out clothes in the order they should be put on", 
        b: "Dress the resident in the hallway", 
        c: "Choose the resident’s clothing for the resident", 
        d: "Give the resident multiple steps to follow", 
        correct: "a",
            },
        { 
        question: "A way for a nursing assistant to respond to hallucinations is to",
        a: "Tell the resident that what she thinks she sees is not real", 
        b: "Tell the resident that she can see the hallucination, too", 
        c: "Reassure a resident who is upset and worried", 
        d: "Laugh at the resident to ease tensions", 
        correct: "c",
            },
        { 
        question: "A nursing assistant can respond to sundowning by",
        a: "Adding more caffeine to the resident’s diet", 
        b: "Setting a bedtime routine and keeping it", 
        c: "Restricting exercise during the day", 
        d: "Scheduling activities during this time", 
        correct: "b",
            },
        { 
        question: "If a resident with AD shows violent behavior, the nursing assistant should",
        a: "Hit back", 
        b: "Remove triggers", 
        c: "Leave the resident alone until he calms down", 
        d: "Yell at the resident to scare him into stopping", 
        correct: "b",
            },
        { 
        question: "Which of the following would be the best way for a nursing assistant to respond to a resident with AD who is exhibiting inappropriate sexual behavior?",
        a: "The NA should let other residents know what is happening.", 
        b: "The NA should take the resident to a private area.", 
        c: "The NA should inform other nursing assistants that the resident has a dirty mind.", 
        d: "The NA should loudly reprimand the resident to shame him into stopping.", 
        correct: "b",
            },
        { 
        question: "When a resident with AD hoards or rummages, the nursing assistant should",
        a: "Let the family know that the resident is stealing things", 
        b: "Lock the resident in his room if the NA does not have time to watch him", 
        c: "Warn the other residents that the resident with AD is a thief", 
        d: "Provide a rummage drawer", 
        correct: "d",
            },
        { 
        question: "Therapy that allows residents with AD to believe that they live in the past or in imaginary circumstances is",
        a: "Reality orientation", 
        b: "Validation therapy", 
        c: "Reminiscence therapy", 
        d: "Remotivation therapy", 
        correct: "b",
            },
        { 
        question: "A person who is mentally healthy",
        a: "Cannot respond to emotions appropriately", 
        b: "Is unlikely to have relationships with others", 
        c: "Does not control impulses well", 
        d: "Performs well in professional settings", 
        correct: "d",
            },
        { 
        question: "The disorder that is characterized by intrusive repetitive thoughts or behavior that cause anxiety is",
        a: "Phobia disorder", 
        b: "Posttraumatic stress disorder", 
        c: "Obsessive-compulsive disorder", 
        d: "Social anxiety disorder", 
        correct: "c",
            },
        { 
        question: "Signs and symptoms of major depressive disorder include",
        a: "Intense hunger", 
        b: "Breath that smells fruity", 
        c: "Intense, sudden chest pain", 
        d: "Apathy", 
        correct: "d",
            },
        { 
        question: "Which of the following is a way for a nursing assistant to care for a resident who has a mental health disorder?",
        a: "The NA should do everything for the resident.", 
        b: "The NA should give the resident her medication when needed.", 
        c: "The NA should support the resident and her family and friends.", 
        d: "The NA should let the resident know that mental health disorders are not real.", 
        correct: "c",
            },
        { 
        question: "Which of the following statements about observing a resident who has a mental health disorder is true?",
        a: "An NA does not need to report a comment about suicide as long as it is a joke.", 
        b: "An NA needs to report changes in mood.", 
        c: "Social withdrawal does not need to be reported.", 
        d: "Changes in abilities to perform ADLs do not need to be reported.", 
        correct: "b",
            },
        { 
        question: "Which of the following is a common set of treatments for anxiety disorders?",
        a: "Electroconvulsive (shock) therapy and psychosurgery", 
        b: "Medication and psychotherapy", 
        c: "Psychotherapy and psychosurgery", 
        d: "Medication and electroconvulsive (shock) therapy", 
        correct: "b",
            },
        { 
        question: "A resident has been acting a little strangely lately. She gets upset very easily, and her eyes are always red. She does not eat much, and sometimes the nursing assistant can smell alcohol on her breath, even in the morning. What should the nursing assistant do?",
        a: "The NA should confront the resident about what she has noticed.", 
        b: "The NA should call Alcoholics Anonymous.", 
        c: "The NA should report her observations to the nurse.", 
        d: "The NA should tell the facility’s clergyperson.", 
        correct: "c",
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