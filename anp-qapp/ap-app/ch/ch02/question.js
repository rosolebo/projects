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
  {//question-021 
	  q:"Which paragraph explains how spacesuits prevent overheating during a spacewalk?",
	  options:["Paragraph 1",
	  "Paragraph 2",
	  "Paragraph 3",
	  "Paragraph 4"],
	  answer2,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata21-1.jpg"
  },
  {//question-022 
	  q:"Which part of an astronaut’s suit helps astronauts breathe properly?",
	  options:["Hard Upper Torso",
	  "Lower Torso Assembly",
	  "Liquid Cooling and Ventilation Garment",
	  "Primary Life Support Subsystem"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-023 
	  q:"Which of these sentences represents a summary sentence for the passage?",
	  options:["A spacesuit is much more than a set of clothes astronauts wear on spacewalks.",
	  "NASA's first spacewalks took place during the Gemini program.",
	  "The Advanced Crew Escape Suit is the orange suit that astronauts wear during launch and landing of the space shuttle.",
	  "NASA is also looking at what will be needed on spacesuits for trips to Mars."],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-024 
	  q:"Based on the information above, which of the following is a possible arrangement listed from oldest to youngest?",
	  options:["Erin, Rosanna, Eric, Ross",
	  "Eric, Rosanna, Erin, Ross",
	  "Ross, Erin, Eric, Rosanna",
	  "Eric, Ross, Erin, Rosanna"],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata24-1.jpg"
 
  },
  {//question-025 
	  q:"Which three income groups pay a combined payroll tax rate of more than 29%?",
	  options:["0–20, 40–60, and 60–80",
	  "20–40, 40–60, and 80–90",
	  "20–40, 80–90, and 95–99",
	  "40–60, 60–80, and Top 1%"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata25-1.jpg"   
  },
  {//question-026 
	  q:"Which of the following tells the number of cards now in the deck?",
	  options:["19",
	  "20",
	  "21",
	  "22"],
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata26-1.jpg"
  },
  {//question-027 
	  q:"Trevor has very fair skin and is planning to take a trip from his home in London to Miami. At minimum, how much should the SPF be increased in his sunscreen?",
	  options:["20",
	  "30",
	  "40",
	  "50"],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata27-1.jpg" 
  },
  {//question-028 
	  q:"Which of the following is true based on the table?",
	  options:["SPF 30 is not enough for a fair-skinned person to wear in Europe.",
	  "A dark-skinned person could wear less sunblock in the UK than in Africa.",
	  "An olive-skinned person should wear more sunblock in the Mediterranean than in the Caribbean",
	  "Children should wear less sunblock than fair skinned people while at home in the UK"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-029 
	  q:"In this context, reliable means",
	  options:["noteworthy",
	  "benign",
	  "considerable",
	  "accurate"],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata29-1.jpg"  
  },
  {//question-030 
	  q:"A fasting PG test is most likely used to",
	  options:["encourage the consumption of less sugar",
	  "identify blood disorders not detected by other tests",
	  "measure plasma glucose levels",
	  "save money on more costly medical procedures"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-031 
	  q:"Which of the following is a logical conclusion based on the first paragraph of the passage?",
	  options:["Paine was one of the Founding Fathers.",
	  "Paine was a talented writer who sparked the American Revolution.",
	  "The Declaration of Independence could not have been written without Paine’s contribution.",
	  "Paine’s wide range of job experiences likely helped him develop his political opinions."],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata31-1.jpg" 
  },
  {//question-032
	  q:"What inference can be drawn from the second paragraph of the passage regarding Thomas Paine’s Common Sense?",
	  options:["It was the only real contribution Thomas Paine made to the American Revolution.",
	  "It inspired King George to vow revenge on Thomas Paine.",
	  "It relied heavily upon his background as a minister for inspiration.",
	  "It acted as a catalyst for the American Revolution."],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-033 
	  q:"What is the author’s primary argument in the passage?",
	  options:["Without Thomas Paine, the American Revolution never would have happened.",
	  "Thomas Paine should be remembered for the contributions he made to the American Revolution.",
	  "Thomas Paine’s later work was even more influential than his early work.",
	  "Thomas Paine wrote anonymously, and therefore doesn’t deserve recognition for what he has accomplished."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-034 
	  q:"The reader can infer that this passage was taken from which of the following?",
	  options:["A political treatise",
	  "A history textbook",
	  "A tourist guidebook",
	  "A historical novel"],
	  answer:1	// answer: 0,1,2,3 etc.  
  },
  {//question-035 
	  q:"Which of the following is an inference that readers can make from the final sentences of the third paragraph?",
	  options:["Thomas Paine wrote Common Sense and inspired hundreds of thousands of people",
	  "Thomas Paine became a criminal late in life",
	  "Thomas Paine’s writing continues to have an influence on America.",
	  "Thomas Paine wrote his greatest works when he was imprisoned later in life."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-036 
	  q:"Which of the following best supports the argument in this paragraph?",
	  options:["According to Stanford researchers, following your passions will lead you to be less successful in life",
	  "Wolfgang Amadeus Mozart began going deaf when he was around 30, and was completely deaf by age 40.",
	  "Pablo Picasso’s first words were “piz, piz” a shortened form of the Spanish word for pencil, and by age seven he was receiving formal training in figure drawing and oil painting.",
	  "Children who show incredible talent early in life often end up not fulfilling theirpotential."], 	  
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata36-1.jpg"   
  },
  {//question-037 
	  q:"Which of the following additional sentences would work best at the end of this passage if it were an advertisement for a school or college?",
	  options:["The world needs more doctors, so you should start trying to be a doctor today.",
	  "No matter what you want in life, you need schooling.",
	  "Mozart didn’t wait; you shouldn’t either",
	  "Enroll in our school today and find out who you want to be."],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-038 
	  q:"What type of material has been the most recycled?",
	  options:["Paper",
	  "Metal",
	  "Glass",
	  "Cannot be determined from the chart"],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata38-1.jpg"  
  },
  {//question-039 
	  q:"In what year did the recycling of plastic get close to 10%?",
	  options:["1980",
	  "1990",
	  "2000",
	  "2010"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-040 
	  q:"Which of the following conclusions can be made with certainty about the chart?",
	  options:["Recycling of some products increased in 1960 from the previous years.",
	  "There is no data indicated on the chart to show if 1960 held an increase or decrease in recycling for any of the materials.",
	  "There was no recycling before 1960",
	  "The general population was not environmentally aware of recycling in the years prior to 1960."],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-041 
	  q:"Based on the blood pressure monitor above, what is this patient’s pulse rate?",
	  options:["73",
	  "82",
	  "130/82",
	  "130"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-042 
	  q:"A customer eating one of these prepared biscuits should probably limit which type of intake for the rest of the day?",
	  options:["Saturated fat",
	  "Cholesterol",
	  "Carbohydrate",
	  "Fiber"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-043 
	  q:"Which of the following would provide the best support for the claim made in the first line of the passage?",
	  options:["A young artist from a wealthy family receives the best education that money can buy, but still does not succeed as a painter.",
	  "A young writer comes from an impoverished, rural background, and receives a scholarship to university, but fails to make something of herself",
	  "A child prodigy becomes a world-famous violinist before reaching puberty, despite growing up in a working-class household.",
	  "A playwright is inspired to write beautiful plays about the destitution and difficulties of his childhood, and becomes widely acclaimed as the greatest writer of his generation."],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata43-1.jpg"  
  },
  {//question-044 
	  q:"What is the maximum weight this scale will measure?",
	  options:["115 lbs.",
	  "28 lbs.",
	  "280 lbs.",
	  "300 lbs."],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-045 
	  q:"Which of the following is not something with which the author of the above statements would likely agree?",
	  options:["It makes sense to educate women and girls",
	  "Women become empowered through education",
	  "Formal education is better than informal education",
	  "Women and girls should be educated"],
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata45-1.jpg"   
  },
  {//question-046 
	  q:"The author uses quotation marks around the word “civilization” in the first paragraph to convey",
	  options:["skepticism",
	  "wit",
	  "anger",
	  "studiousness"],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata46-1.jpg" 
  },
  {//question-047 
	  q:"The primary focus of the writer’s argument in the passage is",
	  options:["civilization’s weaknesses",
	  "Swift’s hatred for humanity",
	  "Swift’s depiction of human nature",
	  "the inspiration behind the character of Gulliver"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-048 
	  q:"The passage implies that the giant king’s opinion of England’s laws and society is",
	  options:["one of hidden jealously",
	  "close to Swift’s own opinion",
	  "similar to the citizens of England’s",
	  "in line with the author’s own opinion"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-049 
	  q:"Which of the following is an opinion expressed in the passage?",
	  options:["In Gulliver’s Travels, Gulliver discusses government and culture with the king of the land of giants.",
	  "Gulliver’s Travels presents a dark view of humanity.",
	  "Gulliver’s Travels is Swift’s most perfect satire.",
	  "In Gulliver’s Travels, Gulliver is unable to respond to the criticisms of the king in the land of giants."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-050 
	  q:"The author would most likely agree that Swift",
	  options:["was not involved with the English government",
	  "uses satire to poke fun at human folly",
	  "deliberately distorted historical facts for his own ends",
	  "believed that any attempt at human civilization should be abandoned"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata46-1.jpg"  	  
  }
]