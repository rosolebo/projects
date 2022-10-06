//console.log("Hello NicK");
const quizData = [
    {
        question: "Which of the following is an example of non-verbal communication by a nursing assistant?",
        a: "Writing a note in a resident’s chart", 
        b: "Giving an oral report to a supervisor", 
        c: "Smiling at a new resident", 
        d: "Speaking in an encouraging tone of voice to a resident who is moving slowly", 
        correct: "c",
            },
        {
        question: "Which of the following is an example of positive nonverbal communication by a nursing assistant?",
        a: "Leaning forward to listen as a resident talks about her day", 
        b: "Rolling her eyes as the supervisor gives an assignment", 
        c: "Tapping her foot while waiting for a resident to get ready for his bath", 
        d: "Shaking her head when a resident has been incontinent", 
        correct: "a",
            },
        {
        question: "An example of active listening is",
        a: "NA looking around the room while the resident is speaking", 
        b: "NA finishing the resident’s sentences to make communication faster", 
        c: "NA focusing on the resident and providing feedback", 
        d: "NA talking constantly so that there are no pauses in the conversation", 
        correct: "c",
            },
        {
        question: "If a resident is difficult to understand, a nursing assistant should",
        a: "Pretend to understand the resident even when she does not so the resident will not feel embarrassed", 
        b: "Restate what the resident is saying in her own words to find out if she has understood", 
        c: "Avoid communicating with the resident", 
        d: "Use clichés to make it easier for the resident to understand what is being said", 
        correct: "b",
            },
        {
        question: "Why is it important to consider a resident’s cultural background when communicating with him or her?",
        a: "It is not important to consider cultural background.", 
        b: "Because the resident will certainly want to tell stories about his culture.", 
        c: "Because the NA might know somebody with the same background and she can tell the resident about that person.", 
        d: "Because cultural background influences how people communicate and can help the NA communicate better with the resident.", 
        correct: "d",
            },
        {
        question: "If a resident’s native language is different from the nursing assistant’s, the nursing assistant should",
        a: "Use an interpreter to translate the message", 
        b: "Ignore the resident unless she speaks in the NA’s language to encourage learning", 
        c: "Communicate with coworkers in the NA’s native language in front of the resident", 
        d: "Ask the resident only yes/no questions", 
        correct: "a",
            },
        {
        question: "Each time a nursing assistant greets a resident, he should",
        a: "Assume that the resident knows who he is", 
        b: "Explain the procedure to be performed", 
        c: "Reassure the resident that she will not have to do anything during the procedure", 
        d: "Avoid telling the resident about the procedure if he thinks it will upset her", 
        correct: "b",
            },
        {
        question: "One way for an NA to have a positive relationship with a resident’s family and friends is to",
        a: "Avoid talking to the resident when he has visitors", 
        b: "Let the family take care of the resident’s needs themselves", 
        c: "Tell the resident’s friends stories about the resident that will make them laugh", 
        d: "Respond immediately when the resident calls for help", 
        correct: "d",
            },
        {
        question: "The main part of a word that gives it meaning is the",
        a: "Prefix", 
        b: "Root", 
        c: "Suffix", 
        d: "Abbreviation", 
        correct: "b",
            },
        { 
        question: "When is it appropriate for nursing assistants to use medical terminology?",
        a: "When communicating with the care team", 
        b: "When communicating with residents", 
        c: "When communicating with residents’ families", 
        d: "When communicating with visitors", 
        correct: "a",
            },
        { 
        question: "Which of the following shows the correct conversion of 1330 to regular time?",
        a: "1:30 a.m.", 
        b: "1:30 p.m.", 
        c: "11:30 a.m.", 
        d: "11:30 p.m.", 
        correct: "b",
            },
        { 
        question: "Which of the following shows the correct conversion of 7:45 p.m. to military time?",
        a: "0745 hours", 
        b: "1975 hours", 
        c: "1945 hours", 
        d: "0775 hours", 
        correct: "c",
            },
        { 
        question: "A nursing assistant’s responsibility with a resident’s medical chart is to",
        a: "Keep the chart in case it is needed later", 
        b: "Make changes to the care plan", 
        c: "Gather information and note observations and care", 
        d: "Suggest the best treatment for the resident", 
        correct: "c",
            },
        { 
        question: "A nursing assistant can share information about residents with",
        a: "Anyone she chooses", 
        b: "The resident’s family and friends", 
        c: "Other members of the care team", 
        d: "No one", 
        correct: "c",
            },
        { 
        question: "Accurate documentation is important because",
        a: "The NA does not want to get into trouble", 
        b: "Documentation provides an up-to-date record of a resident’s status and care", 
        c: "Family members will want to review the medical chart regularly", 
        d: "The NA determines each resident’s diagnosis based on her documentation", 
        correct: "b",
            },
        { 
        question: "When should documentation be recorded?",
        a: "Immediately after care is given", 
        b: "At the end of the shift", 
        c: "Whenever there is time", 
        d: "Before the care is given", 
        correct: "a",
            },
        { 
        question: "When using the computer at work, a nursing assistant should",
        a: "Research different conditions that may affect the elderly", 
        b: "Exit the web browser when she is finished with charting", 
        c: "Look for websites she has a personal interest in", 
        d: "Share her password with the rest of the care team", 
        correct: "b",
            },
        { 
        question: "Why must a nursing assistant be concerned about privacy if documentation is done electronically?",
        a: "It is common for computer hackers to tar- get long-term care facilities.", 
        b: "Because the federal government is monitoring all computers in LTC facilities to ensure that HIPAA is followed.", 
        c: "Because residents will probably try to sneak a look at other residents’ information.", 
        d: "Because the information is confidential and someone who is not part of the care team might see the screen.", 
        correct: "d",
            },
        { 
        question: "Which of the following is true of the MDS?",
        a: "MDS stands for Multiple Diagnosis System.", 
        b: "Every time an MDS is completed for a resident, an investigation by the state is done.", 
        c: "Not all residents will have an MDS.", 
        d: "A nursing assistant’s report may trigger a needed assessment for a resident.", 
        correct: "d",
            },
        {
        question: "Which of the following is an example of objective information?",
        a: "“Mr. Castillo seems a little grouchy today.”", 
        b: "“Mr. Castillo says that he has a stomachache.”", 
        c: "“Mr. Castillo’s blood pressure is 115/6{”", 
        d: "“Mr. Castillo doesn’t get along with the nurses.”", 
        correct: "c",
            },
        { 
        question: "Which of the following is an example of subjective information?",
        a: "“Mrs. Parker says she is dizzy.”", 
        b: "“Mrs. Parker has a temperature of 101°F.”", 
        c: "“Mrs. Parker had a visit from her son today.”", 
        d: "“Mrs. Parker did not eat any of her dinner.”", 
        correct: "a",
            },
        { 
        question: "Which of the following senses is not used in making observations?",
        a: "Sight", 
        b: "Touch", 
        c: "Smell", 
        d: "Taste", 
        correct: "d",
            },
        { 
        question: "Choose the resident condition that the NA should report immediately to the nurse:",
        a: "Family visiting", 
        b: "Chest pain", 
        c: "Watching too much TV", 
        d: "Acting lonely", 
        correct: "b",
            },
        { 
        question: "Which of the following is the first step in the nursing process?",
        a: "Diagnosis", 
        b: "Assessment", 
        c: "Evaluation", 
        d: "Planning", 
        correct: "b",
            },
        { 
        question: "What is the nursing assistant’s role in care planning?",
        a: "The nursing assistant creates the care plan.", 
        b: "The nursing assistant shares observations that may affect the care plan.", 
        c: "The nursing assistant makes changes to the care plan.", 
        d: "The nursing assistant discusses the diagnosis with the resident’s friends and family.", 
        correct: "b",
            },
        { 
        question: "If a nursing assistant is not sure what information to share at the care conference, she should",
        a: "Talk to the nurse before the meeting", 
        b: "Not attend the meeting", 
        c: "Attend the meeting, but not say anything", 
        d: "Ask the other team members at the meeting what they need to know", 
        correct: "a",
            },
        { 
        question: "Which of the following would be considered an incident?",
        a: "Mrs. Storey eats half of her dinner.", 
        b: "Mrs. Desmond’s family thanks a nursing assistant for taking care of her.", 
        c: "Mr. Noble wants to go for a walk after his bath.", 
        d: "Ms. Martin falls in the bathroom but seems uninjured.", 
        correct: "d",
            },
        { 
        question: "A sentinel event is",
        a: "Any event requiring an incident report", 
        b: "An occurrence involving death or serious injury", 
        c: "A normal event that occurs in the course of the day", 
        d: "A complaint by a resident or family member", 
        correct: "b",
            },
        { 
        question: "Under what conditions should a nursing assistant complete an incident report if he is injured on the job?",
        a: "Only if the injury is serious", 
        b: "Only if the nursing assistant feels the facility is at fault", 
        c: "Only if another employee was involved",
        d: "Any time he is injured on the job", 
        correct: "d",
            },
        { 
        question: "Which of the following is the best example of using proper telephone etiquette at work?",
        a: "“Yes, Mr. Garcia is a resident here; he was admitted for dementia.”", 
        b: "“Good afternoon, Hartman Skilled Care Facility, Brenda Johnson speaking.”", 
        c: "“We’re very busy here today. Can you call back some other time?”", 
        d: "“No, I’m sorry, Elizabeth no longer works here. She was fired a few weeks ago.”", 
        correct: "b",
            },
        { 
        question: "If a nursing assistant sees a call light for a resident who is not assigned to her, she should",
        a: "Answer the call light", 
        b: "Tell the nursing assistant assigned to that resident to answer it", 
        c: "Tell the supervisor", 
        d: "Ignore it", 
        correct: "a",
            },
        { 
        question: "Rounds are",
        a: "The group of residents assigned to each nursing assistant", 
        b: "The list of tasks that must be done on each shift", 
        c: "A method of reporting in which staff members make scheduled visits to each resident's room", 
        d: "Meetings during which the care plan is written", 
        correct: "c",
            },
        { 
        question: "What does a resident’s code status indicate?",
        a: "The type of diet a resident has and how much food should be offered at each meal", 
        b: "The type of care that should be provided in the event of a cardiac arrest or other catastrophic failure", 
        c: "The type and amount of medication that a resident must take each day", 
        d: "The type of personal care tasks that must be completed each day for a resident", 
        correct: "b",
            },
        { 
        question: "What is the first thing a nursing assistant should do after getting a work assignment?",
        a: "Set up residents for mealtime", 
        b: "See if he can change some of his daily assignments", 
        c: "Check if any of his assigned residents requires immediate help or care", 
        d: "Take vital signs on all residents", 
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