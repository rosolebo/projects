//console.log("Hello NicK");
const quizData = [
 
    {
        question: "A nursing assistant can make bathing safer for residents by.",
         a: "Asking for help if she cannot safely handle the task alone",
         b: "Gathering all needed equipment after entering the bath/shower area.",
         c: "Making sure the water temperature is not over 120F.",
         d: "Leaving residents alone while bathing or showering",
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
         question: "When removing a food tray from an isolation room, the nursing assistant should",
        a: "Place a paper towel around the specimen container",
        b: "double-bag the food tray",
        c: "leave the food tray at the door",
        d: "tell the resident to remove the tray.",
        correct: "b",
        },
        {
        question: "Which of the following is the proper order to don personal protective equipment (PPE)?",
        a: "Put on gown, mask, goggles, and gloves",
        b: "Put on gloves, gown, and mask, and goggles",
        c: "Put on mask and goggles, gloves, and gown",
        d: "Put on gown, gloves, and mask and goggles",
        correct: "a",
        },
        {
        question: "Droplets normally do not travel more than.",
        a: "Six feet",
        b: "Two feet",
        c: "Eight feet",
        d: "Ten feet",
        correct: "a",
        },
        {
        question: "When ambulating Mr. Mark who has a right side weakness, the nursing assistant should stand on",
        a: "the left side slightly in front of him",
        b: "the right side slightly in front of him:",
        c: "the right side slightly behind him",
        d: "the left side slightly behind him",
        correct: "a",
        },
        {
            question: "Making an area or object free of all microorganisms is called.",
        a: "Infection prevention",
        b: "Disinfection",
        c: "Surgical asepsis",
        d: "Transmission",
        correct: "c",
        },
        {
        question: "One reason that the Health Insurance Portability and Accountability Act (HIPAA) was passed was to",
        a: "Make sure nursing assistants receive adequate health insurance coverage",
        b: "Protect privacy of health information",
        c: "Ensure that care procedures are performed prperly",
        d: "Prevent abuse and neglect of residents",
        correct: "b",
        },
        {
        question: "Which of the following guideliness is true of working around oxygen equipment?",
        a: "The NA should not allow open flames around oxygen",
        b: "The NA should adjust oxygen levels when they are too high or too low.",
        c: "The NA should prescribe skin medication if oxygen device is causing skin irritation",
        d: "The NA should replace oxygen tubing if it becomes clogged",
        correct: "a",
        },
        {
        question: "RACE is an acronym for a safety rule, and means",
        a: "Run to A Close Exit",
        b: "Remove window, Access outside, Call for help, Extinguisher opened",
        c: "Restore power, Activate alarm, Call fire department, Exit the building",
        d: "Rescue residents, Activate alarm, Contain fire, Exinguish",
        correct: "d",
        },
        {
        question: "Which of the following statements is true of gloves?",
        a: "Gloves do not need to be worn when shaving a resident.",
        b: "Disposable gloves can be washed and reused once they are clean.",
        c: "Gloves should be worn when performing care on a resident who has a broken skin.",
        d: "After giving care, gloves are normally not contaminated.",
        correct: "c",
        },
        {
        question: "A diet that is low in ______ may help residents who have diarrhea.",
        a: "Fiber",
        b: "Fluids",
        c: "Bananas",
        d: "Applesuace",
        correct: "a",
        },
        {
        question: "Which of the following positions is used for rectal examination?",
        a: "Sim's",
        b: "Prone",
        c: "Side-lying",
        d: "Knee to chest",
        correct: "a",
        },
        {
        question: "Which of the following is an example of verbal communication?",
        a: "Send a text message",
        b: "Crossing arms in fron of the body",
        c: "Tapping one's feet during a meeting",
        d: "Nodding one's head",
        correct: "a",
        },
        {
        question: "Which of the following can a nursing assistant do if poisoning is suspected?",
        a: "Suggest the resident put his finger down his throat to induce vomiting.",
        b: "Feed the resident crackers or bread to soak up the poision.",
        c: "Give the resident medication and the call poison control.",
        d: "Look for a container that will help him find out what the resident took or ate.",
        correct: "d",
        },
        {
        question: "Identify the body movement below. See Figure E",
        a: "Flexion",
        b: "Abduction",
        c: "Supination",
        d: "Hyperextension",
        correct: "b",
        },
        {
        question: "Identify the body movement below. See Figure F.",
        a: "Supination",
        b: "Foot drop",
        c: "Flexion",
        d: "Opposition",
        correct: "a",
        },
        {
        question: "Long-term care is offered in.",
        a: "Hospital",
        b: "Adult day services facilities",
        c: "Skilled nursing facilities",
        d: "Ambulatory surgical centers",
        correct: "c",
        },
        {
        question: "A mask and goggles should be worn",
        a: "If contact with splashing or spraying blood or body fluids is likely.",
        b: "When caring for a resident with any infectious diseases",
        c: "During all care procedures",
        d: "At all times while in the facility",
        correct: "a",
        },
        {
        question: "When a nursing assistant is working in an isolation room, which of the following items should be labeled with isolation tag?",
        a: "Items brought into the room",
        b: "items removed from the room",
        c: "furniture",
        d: "resident's personal belongings remaining in the room",
        correct: "b",
        },
        {
        question: "The first two steps in approaching an emegency are",
        a: "Perform first aid and assess the situation",
        b: "Call the victim's family and the call 911",
        c: "Assess the situation and the victim",
        d: "Get assistance and perform CPR",
        correct: "c",
        },
        {
        question: " ____is moving a body part away from the middle of the body. See Figure G.",
        a: "Abduction",
        b: "Adduction",
        c: "Pronation",
        d: "Suoine",
        correct: "a",
        },
        {
        question: "The normal respiration rate for adults is",
        a: "18-30 breaths per minute",
        b: "15-25 breaths per minute",
        c: "12-20 breaths per minute",
        d: "08-10 breaths per minute",
        correct: "c",
        },
        {
        question: "What is the primary purpose of washing non-disposable equipment and supply",
        a: "Kill all microbes present on the item",
        b: "Destroy all pathogens from the item",
        c: "Eliminate any bacteria spores on the item",
        d: "Remove debris and organic materials from the item.",
        correct: "d",
        },
        {
        question: "A(n)_____is a group of residents who meet on a regular basis to discuss facility issues",
        a: "Activity Group",
        b: "Residents' Council",
        c: "Ombudsman Committee",
        d: "Society Advisory Group",
        correct: "b",
        },
        {
        question: "If a resident has a hearing impairment, a nursing assistant should",
        a: "Make sure the light is on the resident's face, not the NAs",
        b: "Make sure the light is on the nursing assistant's face, not the residents.",
        c: "Raise the pitch of her voice so that the NA is heard",
        d: "Look at the ground when speaking to the resident",
        correct: "b",
        },
        {
        question: "After taking the vitals of Mrs. Scott, she asked you of her blood pressure readings. How should the nursing assistant respond to her question?",
        a: "Your reading is(tell her the result)",
        b: "You really don't want to know",
        c: "I cannot reveal this information",
        d: "it was about what it was the last time",
        correct: "a",
        },
        {
        question: "Which of the following would be the best way for a nursing assistant to demonstrate patience when a resident is taking a long time to get dressed?",
        a: "Take your time. There is no need to rush",
        b: "Please hurry a little if you can. I have to bathe another resident.",
        c: "When you're feeling better, you will be able to move more quickly.",
        d: "Just so you know, I need to leave work soon.",
        correct: "a",
        },
        {
        question: "Mr. Brown's care plan states that ambulate with assistance 'BID'. How should the nursing assistant assist Mr. Brown?",
        a: "Twice daily",
        b: "Once daily",
        c: "Four times daily",
        d: "After each meal",
        correct: "n",
        },
        {
        question: "What does the term neglect mean?",
        a: "Conspiring with others to commit malpractice",
        b: "Failure to provide needed care or service, resulting in harm to a resident.",
        c: "Using verbal language to insult a resident",
        d: "Separating a resident from her family members",
        correct: "b",
        },
        {
        question: "Why is it important to wear gloves while cleaning the penis of a male resident",
        a: "Because the hands are always cold and so the resident will not feel comfortable",
        b: "To prevent direct contact of the penis",
        c: "To protect against liquid droplets coming from the penis",
        d: "To provide friction between the soap and sponge so it can clean better",
        correct: "c",
        },
        {
        question: "Identify the body movements below. Fig H",
        a: "Flexion",
        b: "Rotation",
        c: "Twisting",
        d: "Bend upside",
        correct: "b",
        },
        {
        question: "When a person's breathing stops, it is called",
        a: "Cardiac arrest",
        b: "Respitory arrest",
        c: "CPR",
        d: "Choking",
        correct : "?",
        },
        {
        question: "Which of the following is true of most elderly people?",
        a: "They have many interests.",
        b: "They do not manage money well.",
        c: "THey are usually grouchy.",
        d: "They do not like to leave home.",
        correct : "a",
        },
        {
        question: "A causative agent is",
        a: "Any microorganism in the body",
        b: "Normal flora that live in or on the body",
        c: "The waiting period between the time the pathogen enters the body and the time it causes infection",
        d: "A pathogen or microorganism that causes disease",
        correct: "d",
        },
        {
        question: "If a nursing assistant shares information about a resident's care on Twitter, it would be considered",
        a: "A breach of etiquette",
        b: "Journalistic impropriety",
        c: "A breach of confidentiality",
        d: "Misappropriation",
        correct: "c",
        },
        {
        question: "____means that a person can be held legally responsible for harming someone else.",
        a: "Liability",
        b: "Lability",
        c: "Litigious",
        d:  "Misdemeanor",
        correct: "a",
        },
        {
        question: "Standard Precautions means",
        a: "Not performing care on residents who have infectious diseases.",
        b: "Treating all blood, body fluids, and mucous membranes as if they were infected.",
        c: "Asking all residents if they have infectious diseases before performing care.",
        d: "Looking at residents' charts to determine if they have an infectious disease.",
        correct: "b",
        },
        {
        question: "_______is a program of care given by a specialist or team to help restore or improve function following an illness or injury.",
        a: "Renovation",
        b: "Adaptation",
        c: "Conversion",
        d: "Rehabilitation",
        correct:  "d",
        },
        {
        question: "The part of a word that is added to the end of a root or a prefix is the",
        a: "Prefix",
        b: "Root",
        c: "Suffix",
        d: "Abbreviation",
        correct:  "c",
        },
        {
        question: "During code team procedures, a nursing assistant might be asked to",
        a: "Give resident oxygen",
        b: "Call the resident's family",
        c: "Work with the suction machine",
        d: "Give chest compressions during CPR",
        correct:  "d",
        },
        {
        question: "When preparing a tepid (warm) bath for a resident, the nursing assistant must make sure the temperature of the water is",
        a: "Exactly 70 degrees Fahrenheit",
        b: "At least 125 degrees Fahrenheit",
        c: "Comfortable to the resident's touch",
        d: "Comfortable to the nursing assistant's touch",
        correct: "c",
        },
        {
        question: "_____is touching the thumb to any other finger. See Fig C.",
        a: "Opposition",
        b: "Rotation",
        c: "Hyperextension",
        d: "Hip",
        correct: "a",
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
        question: "Edema is a medical term for",
        a: "Breaking",
        b: "Swelling",
        c: "Shrinking",
        d: "Sleeping",
        correct: "b",
        },
        {
        question: "A durable power of Attorney for health care is",
        a: "A legal document that describes how a resident's possessions for the care facility should be distributed after he has died.",
        b: "A legal document that appoints a family member to make financial decisions for a resident living in care facility.",
        c: "A legal documen that is sent to probate after a person has died.",
        d: "A legal document that appoints someone to make medical decisions for a person who is unable to do so for himself.",
        correct: "d",
        },
        {
        question: "In which of the following parts of the body is mucous membranes found?",
        a: "Feet",
        b: "Hands",
        c: "Genitals",
        d: "Elbows",
        correct: "c",
        },
        {
        question: "One way for a nursing assistant to communicate effectively with a resident who has a visual impairment is to",
        a: "Wait until the resident speaks to her before identifying herself.",
        b: "Touch the resident on the arm before identifying herself to let her know the NA is there.",
        c: "Speak as little as possible while providing care.",
        d: "Use the face of an imaginary clock to explain the position of objects.",
        correct: "d",
        },
        {
        question: "_____care involves the whole person, including his or her physical, social, emotional, and spiritual needs.",
        a: "Hieroglyphic",
        b: "Holistic",
        c: "Holographic",
        d: "Histrionic",
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
        question: "When pathogens enter the bloodstream and move throughout the body, a _______ has occurred.",
        a: "System infection",
        b: "Localized infection",
        c: "Healthcare-associated infection",
        d: "Cross-infection",
        correct: "a",
        },
        {
        question: "Mr. Reynosa has a doctor's order for an Epsom salts additive during bathing. What kind of bath would be the most appropriate for him?",
        a: "Partial bath",
        b: "Shower",
        c: "Tub bath",
        d: "Complete bed bath",
        correct: "b",
        },
        {
        question: "Which of the following statements is true of a living will?",
        a: "living will goes into effect when a resident dies and leaves a large estate that needs to be distributed.",
        b: "A living will is an important part of a resident's wishes regarding his inheritance.",
        c: "A living will is a document that states the medical care a resident wants or does not want if he becomes unable to make those decisions.",
        d: "A living will helps a resident decide who will manage his financial affairs when he is no longer able to do that.",
        correct: "b",
        },
        {
        question: "When beginning to weigh a resident, the scale should be balanced at",
        a: "Zero",
        b: "Five pounds",
        c: "Ten pounds",
        d: "Negative two pounds",
        correct: "a",
        },
        {
        question: "A person's orientation includes",
        a: "Awareness of his vital signs",
        b: "Awareness of the date and time",
        c: "Awareness of his diagnosis",
        d: "Awareness of nonverbal communication",
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
        question: "Ageism is",
        a: "The natural process of aging",
        b: "Disabilities that occur with aging",
        c: "Prejudice towards or discrimination against the elderly",
        d: "The  loss of memory associated with aging",
        correct: "c",
        },
        {
        question: "Which of the following is another name for armpit?",
        a: "Tympanum",
        b: "Rectum",
        c: "Axilla",
        d: "Temporal",
        correct: "c",
        },
        {
        question: "____is bending a body part",
        a: "Flexion",
        b: "Active range of motion",
        c: "Pronation",
        d: "Foot drop",
        correct: "a",
        },
        {
        question: "In which of the following situations should a nursing assistant give abdominal thrusts to someone?",
        a: "The person is coughing",
        b: "The person cannot speak, cough, or breathe",
        c: "The person is breathing very rapidly.",
        d: "The person tells the nursing assistant that she feels short of breath.",
        correct: "b",
        },
        {
        question: "A person in a coma may still be able to",
        a: "Hear",
        b: "Speak",
        c: "See",
        d: "Walk",
        correct: "a",
        },
        {
        question: "______destroys pathogens but not all pathogens, while______destroys all microorganisms, including those that form spores.",
        a: "Sterilization, disinfection",
        b: "Asepsis, transmission",
        c: "Disinfection, sterilization",
        d: "Transmission, asepsis",
        correct: "c",
        },
        {
        question: "Why does working with oxygen require special safety precautions",
        a: "Oxygen is an expensive medication.",
        b: "Oxygen is a dangerous fire hazard.",
        c: "Oxygen levels must be adjusted often.",
        d: "Oxygen equipment is very fragile.",
        correct: "b",
        },
        {
        question: "_____are devices applied externally to a limb for support and protection.",
        a: "Orthotic devices",
        b: "Contracture",
        c: "Handrolls",
        d: "Bed cradles",
        correct: "a",
        },
        {
        question: "Which of the following is an example of subjective information?",
        a: "Mrs. Osborn's output is 45 milliliters of urine.",
        b: "Mrs. Osborn is walking with a limp.",
        c: "Mrs. Osborn is complaining of difficulty breathing.",
        d: "Mrs. Osborn has a raised red area on her forehead.",
        correct: "c",
        },
        {
        question: "Why should a resident be in isolation?",
        a: "Because the resident requires Standard Precautions",
        b: "Because the resident require Transmission-Based Precautions",
        c: "Because the resident cannot get along with other residents",
        d: "Because the resident cannot be managed",
        correct: "b",
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
        question: "Which of the following is true of Transmission-Based Precautions?",
        a: "An NA does not need to practice Standard Precautions if he practices Transmission-Based Precautions.",
        b: "They are exactly the same as Standard Precautions.",
        c: "They are practiced in addition to Standard Precautions.",
        d: "They will not be listed in the care plan so as not to alarm anyone.",
        correct: "c",
        },
        {
        question: "Where is the best place to dispose of sharps?",
        a: "In the trash can in the resident's room",
        b: "In the closet disposal container",
        c: "In a puncture-proof biohazard container",
        d: "With reusable equipment waiting to be cleaned and reprocessed",
        correct: "c",
        },
        {
        question: "Identify the body movements below. Leg toes-fingers facing up & moving back and front. See Fig J.",
        a: "Dorsiflexion",
        b: "Movements",
        c: "AAOM",
        d: "Range of motion",
        correct: "a",
        },
        {
        question: "When using a transfer belt, the nursing assistant should",
        a: "Place it under the resident's clothing.",
        b: "Place it around the fractured limb.",
        c: "Place it around a resident's chest.",
        d: "Place it around a resident's waist.",
        correct: "d",
        },
        {
        question: "Which of the following best describes a nursing assistant's responsibilities regarding critical thinking?",
        a: "Immediately reporting a potential problem to the nurse.",
        b: "Seeking the resident's opinion about a potential problem.",
        c: "Asking the doctor to consider a medication change for a potential problem.",
        d: "Making changes in the resident's care plan due to a potential problem.",
        correct: "a",
        },
        {
        question: "When a physician issues a DNR order, it means that",
        a: "A resident should not be resuscitated",
        b: "The resident's family must be asked if they want the resident to be resuscitated",
        c: "A doctor must be called before resuscitation is performed",
        d: "The resident's attorney must be contacted before resuscitation is done",
        correct: "a",
        },
        {
        question: "Which of the following is the proper conversion of 1445 to regular time?",
        a: "2:15 a.m.",
        b: "2:15 p.m.",
        c: "2:45 a.m.",
        d: "2:45 p.m.",
        correct: "d",
        },
        {
        question: "Which of the following is part of a person's vital signs?",
        a: "Glucose level",
        b: "Urine output",
        c: "Blood pressure",
        d: "Blood count",
        correct: "c",
        },
        {
        question: "In which position is a resident if he is on his left side with his lower arm behind his back and his upper knee flexed?",
        a: "Sims",
        b: "Prone",
        c: "Fowler's",
        d: "Supine",
        correct: "n",
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
        question: "When washing hands, a nursing assistant should use friction for",
        a: "At least 25 seconds",
        b: "At least 20 seconds",
        c: "At least 15 seconds",
        d: "At least 5 seconds",
        correct: "b",
        },
        {
        question: "Protected Health Information (PHI) includes",
        a: "The number of visitors a resident has on a weekly basis",
        b: "A resident's personal financial information",
        c: "A resident's personal preferences regarding roommates",
        d: "A resident's voting history",
        correct: "a",
        },
        {
        question: "Assistive devices are used to",
        a: "Help residents with handwashing",
        b: "Help residents to perform activities of daily living",
        c: "Help residents learn to adapt to new roommates",
        d: "Help residents to use wheel chairs",
        correct: "b",
        },
        {
        question: "If a resident becomes combative, a nursing assistant should",
        a: "Try to find out what triggered the behavior",
        b: "Leave the resident alone to calm down",
        c: "Tell the resident that he may be removed from the facility if he does not stop soon",
        d: "Argue with the resident to make him understand what is best",
        correct: "a",
        },
        {
        question: "When is it appropriate for a nursing assistant to hit a resident?",
        a: "When a resident is uncooperative during care",
        b: "When a resident threatens the nursing assistant or others",
        c: "When a resident hits the nursing assistant first",
        d: "Never",
        correct: "d",
        },
        {
        question: "When transfering a resident who has a weak side",
        a: "The weaker side moves firt",
        b: "The stronger side moves first",
        c: "The strong side and weak side move at the same time",
        d: "It does not matter whic side moves first",
        correct: "b",
        },
        {
        question: "Which of the following is an example of objective information?",
        a: "A resident's face is drooping on one side",
        b: "A resident does not like his care giver",
        c: "A resident enjoyed his breakfast.",
        d: "A resident does not want to go to religious services today",
        correct: "a",
        },
        {
        question: "A susceptible host is",
        a: "An infected person who could transfer disease",
        b: "A pathogen that causes disease",
        c: "A friendly host",
        d: "Uninfected person who could become ill",
        correct: "d",
        },
        {
        question: "The temperature of a resident was taken orally. Which of the following will be expected to be abnormal",
        a: "97.8F",
        b: "98.6F",
        c: "97.6F",
        d: "100.6F",
        correct: "n", 
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