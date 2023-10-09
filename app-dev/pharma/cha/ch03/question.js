
"use strict";
//focus on Nursing pharmacology 
//chapter-03 Toxic Effects of Drugs
//Items - 10
//console.log("hello")
//Array of objects 
const quiz = [
  {//question-001
	  q:'An example of a drug allergy is',
	  options:['dry mouth occurring with use of an antihistamine.',
	  'increased urination occurring with use of a thiazide diuretic.',
	  'breathing difficulty after an injection of penicillin.',
	  ' urinary retention associated with atropine use.'],
	  answer:2	  
  },
  {//question-002
	  q:'A patient taking glyburide (an antidiabetic drug) has his morning dose and then does not have a chance to eat for several hours. An adverse effect that might be expected from this would be',
	  options:['a teratogenic effect.',
	  'a skin rash.',
	  'an anticholinergic effect.',
	  ' hypoglycemia.'],
	  answer:3		  
  },
  {//question-003
	  q:'A patient with a severe infection is given gentamicin, the only antibiotic shown to be effective in culture and sensitivity tests. A few hours after the drug is started intravenously, the patient becomes very restless and develops edema. Blood tests reveal abnormal electrolytes and elevated blood urea nitrogen. This reaction was most likely caused by',
	  options:['an anaphylactic reaction.',
	  'renal toxicity associated with gentamicin.',
	  'superinfection related to the antibiotic.',
	  'hypoglycemia.'],
	  answer:1		  
  },
  {//question-004
	  q:'Patients receiving antineoplastic drugs that disrupt cell function often have adverse effects involving cells that turn over rapidly in the body. These cells include',
	  options:['ovarian cells.',
	  'liver cells.',
	  'cardiac cells.',
	  'bone marrow cells.'],
	  answer:3		  
  },
  {//question-005
	  q:'A woman has had repeated bouts of bronchitis throughout the fall and has been taking antibiotics. She calls the clinic with complaints of vaginal pain and itching. When she is seen, it is discovered that she has developed a yeast infection. You understand that',
	  options:['her bronchitis has moved to the vaginal area.',
	  'she has developed a superinfection, because the antibiotics kill bacteria that normally provide protection.',
	  'she probably has developed a sexually transmitted disease related to her lifestyle.',
	  'she will need to take even more antibiotics to treat this new infection.'],
	  answer:1	  
  },
  {//question-006
	  q:'Knowing that a patient is taking a loop diuretic and is at risk for developing hypokalemia, the nurse would assess the patient for',
	  options:['hypertension, headache, and cold and clammy skin.',
	  'decreased urinary output and yellowing of the sclera.',
	  'weak pulse, low blood pressure, and muscle cramping.',
	  'diarrhea and flatulence.'],
	  answer:2,		  
  },
  {//question-007
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['b, c, d ,f',
	  'c, d, e, f',
	  'a, b, f',
	  'a, c, e, f'],
	  answer:2,
	  img:'img/sata3-1.jpg'
	  // a, b, f  (AllThatApply)
  },
  {//question-008
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['b, c, d ,f',
	  'c, d, e, f',
	  'a, b, c',
	  'a, b, c, d, e, f'],
	  answer:3,
	  img:'img/sata3-2.jpg'
	  //a, b, c, d, e, f (AllThatApply(		  
  },
  {//question-009
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['b, c, d ,f',
	  'c, d, e, f',
	  'a, b, c',
	  'a, b, e, f'],
	  answer:3,
	  img:'img/sata3-3.jpg'
	  // a, b, e, f  (AllThatApply)		  
  },
  {//question-010
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['b, c, d ,f',
	  'b, c, d, e',
	  'a, b, c',
	  'a, b, c, e, f'],
	  answer:1,
	  img:'img/sata3-4.jpg'
	  //  b, c, d, e (AllThatApply)		  
  }
]