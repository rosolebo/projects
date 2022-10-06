//console.log("Hello NicK");
const quizData = [
 
    {
        question: "____is the study of how body parts function.",
        a: "Biology", 
        b: "Anatomy", 
        c: "Physiology", 
        d: "Pathophysiology", 
        correct: "a",
            },
        {
        question: "The heart is an example of a(n)_____.",
        a: "Cell", 
        b: "Tissue", 
        c: "Organ", 
        d: "Body system", 
        correct: "a",
            },
        {
        question: "The contractions that push food toward the stomach are called",
        a: "Peristalsis", 
        b: "Mastication", 
        c: "Defecation", 
        d: "Absorption", 
        correct: "a",
            },
        {
        question: "Stool should normally be",
        a: "Brown and soft", 
        b: "Black and hard", 
        c: "Brown and loose", 
        d: "Red and formed", 
        correct: "a",
            },
        {
        question: "A way for a nursing assistant to promote normal elimination for residents is to",
        a: "Encourage fluid intake and nutritious meals", 
        b: "Encourage residents to wait as long as possible to go to the bathroom", 
        c: "Decrease fiber intake", 
        d: "Discourage too much physical activity", 
        correct: "a",
            },
        {
        question: "How should a standard bedpan be positioned?",
        a: "The smaller end should be aligned with the resident’s buttocks.", 
        b: "The wider end should be aligned with the resident’s buttocks.", 
        c: "One of the longer sides should be aligned with the resident’s buttocks.", 
        d: "It should be turned on its side.", 
        correct: "a",
            },
        {
        question: "Portable commodes are used when",
        a: "A resident cannot get out of bed", 
        b: "A resident can get out of bed but has difficulty walking to the bathroom", 
        c: "Nursing assistants do not have the time to assist a resident to the bathroom", 
        d: "A resident has an ostomy", 
        correct: "a",
            },
        {
        question: "What is a common symptom of gastroesophageal reflux disease (GERD)?",
        a: "Diarrhea", 
        b: "Lactose intolerance", 
        c: "Constipation", 
        d: "Heartburn", 
        correct: "a",
            },
        {
        question: "An ileostomy or colostomy may be needed for a resident who has",
        a: "Constipation", 
        b: "Crohn’s disease", 
        c: "Lactose intolerance", 
        d: "Flatulence", 
        correct: "a",
            },
        { 
        question: "Signs of constipation include",
        a: "Liquid or frequent stools", 
        b: "Rapid heart rate", 
        c: "Fecal incontinence", 
        d: "Irritability", 
        correct: "a",
            },
        { 
        question: "A resident who has hemorrhoids should avoid",
        a: "Fiber in the diet", 
        b: "Excessive intake of water", 
        c: "Sitz baths", 
        d: "Excessive cleaning and wiping of the area", 
        correct: "a",
            },
        { 
        question: "The best position for bowel elimination is",
        a: "Lying flat on the bed", 
        b: "Squatting and leaning forward", 
        c: "Lying on the stomach", 
        d: "Sitting as straight as possible, with the feet flat on the floor", 
        correct: "a",
            },
        { 
        question: "During an enema, the resident should be in the position.",
        a: "Lateral", 
        b: "Supine", 
        c: "Sims’", 
        d: "Fowler’s", 
        correct: "a",
            },
        { 
        question: "A stool sample that is to be tested for must be delivered to the lab immediately.",
        a: "Blood", 
        b: "Constipation", 
        c: "Mucus", 
        d: "Ova and parasites", 
        correct: "a",
            },
        { 
        question: "Hidden, or, blood is found inside stool with a microscope or a special chemical test.",
        a: "Occult", 
        b: "Hemoccult", 
        c: "Toxic", 
        d: "Pathogenic", 
        correct: "a",
            },
        { 
        question: "Which of the following statements is true ofostomies?",
        a: "Ostomies require no special care.", 
        b: "People with ostomies are rarely embarrassed by the ostomy.", 
        c: "Nursing assistants do not need to worry about privacy when providing ostomy care.", 
        d: "People with ostomies need to receive regular skin care and proper hygiene.", 
        correct: "a",
            },
        { 
        question: "Which of the following is a guideline for assisting with bowel retraining?",
        a: "NAs should encourage residents to drink plenty of fluids.", 
        b: "NAs do not need to wear gloves when handling body wastes.", 
        c: "NAs do not need to provide privacy during elimination if residents are in bed.", 
        d: "NAs should let residents know when they are taking too long to have a bowel movement.", 
        correct: "a",
            },
        { 
        question: "Which of the following is one way that a bariatric bed may differ from a regular bed?",
        a: "The bed may be lower to the floor.", 
        b: "The bed may be narrower.", 
        c: "The bed may not be able to be used.", 
        d: "The bed is made for people who weigh less than average.", 
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