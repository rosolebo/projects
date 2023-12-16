"use strict";
//Anatomy and Physiology 
//chapter- Toxic Effects of Drugs
//Items - 10
//console.log("hello")
//Array of objects 
const quiz = [
  {//question-001 
	   q:"Which of the following is a unique benefit of this group-funding program?",
	  options:["The donation is tax-deductible",
	  "Your donation helps others",
	  "You can know where your money goes",
	  "You can help train new teachers"],
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata1-1.jpg"
  },
  {//question-002 
	   q:"Based on the context, which of the following is the meaning of the word “beset” in the passage?",
	  options:["To be overwhelmed and stressed",
	  "To excel despite obstacles",
	  "To fight for what you need",
	  "To give up in the face of insurmountable odds"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-003 
	   q:"Based on the tone of the memo above, which of the following best describes Sonja and Gabriela’s relationship?",
	  options:["Gabriela is Sonja’s boss",
	  "Sonja is Gabriela’s boss",
	  "Sonja and Gabriela work in the Human Resources Department together.",
	  "Sonja and Gabriela run the business together"],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata3-1.jpg"
  },
  {//question-004 
	    q:"Which of the following best captures the author’s purpose?",
	  options:["Revitalize a struggling business by opening a second location.",
	  "Improve a successful business by opening a second location.",
	  "Position herself as a more powerful leader than Gabriela.",
	  "Convince a colleague that they should do more research on where to open a second location."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-005 
	  q:"Which of the following is the author’s overall conclusion concerning teachers using film in the classroom?",
	  options:["Young teachers who use film in the classroom are doing their students a disservice.",
	  "More teachers should show the opening scene of “Saving Private Ryan” in their classes.",
	  "Films can be great learning tools if they are used effectively in the classroom.",
	  "Films are a good tool for students who have reading difficulties."],
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata5-1.jpg" 
  },
  {//question-006 
	  q:"Which of the following sentences would be a supporting detail to explain how “Saving Private Ryan” could be used in the classroom?",
	  options:["Learning to analyze a film in this way can not only help students get more out of their viewing, but it can also help them work on their critical thinking skills.",
	  "Just putting “Saving Private Ryan” on the screen and then getting work done in the back of the room is not a helpful way to use a film in class.",
	  "Too many teachers are stuck in their ways, though, and unwilling to adapt.",
	  "“Jaws” would also be a good movie that a teacher could use in the classroom."],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-007 
	  q:"Based on the context, which of the following is the best meaning of the word versatile used in the passage?",
	  options:["Something that has a strong rhythm",
	  "Something that is grounded in reality",
	  "Something that is easy to be misinterpreted",
	  "Something that can be used in many different ways"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-008 
	  q:"Which department had the most students for their summer courses in 2017?",
	  options:["Business",
	  "History",
	  "Literature",
	  "Science"],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata8-1.jpg" 
  },
  {//question-009 
	  q:"Which of the following conclusions is supported by the data in the graph above?",
	  options:["American History is the most popular class this summer",
	  "Finance is the least popular class this summer",
	  "Biology is the most popular science class",
	  "Most students are only taking the classes that are important"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-010 
	  q:"Which of the following best describes the author’s portrayal of Gandhi?",
	  options:["positive and prejudiced",
	  "positive and objective",
	  "negative and prejudiced",
	  "negative and objective"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata10-1.jpg" 
  },
  {//question-011 
	  q:"Which of the following is a logical conclusion based on the passage?",
	  options:["Ghandi was brave, but ultimately unsuccessful in his pursuits.",
	  "The British changed their unjust policies.",
	  "In Ghandi’s mind, civil disobedience means only using violence as a last resort.",
	  "Ghandi’s followers were fiercely loyal and stood by their leader at all times."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-012 
	  q:"Which of the following words from the passage BEST displays the author’s opinion towards the British rulers that Ghandi was rebelling against?",
	  options:["“bravely”",
	  "“refusing”",
	  "“taxation”",
	  "“unfair”"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-013 
	  q:"What is the author’s primary argument in the passage?",
	  options:["Gandhi used non-violent protests to successfully alert the world to unfair practices of the British against his country of India.",
	  "Gandhi went too far in his protests and was subsequently imprisoned by the British authorities in India.",
	  "Gandhi started a congress in India to pass legislation to fix unfair labor policies in the country.",
	  "Gandhi was probably the most effective historical figure to use the tactic of a hunger strike."],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-014 
	  q:"Which of the following is an opinion stated in the passage?",
	  options:["The British government’s increased military presence in India led to the loss of life.",
	  "Ghandi bravely employed nonviolent civil disobedience to rebel against Britain’s unfair discrimination against the Indian people.",
	  "Ghandi was well-known internationally for his hunger strikes.",
	  "Ghandi took charge of the Indian National Congress in 1921."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-015 
	  q:"Which of the following best describes the structure of this text?",
	  options:["Cause/effect",
	  "Sequence",
	  "Compare/contrast",
	  "Problem/solution"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata15-1.jpg"    
  },
  {//question-016 
	  q:"Which of the following statements best describes the author’s point of view?",
	  options:["Even if we don’t know it, we all use the scientific method in our everyday lives.",
	  "Too many experimenters blindly use the scientific method without exploring other options.",
	  "If an experiment doesn’t verify the hypothesis of the experimenter, it is a failure.",
	  "Using the scientific method is the best way to make sure your experimental data is accurate and valid."],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-017 
	  q:"Where is your destination compared to your original location?",
	  options:["Two blocks north, two blocks west",
	  "Two blocks south, two blocks east",
	  "One block west, two blocks south",
	  "One block east, three blocks north"],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata17-1.jpg"  
  },
  {//question-018 
	  q:"An individual reading a book about the first emperor of China wants to find the first reference in the book to the Terracotta Army. Where should he or she look?",
	  options:["The glossary",
	  "The table of contents",
	  "The afterword",
	  "The index"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-019 
	  q:"Which of the following statements from the passage is a fact?",
	  options:["Karla’s team achieved 11% growth in global sales",
	  "Mrs. Bukhari appreciates all of Karla’s hard work",
	  "Karla is dedicated to her employer, Systematic Alliance Reserve, Inc.",
	  "Karla’s new parking spot will be better than her old one."],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata19-1.jpg" 
  },
  {//question-020 
	  q:"Which of the following statements best describes the author’s point of view?",
	  options:["Business is a team sport, and it’s important to recognize the efforts of everyone involved in a project.",
	  "The best way to keep people from leaving a company is to give them big cash bonuses.",
	  "People who work hard and succeed despite the obstacles in front of them deserve to be rewarded.",
	  "In a tough economic climate, businesses can only survive if they lay people off."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc..  
  },
]