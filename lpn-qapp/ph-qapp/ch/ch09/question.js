"use strict";
//focus on Nursing pharmacology 
//chapter-09 Antibiotics
//Items - 10
//console.log("hello")
//Array of objects 
const quiz = [
  {//question-001
	  q:'A bacteriostatic substance is one that',
	  options:['directly kills any bacteria it comes in contact with.',
	  'directly kills any bacteria that are sensitive to the substance.',
	  'prevents the growth of any bacteria.',
	  'prevents the growth of specific bacteria that are sensitive to the substance.'],
	  answer:3	  
  },
  {//question-002
	  q:'Gram-negative bacteria',
	  options:['are mostly found in the respiratory tract.',
	  'are mostly associated with soft tissue infections.',
	  'are mostly found in the GI and GU tracts.',
	  'accept a positive stain when tested.'],
	  answer:2	  
  },
  {//question-003
	  q:'Antibiotics that are used together to increase their effectiveness and limit the associated adverse effects are said to be',
	  options:['broad spectrum.','synergistic.','bactericidal.','anaerobic.'],
	  answer:1	  
  },
  {//question-004
	  q:'An aminoglycoside antibiotic might be the drug of choice in treating',
	  options:['serious infections caused by susceptible strains of Gram-negative bacteria.',
	  'otitis media in an infant.',
	  'cystitis in a woman who is 4 months pregnant.',
	  'suspected pneumonia before the culture results are available.'],
	  answer:0	  
  },
  {//question-005
	  q:'Which of the following is not a caution for the use of cephalosporins?',
	  options:['Allergy to penicillin','Renal failure','Allergy to aspirin','Concurrent treatment with aminoglycosides'],
	  answer:2	  
  },
  {//question-006
	  q:'The fluoroquinolones',
	  options:['are found freely in nature.',
	  'are associated with severe adverse reactions.',
	  'are widely used to treat Gram-positive infections.',
	  'are broad-spectrum antibiotics with few associated adverse effects.'],
	  answer:1	  
  },
  {//question-007
	  q:'Cipro, a widely used antibiotic, is an example of',
	  options:['a penicillin.','a fluoroquinolone.','an aminoglycoside.','a macrolide antibiotic.'],
	  answer:1	  
  },
  {//question-008
	  q:'A patient receiving a fluoroquinolone should be cautioned to anticipate',
	  options:['increased salivation.',
	  'constipation.','photosensitivity.','cough.'],
	  answer:2	  
  },
  {//question-009
	  q:'The goal of antibiotic therapy is',
	  options:['to eradicate all bacteria from the system.',
	  'to suppress resistant strains of bacteria.',
	  'to reduce the number of invading bacteria so that the immune system can deal with the infection.',
	  'to stop the drug as soon as the patient feels better.'],
	  answer:2	  
  },
  {//question-010
	  q:'The penicillins',
	  options:['are bacteriostatic.',
	  'are bactericidal, interfering with bacteria cell walls.',
	  'are effective only if given intravenously.',
	  'do not produce cross-sensitivity within their class.'],
	  answer:1	  
  },
  {//question-011
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['b, c, d ,f',
	  'c, d, e, f',
	  'a, b, c',
	  'b, f'],
	  answer:3,
	  img:'img/sata9-1.jpg'
	  //Ans: b, f (Select All That Apply) 
  },
  {//question-012
	  q:'Select All That Apply - Using Options A, B, C, D, Below',
	  options:['a, c, f',
	  'c, d, e, f',
	  'a, b, c',
	  'a, b, c, e, f'],
	  answer:0,
	  img:'img/sata9-2.jpg'
	  //Ans: a, c, f (Select All That Apply) 
  }
]