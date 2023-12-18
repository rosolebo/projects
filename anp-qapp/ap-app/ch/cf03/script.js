"use strict";
//connect
console.log("Flashcard App Connected");

var prev = document.querySelector('#prev');
var flip = document.querySelector('#flip');
var next = document.querySelector('#next');

/* Change the questions to whatever you want! Remember to stick to the theme of music this month. 
   questions and answers move to file: datas.js
*/

var currentText = questions[0];
var questionNumber = 0;
var cardState = 0;
/* !-- 0 indicates the front question side and 1 indicates the back answer side. */

updateText();

function flipCard(){
    if(cardState == 0){
        //display answer
        currentText = answers[questionNumber];
        cardState++;
    }
    else{
        //display question
        currentText = questions[questionNumber];
        cardState--;
    }
    updateText();
}

function nextCard(){
    var length = questions.length;
    if(questionNumber<length-1)
      questionNumber++;
    else{
        alert("Congrats! You have reached the end of the flashcard app!")
        questionNumber = 0;
    }
    currentText = questions[questionNumber];
    cardState = 0;
    updateText();
}

function previousCard(){
    var length = questions.length;
    if(questionNumber > 0)
      questionNumber--;
    else
      questionNumber = length - 1;

    currentText = questions[questionNumber];
    cardState = 0;
    updateText();
}

/* Update the text shown on the flashcard after a button press.*/
function updateText() {
    document.getElementById("flashcard").innerHTML = currentText;
} 

flip.addEventListener('click', flipCard);
prev.addEventListener('click', previousCard);
next.addEventListener('click', nextCard);