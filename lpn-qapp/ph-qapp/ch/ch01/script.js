//focus on Nursing pharmacology 
//chapter-01 Introduction to Drugs
//Items - 10
//console.log("hello")

const quiz = [
  {//question-001
	  q:'Clinical pharmacology is the study of',
	  options:['the biological effects of chemicals.',
	  'drugs used to treat, prevent, or diagnose disease.',
	  'plant components that can be used as medicines.',
	  'binders and other vehicles for delivering medication.'],
	  answer:1	  
  },
  {//question-002
	  q:'Phase I drug studies involve',
	  options:['the use of laboratory animals to test chemicals.',
	  'patients with the disease the drug is designed to treat.',
	  'mass marketing surveys of drug effects in large numbers of people.',
	  'healthy human volunteers who are often paid for their participation.'],
	  answer:3		  
  },
  {//question-003
	  q:'The generic name of a drug is',
	  options:['the name assigned to the drug by the pharmaceutical company developing it.',
	  'the chemical name of the drug based on its chemical structure.',
	  'the original name assigned to the drug at the beginning of the evaluation process.',
	  'the name that is often used in advertising campaigns.'],
	  answer:2		  
  },
  {//question-004
	  q:'An orphan drug is a drug that',
	  options:['has failed to go through the approval process.',
	  'is available in a foreign country but not in this country.',
	  'has been tested but is not considered to be financially viable.',
	  'is available without a prescription.'],
	  answer:2		  
  },
  {//question-005
	  q:'The FDA pregnancy categories were used',
	  options:[' to indicate a drug’s potential or actual teratogenic effects.',
	  'for research purposes only.',
	  'to list drugs that are more likely to have addicting properties.',
	  'to follow regulations set by the DEA.'],
	  answer:0	  
  },
  {//question-006
	  q:'The storing, prescribing, and distributing of controlled substances— drugs that are more apt to be addictive—are monitored by',
	  options:['the FDA.',
	  'the Department of Commerce.',
	  'the Federal Bureau of Investigation.',
	  'the DEA.'],
	  answer:3,	
	  img:''	  
  },
  {//question-007
	  q:'Healthy young women are sometimes not able to be involved in phase I studies of drugs because',
	  options:['male bodies are more predictable and responsive to chemicals.',
	  'females are more apt to suffer problems with ova, which are formed only before birth.',
	  'males can tolerate the unknown adverse effects of many drugs better than females.',
	  'there are no standards to use to evaluate the female response.'],
	  answer:1,	
	  img:''
  },
  {//question-008
	  q:'A patient has been taking fluoxetine (Prozac) for several years, but when picking up the prescription this month found that the tablets looked different and became concerned. The nurse, checking with the pharmacist, found that fluoxetine had just become available in the generic form and the prescription had been filled with the generic product. The nurse should tell the patient',
	  options:['that the new tablet may have similar effects or may not so the patient should carefully monitor response.',
	  'that generic drugs are available without a prescription and they are just as safe as the brand name medication.',
	  'that the law requires that prescriptions be filled with the generic form if available to cut down the cost of medications.',
	  'that the pharmacist filled the prescription with the wrong drug and it should be returned to the pharmacy for a refund.'],
	  answer:2		  
  },
  {//question-009
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['b, c, d ,f',
	  'c, d, e, f',
	  'a, b, c',
	  'a, b, c, e, f'],
	  answer:1,
	  img:'img/sata1-1.jpg'
	  //Ans: c, d, e, f  (Select All That Apply)  
  },
  {//question-010
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['b, c, d ,f',
	  'c, d, e, f',
	  'a, b, c',
	  'a, c, d, f'],
	  answer:3,
	  img:'img/sata1-2.jpg'
	  //Ans: a, c, d, f (Select All That Apply)	  
  }
]


//console.log(quiz)
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
//const questionLimit = 5;

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//push the questions into the availableQuestions Array
function setAvailableQuestions(){
	const totalQuestion = quiz.length;
	for(let i = 0; i < totalQuestion; i++){
		availableQuestions.push(quiz[i])
	}
}

//set question number and question and options
function getNewQuestion(){
	//set question number
	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
	
	//set question-text
	//get random question
	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.q;
	//get position of questionIndex from availableQuestion Array
	const index1 = availableQuestions.indexOf(questionIndex);
	//remove the questionIndex from availableQuestion Array, so that the question does not repeat.
	availableQuestions.splice(index1,1);
	//show question img if 'img' property exists;
	if(currentQuestion.hasOwnProperty("img")){
		const img = document.createElement("img");
		img.src = currentQuestion.img;	
		questionText.appendChild(img);
	}
	//set options
	//get lenght of options
	const optionLen = currentQuestion.options.length
	//push options into availableOptions Array
	for(let i = 0; i < optionLen; i++){
		availableOptions.push(i)
	}
	
	optionContainer.innerHTML = '';
	let animationDelay = 0.15; 
	
	//create options in html
	for(let i = 0; i < optionLen; i++){
		//random option
		const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
		//get the position of 'optonIndex' from the availableOptions
		const index2 = availableOptions.indexOf(optonIndex);
		//remove the 'optonIndex' from the availableOptions, so that the Option does not repeat
		availableOptions.splice(index2,1);
		
		const option = document.createElement("div");
		option.innerHTML = currentQuestion.options[optonIndex];
		option.id = optonIndex;
		option.style.animationDelay = animationDelay + 's';
		animationDelay = animationDelay + 0.15;
		option.className = "option";
		optionContainer.appendChild(option)
		option.setAttribute("onclick", "getResult(this)");
	}
	
	questionCounter++
	//console.log(questionCounter)
}

// get result of current attempt question
function getResult(element){
	const id = parseInt(element.id);
	//get the answer by comparing the id of clicked option
	if(id === currentQuestion.answer){
		//set the green color to the correct option
		element.classList.add("correct");
		//add the indicator to correct mark
		updateAnswerIndicator("correct");
		correctAnswers++;
		console.log("correct:" + correctAnswers)
	}
	else{
		//set the red color to the incorrect option
		element.classList.add("wrong");
		//add the indicator to incorrect mark
		updateAnswerIndicator("wrong");
		
		// if the answer is incorrect then show the correct option by adding
		// green color to the correct option
		const optionLen = optionContainer.children.length;
		for(let i = 0; i < optionLen; i++){
			if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
				optionContainer.children[i].classList.add("correct");
			}
		}
	}
   attempt++;
   unclickableOptions();
}

// make all the other options unclickable once the user select an option
// (RESTRICT THE USER TO CHANGE THE OPTION AGAIN)
function unclickableOptions(){
	const optionLen = optionContainer.children.length;
	for(let i = 0; i < optionLen; i++){
		optionContainer.children[i].classList.add("already-answered");
	}
}

function answersIndicator(){
	answersIndicatorContainer.innerHTML = '';
	const totalQuestion = quiz.length;
	for(let i = 0; i < totalQuestion; i++){
		const indicator = document.createElement("div");
		answersIndicatorContainer.appendChild(indicator);
	}
}

function updateAnswerIndicator(markType){
	answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

function next(){
	if(questionCounter === quiz.length){
		console.log("quiz over");
		quizOver();
	}
	else {
		getNewQuestion();
	}
}

function quizOver(){
	//hide quiz quizBox
	quizBox.classList.add("hide");
	//show the resultBox
	resultBox.classList.remove("hide");
	quizResult();
}
//get the quiz Result
function quizResult(){
	resultBox.querySelector(".total-question").innerHTML = quiz.length;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
	const percentage = (correctAnswers/quiz.length)*100;
	resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
	resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
	
}

function resetQuiz(){
   questionCounter = 0;
   correctAnswers = 0;
   attempt = 0;
}

function tryAgainQuiz(){
	//hide the resultBox
	resultBox.classList.add("hide");
	//show the quizBox
	quizBox.classList.remove("hide");
	resetQuiz();
	startQuiz();
}

function goToHome(){
	//hide result box
	resultBox.classList.add("hide");
	//show home box
	homeBox.classList.remove("hide");
	resetQuiz();
}

// #### STARTING POINT ####

function startQuiz(){
	
	//hide home box
	homeBox.classList.add("hide");
	//show quiz box
	quizBox.classList.remove("hide");
	//first we will set all questions in availableQuestions Array
	setAvailableQuestions();
	//second we will call getNewQuestion(); function
	getNewQuestion();
	//to create indicator of answers
	answersIndicator();
}
   	
window.onload = function(){
	homeBox.querySelector(".total-question").innerHTML = quiz.length;
}
