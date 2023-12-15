
"use strict";
//Anatomy and Physiology 
//chapter- Toxic Effects of Drugs
//Items - 10
//console.log("hello")
//Array of objects 
const quiz = [
  {//question-001 
	   q:"Which sentence is written correctly?",
	  options:["Since the professor was excessively boring; many of his students fell asleep.",
	  "Since the professor was excessively boring, many of his students fell asleep.",
	  "Since the professor was excessively boring many of his students fell asleep.",
	  "Since the professor was, excessively boring, many of his students fell asleep."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-002 
	   q:"The medical examiner was called in to perform a post-mortem examination.",
	  options:["Medical",
	  "Was",
	  "Perform",
	  "examination"],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata2-1.jpg" 
  },
  {//question-003 
	   q:"The postman came to the house. He has a letter for my mother. I heard the doorbell ring. I took the letter from the postman. To improve sentence fluency, how could you state the information above in a single sentence?",
	  options:["When I heard the doorbell ring, I took the letter for my mother from the postman who had come to the house.",
	  "Having had a letter for my mother, the postman came to the house, where I heard the doorbell ring and took the letter from him.",
	  "Coming to the house with a letter for my mother, the postman rang the doorbell, which I heard, and so I took the letter from him.",
	  "When I heard the doorbell ring, I took the letter from the postman for my mother, who had come to the house."],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-004 
	    q:"__________ confident that with enough study they can easily pass the final exam. Which of the following correctly completes the sentence above?",
	  options:["They have",
	  "There",
	  "Their",
	  "They’re"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-005 
	  q:"Of the __________ items available to purchase in our neighbor’s ____________ sale, the jewelry was the most valuable. Which of the following correctly completes the sentence above?",
	  options:["miscellaneous; garage",
	  "miscellaneous; garage",
	  "miscelaneous; garage",
	  "miscelaneous; garage"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-006 
	  q:"The mountaineering group _______ looking forward to climbing K2 next year. Which of the following correctly completes the sentence above?",
	  options:["is",
	  "Are",
	  "Be",
	  "were"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-007 
	  q:"Don’t let anyone tell you what you can and cannot do. What kind of sentence is this?",
	  options:["Interrogative",
	  "Imperative",
	  "Exclamatory",
	  "Declarative"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-008 
	  q:"The admissions consultant outlined what makes a thorough application package, unrespective of financial hardship. What is the error in this sentence?",
	  options:["Consultant",
	  "Thorough",
	  "Package",
	  "Unrespective"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-009 
	  q:"Which of the following sentences is grammatically correct?",
	  options:["He could accept anything from her, accept a lie.",
	  "He could except anything from her, accept a lie.",
	  "He could accept anything from her, except a lie.",
	  "He could except anything from her, except a lie."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-010 
	  q:"The well-stocked larder was replete with dozens of canned goods intended to last through the winter. Which of the following is the meaning of the underlined word above?",
	  options:["Full",
	  "Heavy",
	  "Managed",
	  "Exploding"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-011 
	  q:"Which of the following is an example of a simple sentence?",
	  options:["The movie about the comic book superhero.",
	  "The movie about the comic book superhero that I watched last Friday night was very entertaining.",
	  "The movie about the comic book superhero had never interested me until last week.",
	  "The movie about the comic book superhero fascinated me, but it bored my best friend."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-012 
	  q:"To ________ should I address the postcard? Which of the following correctly completes the sentence above?",
	  options:["Who",
	  "Whom",
	  "Which",
	  "the which"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-013 
	  q:"Which of the following phrases follows the rules of capitalization?",
	  options:["Meredith’s Uncle",
	  "my sister Cheryl",
	  "her Great-Aunt",
	  "grandma Beth"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-014 
	  q:"The actors’ performances powerfully ________ the audience. Which of the following options correctly completes the sentence above?",
	  options:["Effected",
	  "Affected",
	  "were effecting",
	  "were affecting"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-015 
	  q:" The clock shows ______ almost nine o’clock, so the bridal shop will soon be opening ______ doors. Which of the following sets of words should be used to fill in the blanks in the sentence above?",
	  options:["it’s; its",
	  "its; its",
	  "it’s; its’",
	  "its; it’s"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-016 
	  q:"Follow these directions to get to the _________ make a left at the next intersection, drive three miles to the third stop sign, then turn left, and continue another two miles until you see the parking lot on the right-hand side. Which of the following punctuation marks correctly completes the sentence above?",
	  options:["Church,",
	  "Church;",
	  "Church:",
	  "church-"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-017 
	  q:"His job performance was found to have an __________ low track record of success in nearly every area. Which of the following is the correct completions of the sentence above?",
	  options:["Abysmal",
	  "Abysmall",
	  "Abysmaly",
	  "abysmally"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-018 
	  q:"When the gymnastic athletes travel for a competition, a chaperone must accompany ______. Which of the following options correctly completes the sentence?",
	  options:["It",
	  "Them",
	  "all of it",
	  "their"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-019 
	  q:"Next year, I __________. Which of the following correctly completes the sentence above?",
	  options:["completed my college degree",
	  "did complete my college degree",
	  "will complete my college degree",
	  "completing my college degree"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-020 
	  q:"The United States has ________ states than Europe has countries; there are only 47 European countries, but there are 50 states in America. Which of the following options correctly completes the sentence above?",
	  options:["the more",
	  "Most",
	  "More",
	  "many"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc..  
  },
  {//question-021 
	  q:"Martin expressed his fear of diving in the deep ocean trench. What kind of sentence is this?",
	  options:["Imperative",
	  "Interrogative",
	  "Exclamatory",
	  "Declarative"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-022 
	  q:"The _________ late student was reprimanded by the teacher. Which of the following correctly completes the sentence above?",
	  options:["Habitualy",
	  "Habitually",
	  "Habituel",
	  "habitually"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-023 
	  q:"Which sentence is the clearest?",
	  options:["At the age of twelve, my parents sent me to boarding school.",
	  "When I was twelve, my parents sent me to boarding school.",
	  "At the age of twelve, I sent my parents to boarding school.",
	  "My parents, at the age of twelve, sent me to boarding school."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-024 
	  q:"The child _______ to ride all the roller coasters at Disneyland. Which of the following correctly completes the sentence above?",
	  options:["Wants",
	  "Want",
	  "does want",
	  "has the want"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-025 
	  q:"It's important _______ research your essay topic thoroughly so you do not include _______ much irrelevant information. Which of the following sets of words should be used to fill in the blanks in the sentence above?",
	  options:["Too;to",
	  "To;two",
	  "To;too",
	  "too;two"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-026 
	  q:"Any highly-regarded military leader should be capable of giving __________ orders.Which of the following is the correct completion of the sentence above?",
	  options:["Decicive",
	  "Desicive",
	  "Desisive",
	  "decisive"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-027 
	  q:"Which of the following sentences is grammatically correct?",
	  options:["They’re concern is that their may not be enough appetizers for everyone there expecting at the cocktail party.",
	  "Their concern is that they’re may not be enough appetizers for everyone there expecting at the cocktail party.",
	  "Their concern is that there may not be enough appetizers for everyone they’re expecting at the cocktail party.",
	  "There concern is that they’re may not be enough appetizers for everyone their expecting at the cocktail party."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-028 
	  q:"Which of the following sentences has correct subject-verb agreement?",
	  options:["The ambulance, which had flashing red lights on top, were letting other vehicles on the road know to pull over.",
	  "Either kale or spinach is a healthy vegetable to eat with dinner.",
	  "One of the soccer players kick the ball farther than his other teammates.",
	  "Several of the pieces of art was sold for above-average prices."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-029 
	  q:"Which of the following is an example of a correctly punctuated sentence?",
	  options:["“What would you prefer to do on vacation—visit a museum or go on a walking tour?” asked my father.",
	  "“What would you prefer to do on vacation—visit a museum or go on a walking tour,” asked my father.",
	  "“What would you prefer to do on vacation: visit a museum or go on a walking tour?,” asked my father.",	  
	  "“What would you prefer to do on vacation: visit a museum or go on a walking tour,” asked my father?"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-030 
	  q:"Which of the following book titles is correctly capitalized?",
	  options:["How To Lure A Fish",
	  "Insider’s Guide to The Best Fishing Spots",
	  "Fishing for Families",
	  "The west coast Fishing Guide"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.    
  }
]