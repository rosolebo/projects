//console.log("Hello NicK");
const quizData = [
 
    {
        question: "Hygiene is",
        a: "Another word for bad breath", 
        b: "Methods of keeping the body clean", 
        c: "Activities of daily living, such as eating, drinking, and elimination", 
        d: "a.m. care and p.m. care", 
        correct: "b",
            },
        { 
        question: "One way to promote dignity and independence with personal care is to",
        
        a: "Encourage residents to perform tasks independently even if it takes longer", 
        b: "Choose which clothes and cosmetics the resident will wear", 
        c: "Encourage residents to do their activities of daily living quickly", 
        d: "Leave residents alone while bathing", 
        correct: "a",
            },
        { 
        question: "Ms. Martin is an elderly resident with very dry skin. What kind of bath would be appropriate for her?",
        a: "Partial bath", 
        b: "Shower", 
        c: "Tub bath", 
        d: "Complete bed bath", 
        correct: "a",
            },
        { 
        question: "Mr. Reynosa has a doctor’s order for an Epsom salts additive during bathing. What kind of bath would be most appropriate for him?",
        a: "Partial bath", 
        b: "Shower", 
        c: "Tub bath", 
        d: "Complete bed bath", 
        correct: "c",
            },
        { 
        question: "Ms. Reid is unable to get out of bed due to recent surgery. She is very concerned with cleanliness and wants to bathe every day. Which kind of bath is most appropriate for her?",
        a: "Partial bath", 
        b: "Shower", 
        c: "Tub bath", 
        d: "Complete bed bath", 
        correct: "d",
            },
        { 
        question: "The decision on which bath to give a resident is made by",
        a: "The physical therapist", 
        b: "The nursing assistant", 
        c: "The doctor and the resident", 
        d: "The resident’s family", 
        correct: "c",
            },
        { 
        question: "Observing residents’ skin during personal care and bathing is especially important in the prevention of",
        a: "Depression", 
        b: "Abuse", 
        c: "Pressure injuries", 
        d: "Diabetes", 
        correct: "c",
            },
        { 
        question: "Which of the following is the highest priority for nursing assistants when bathing residents?",
        a: "Speed", 
        b: "Safety", 
        c: "Making sure every resident has a bath every day", 
        d: "Observing for mobility", 
        correct: "b",
            },
        { 
        question: "A nursing assistant can make bathing safer for residents by",
        a: "Asking for help if she cannot safely handle the task alone", 
        b: "Gathering all needed equipment after entering the bath/shower area", 
        c: "Making sure the water temperature is not over 120°F", 
        d: "Leaving residents alone while bathing or showering", 
        correct: "a",
            },
        { 
        question: "A general rule for bathing a person is",
        a: "Wash from dirtiest to cleanest", 
        b: "Wash from cleanest to dirtiest", 
        c: "Wash body parts in whatever order the resident prefers", 
        d: "Wash body parts in whatever order the nursing assistant prefers", 
        correct: "b",
            },
        { 
        question: "The part of the body that should be washed last is the",
        a: "Face", 
        b: "Legs", 
        c: "Buttocks", 
        d: "Hands", 
        correct: "c",
            },
        { 
        question: "Which of the following should be washed every day?",
        a: "Hair", 
        b: "Knees", 
        c: "Chest", 
        d: "Perineum", 
        correct: "d",
            },
        { 
        question: "Which of the following is true of giving a complete bed bath?",
        a: "The nursing assistant should wash the anal area before the perineal area.", 
        b: "The nursing assistant should make sure that the water temperature is no higher than 110°F.", 
        c: "The nursing assistant should place a towel or bed pad under the part of the body that is being washed.", 
        d: "The nursing assistant should uncover the resident’s entire body before beginning the bath.", 
        correct: "c",
            },
        { 
        question: "If the nursing assistant notices redness around bony areas during a massage, she should",
        a: "Massage around these areas", 
        b: "Massage these areas", 
        c: "Discontinue the massage", 
        d: "Apply extra lotion to these areas", 
        correct: "a",
            },
        { 
        question: "How often must mouth care be provided for residents?",
        a: "Once a day", 
        b: "At least twice a day", 
        c: "Only when the resident requests it", 
        d: "Every other day", 
        correct: "b",
            },
        { 
        question: "A resident who is edentulous",
        a: "Lacks teeth", 
        b: "Has bad breath", 
        c: "Is wearing dentures", 
        d: "Has tartar deposits on the teeth", 
        correct: "a",
            },
        { 
        question: "Which of the following is true about mouth care?",
        a: "Residents without teeth will not require any mouth care.", 
        b: "Residents who are unconscious and do not eat do not require any mouth care.", 
        c: "Mouth care is not just care of the teeth, but also the mouth, tongue, and gums.", 
        d: "Residents who wear dentures do not require mouth care.", 
        correct: "c",
            },
        { 
        question: "Which of the following is the proper temperature for rinsing and storing dentures?",
        a: "Warm", 
        b: "Cool", 
        c: "Hot", 
        d: "Boiling", 
        correct: "b",
            },
        { 
        question: "The primary risk for residents who are unconscious is",
        a: "Mouth dryness", 
        b: "Aspiration", 
        c: "Gingivitis", 
        d: "Mouth sores", 
        correct: "b",
            },
        { 
        question: "During which of the following procedures must a nursing assistant always wear gloves?",
        a: "Shaving a resident", 
        b: "Combing or brushing hair", 
        c: "Dressing a resident", 
        d: "Turning a resident", 
        correct: "a",
            },
        {
        question: "Ways to prevent aspiration during mouth care of residents who are unconscious include",
        a: "Pouring mouthwash slowly into the resident’s mouth", 
        b: "Turning residents on their backs when giving mouth care", 
        c: "Avoiding performing mouth care on residents who are unconscious", 
        d: "Using as little liquid as possible when giving mouth care", 
        correct: "d",
            },
        { 
        question: "A nursing assistant should give nail care",
        a: "Whenever she has time", 
        b: "When she is bathing a resident", 
        c: "When she notices a resident’s nails are getting long", 
        d: "When the resident’s nail polish wears off", 
        correct: "b",
            },
        { 
        question: "Which of the following statements is true?",
        a: "Residents’ hair should be handled gently because hair can be pulled out when combing or brushing it.", 
        b: "Residents’ hair should be combed or brushed into childish hairstyles because they look cute on elderly people.", 
        c: "Nursing assistants should cut residents’ hair when it gets long and when residents request it.", 
        d: "Pediculosis (lice) cannot spread quickly.", 
        correct: "a",
            },
        { 
        question: "When assisting a resident who has one weak side with dressing,",
        a: "Clothing should be put on the weak side first", 
        b: "Clothing should be put on the strong side first", 
        c: "The weak side should be referred to as the “bad side”", 
        d: "It does not matter which side clothing is put on first", 
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