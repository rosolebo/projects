//console.log("Hello NicK");
const quizData = [
    {
question: "What is the difference between health and wellness?",
a: "Health is the absence of disease; wellness is a state of physical, mental, and social well-being.", 
b: "Health is a state of physical, mental, and social well-being; wellness has to do with balancing one’s life.", 
c: "Health is merely the absence of disease; wellness looks at the whole person.", 
d: "Health and wellness are the same thing.", 
        correct: "b",
    },
{
question: "If a nursing assistant encourages a resident to play cards with friends, what kind of wellness is she promoting?",
a: "Physical wellness", 
b: "Social wellness", 
c: "Emotional wellness", 
d: "Intellectual wellness", 
        correct: "b",
    },
{
question: "Holistic care focuses on",
a: "The whole person, including physical, mental, and social well-being", 
b: "The person’s disease and disabilities", 
c: "How sick a person is", 
d: "The absence of disease and illness", 
        correct: "a",
    },
{
question: "Which of the following examples demonstrates a holistic approach to care?",
a: "While Ebony is giving Ms. Potter a bath, she asks her how her day has been and listens carefully.", 
b: "Jim rushes his residents through their meals without talking with them so that they can get their dinner faster.", 
c: "Teresa is very religious and likes to share her religious views with her residents.", 
d: "Lemarcus often spends so much time chat- ting with his residents that he does not finish all of his work.", 
        correct: "a",
    },
{
question: "Which of the following is a physical need?",
a: "The need to be accepted", 
b: "The need for self-esteem", 
c: "The need to be free from pain", 
d: "The need for independence", 
        correct: "c",
    },
{
question: "Psychosocial needs include the following:",
a: "Bathing", 
b: "Activity", 
c: "Sleep and rest", 
d: "Love and affection", 
        correct: "d",
    },
{
question: "Jenna knows that Mr. Warren, one of her residents, is very excited about an upcoming visit from his daughter. She takes a little extra time to help him get ready and tells him how good he looks. Which kind of need is Jenna helping her resident to meet?",
a: "Physical need", 
b: "Safety and security need", 
c: "Need for self-esteem", 
d: "Need for self-actualization", 
        correct: "c",
    },
{
question: "Cultural diversity has to do with",
a: "Seeing all people from a certain culture as being the same", 
b: "Preferring people of one culture over those of other cultures", 
c: "Making assumptions about a person based on stereotypes about their culture", 
d: "The wide variety of people throughout the world", 
        correct: "d",
    },
{
question: "What is transcultural nursing?",
a: "The study of various cultures with the goal of providing care specific to each", 
b: "Nursing that involves traveling to different countries", 
c: "Providing care to residents who are transgender", 
d: "Nursing that involves a team approach to care", 
        correct: "a",
    },
{ 
question: "When should staff members become involved in family matters?",
a: "When family members visit too often", 
b: "When staff disapprove of the family members’ lifestyle", 
c: "When there is concern about the resident’s safety around family members", 
d: "When visits disrupt the facility’s routine", 
        correct: "c",
    },
{ 
question: "Which of the following is an example of appropriate behavior by a nursing assistant with a resident’s family?",
a: "Giving them medical advice", 
b: "Telling them everything will be fine if they seem worried", 
c: "Telling the family all about the resident’s condition", 
d: "Listening to the family’s concerns and fears and responding with a meaningful message", 
        correct: "d",
    },
{ 
question: "If a resident’s religious beliefs are different from a nursing assistant’s beliefs, the nursing assistant should",
a: "Respect the resident’s beliefs", 
b: "Try to change the resident’s beliefs", 
c: "Ignore the resident’s dietary restrictions", 
d: "Refuse to care for the resident", 
        correct: "a",
    },
{ 
question: "Which of the following statements is true of spiritual needs?",
a: "Residents will believe in God.", 
b: "Residents will be Christians.", 
c: "Residents will have different spiritual needs and beliefs.", 
d: "Residents will not believe in God or a higher power.", 
        correct: "c",
    },
{ 
question: "If a nursing assistant encounters a resident in a sexual situation, she should",
a: "Call the resident’s clergyperson to discuss it", 
b: "Provide privacy and leave the room", 
c: "Discuss it with the resident’s roommate to get his opinion", 
d: "Ask the resident to stop what she is doing", 
        correct: "b",
    },
{ 
question: "If a nursing assistant sees a resident being sexually abused, she should",
a: "Remove the resident from the situation immediately and report it to the nurse", 
b: "Pretend not to see it to avoid embarrassing the resident", 
c: "Tell the resident’s family", 
d: "Confront the abuser herself", 
        correct: "a",
    },
{
question: "_______is__the__period__of__human development in which a person develops secondary sex characteristics.",
a: "Preschool", 
b: "Middle adulthood", 
c: "Puberty", 
d: "Late adulthood", 
        correct: "c",
    },
{ 
question: "Ageism is",
a: "The natural process of aging", 
b: "Disabilities that occur with aging", 
c: "Prejudice toward or discrimination against the elderly", 
d: "The loss of memory associated with aging", 
        correct: "c",
    },
{ 
question: "Which of the following is true of most elderly people?",
a: "They have many interests.", 
b: "They do not manage money well.", 
c: "They are usually grouchy.", 
d: "They do not like to leave home.", 
        correct: "a",
    },
{ 
question: "Which of the following is true of developmental disabilities?",
a: "Developmental disabilities are temporary.", 
b: "Developmental disabilities restrict physical and/or mental ability.", 
c: "Developmental disabilities are a form of mental illness.", 
d: "People with developmental disabilities can never live or work independently.", 
        correct: "b",
    },
{ 
question: "How can a nursing assistant help a resident who has a developmental disability?",
a: "If the resident cannot speak, the nursing assistant should not speak to him.", 
b: "The nursing assistant can break tasks into smaller steps.", 
c: "If an adult resident acts like a child, the nursing assistant should treat him like a child.", 
d: "The nursing assistant should do everything for the resident.", 
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