
"use strict";
//Anatomy and Physiology 
//chapter- Toxic Effects of Drugs
//Items - 10
//console.log("hello")
//Array of objects 
const quiz = [
  {//question-001 
	  q:"An unknown element is found to contain 45 protons and an atomic mass of 64, what is its atomic number?",
	  options:["It cannot be determined",
	  "19",
	  "45",
	  "64"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-002 
	  q:"What is the probability that a biological child of these parents will have brown eyes?",
	  options:["0%",
	  "25%",
	  "50%",
	  "100%"],
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata2-1.jpg"  
  },
  {//question-003 
	  q:"The spleen functions are part of the _____ system. Which of the following completes the sentence above?",
	  options:["digestive",
	  "lymphatic",
	  "endocrine",
	  "circulatory"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-004 
	  q:"Which of the following is an example of deductive reasoning?",
	  options:["Only 21% of a town’s population have expressed a desire to ban all cars. Therefore, the new proposition banning cars in the state is not likely to pass.",
	  "People who brush their teeth regularly have fewer instances of heart disease. Therefore, good dentistry can prevent heart attacks.",
	  "All soccer players who play professionally can kick well. Therefore, any future soccer player who is recruited to play professionally will be able to kick well.",
	  "All secretaries are good typists. Cynthia is a secretary. Therefore, Cynthia is a good typist."],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-005 
	  q:"Which of the following is a possible cause of herniation of discs?",
	  options:["Hepatitis",
	  "Whiplash",
	  "plantar fasciitis",
	  "ulcer"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-006 
	  q:"Which of the following is a characteristic of the autonomic nervous system?",
	  options:["It regulates the voluntary control of body movements through the skeletal muscles.",
	  "It is the part of the nervous system consisting of the brain and spinal cord.",
	  "It regulates involuntary activity in the heart, stomach, lungs, and intestines.",
	  "It is thought to be the center of intelligence."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-007 
	  q:"During photosynthesis, which two compounds are combined to create the output of glucose and oxygen?",
	  options:["dioxide and water.",
	  "Carbon dioxide and bicarbonate.",
	  "Bicarbonate and water.",
	  "Carbon dioxide and multiple alkaline substances"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-008 
	  q:"Which of the following is true about the frog?",
	  options:["It is a member of the salamandridae family",
	  "It is a type of amphibian",
	  "It is a non-vertebrate",
	  "It is closer to most tetrapods than to most newts"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata8-1.jpg" 
  },
  {//question-009 
	  q:"Which statement can be inferred about amphibians?",
	  options:["All amphibians are salamandridae, but not all salamandridae are amphibians.",
	  "Some amphibians are vertebrates, but not all amphibians are vertebrates.",
	  "Some salamandridae are amphibians, but not all amphibians are tetrapods.",
	  "All amphibians are vertebrates, but not all vertebrates are amphibians."],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata8-1.jpg"
  },
  {//question-010 
	  q:"What would this diagram be useful for?",
	  options:["determining outcomes for potential infection",
	  "diagnosing an infectious disease",
	  "controlling the spread of disease in undeveloped countries",
	  "training nurses to detect early onset symptoms of disease"],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata10-1.jpg"
  },
  {//question-011 
	  q:"What type of bond between the complementary bases of DNA stabilizes the double helix structure?",
	  options:["Covalent",
	  "Ionic",
	  "Hydrogen",
	  "nuclear"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-012 
	  q:"Which of the following subatomic particles are found inside of an atom’s nucleus?",
	  options:["electrons, neutrons, protons",
	  "neutrons, protons",
	  "electrons, protons",
	  "electrons"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-013 
	  q:"Which of the following statements is true regarding trophic levels?",
	  options:["Tertiary consumers acquire more energy content than secondary consumers.",
	  "Producers acquire less energy than primary consumers.",
	  "Secondary consumers acquire more energy than primary consumers.",
	  "Tertiary consumers acquire less energy than primary consumers."],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-014 
	  q:"Why does the human eye perceive a red colored dress as the color red?",
	  options:["The molecules of the dress do not absorb red light wavelengths.",
	  "The molecules of the dress absorb green and blue light wavelengths.",
	  "A red dress will primarily absorb red light wavelengths.",
	  "A red dress will not absorb light wavelengths from non-red colors."],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-015 
	  q:"In a lab experiment designed to test the rate at which plants grow under artificial light, the kind of light used is which type of variable?",
	  options:["Dependent",
	  "Independent",
	  "Random",
	  "responding"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-016 
	  q:"Which organ system is primarily responsible for regulating metabolism, mood, and growth?",
	  options:["respiratory system",
	  "digestive system",
	  "endocrine system",
	  "lymphatic system"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-017 
	  q:"In a vacuum, why doesn’t an elephant accelerate faster than a penny as it falls to the ground?",
	  options:["Vector components of an elephant are more complex than those of a penny.",
	  "An elephant is not a projectile, while a penny is.",
	  "They both have an acceleration of 9.8 m/s2",
	  "The elephant is greater in mass but is slowed less by the effects of air resistance."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-018 
	  q:"Which train described below would have the greatest momentum?",
	  options:["A 9500 kg train car moving at 200 mph",
	  "An 8000 kg train car moving at 215 mph",
	  "A 9300 kg train car moving at 190 mph",
	  "A 8600 kg train car mobbing at 195 mph"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-019 
	  q:"A scientist found that when an invasive species was introduced into a river, the population of salmon native to the region decreased. The type of correlation between these two populations could best be described as",
	  options:["a direct relationship",
	  "an inverse relationship",
	  "a direct and indirect relationship",
	  "no decisive relationship"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-020 
	  q:"The addition of a catalyst to a chemical reaction will have what effect?",
	  options:["Increase the energy required for the reaction to take place.",
	  "Increase the time required for the reaction to take place.",
	  "Increase the rate at which the reaction takes place.",
	  "Reduce the amount of products in the reaction."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc..  
  },
  {//question-021 
	  q:"The pharynx is part of what body system?",
	  options:["Respiratory",
	  "Muscular",
	  "Lymphatic",
	  "Circulatory"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-022 
	  q:" Which of the following is true about eukaryotic cells?",
	  options:["They do not contain lysosomes.",
	  "They contain one chromosome.",
	  "They do not contain a nucleus",
	  "They contain mitochondria"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-023 
	  q:"What characteristic of an element determines its specific isotope?",
	  options:["Number of protons",
	  "Number of neutrons",
	  "Number of electrons",
	  "Number of quarks"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-024 
	  q:"What is NOT true about (Ribonucleic Acid) RNA?",
	  options:["It contains a sugar called ribose",
	  "Thymine is not one of its base pairings",
	  "It is unstable in alkaline conditions",
	  "Its sugar is more reduced than DNA’s sugar"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-025 
	  q:"Which of the following scenarios would NOT give a normal distribution?",
	  options:["A distribution of the yearly income of families in the U.S.",
	  "The distribution of heights in a large sample of people",
	  "The percentage of toxic wastes and pollution in the atmosphere vs. the lifespan of organisms in the location.",
	  "A curve with 97% of the population within the first two standard deviations."],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-026 
	  q:"In a cell, the Golgi apparatus is found in what location?",
	  options:["Inside the nucleus",
	  "Inside the mitochondria",
	  "In the cell wall",
	  "In the cytoplasm"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-027 
	  q:"Which taxonomic rank is the next-smallest after Order?",
	  options:["Phylum",
	  "Family",
	  "Species",
	  "Genus"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-028 
	  q:"In plants, ________ involves the formation of a _____?",
	  options:["cytokinesis, cleavage furrow",
	  "telophase, cell plate",
	  "cytokinesis, cell plate",
	  "prophase, DNA"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-029 
	  q:"Which base is NOT found in DNA?",
	  options:["Guanine",
	  "Cytosine",
	  "Uracil",
	  "Adenine"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-030 
	  q:"Which of the following layers of the atmosphere is the closest to space?",
	  options:["Troposphere",
	  "Stratosphere",
	  "Mesosphere",
	  "Thermosphere"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-031 
	  q:"Which is NOT one of the four basic types of tissue?",
	  options:["Parenchyma",
	  "Epithelial",
	  "Nervous",
	  "Connective"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-032
	  q:"The stomach is _____ to the small intestine. Which of the following correctly completes the sentence above?",
	  options:["lateral",
	  "superior",
	  "posterior",
	  "proximal"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-033 
	  q:"Which of the following is the atomic mass of an atom containing 42 protons, 42 electrons, and 37 neutrons?",
	  options:["42",
	  "79",
	  "84",
	  "121"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-034 
	  q:"A patient who has suffered head trauma is not able to recognize people he has met around an hour earlier but is still able to recognize people he met before the injury. He most likely has damage to the:",
	  options:["Medulla Oblongata",
	  "Corpus Callosum",
	  "Hippocampus",
	  "Pituitary Gland"],
	  answer:2	// answer: 0,1,2,3 etc.  
  },
  {//question-035 
	  q:"What process is illustrated in the diagram above?",
	  options:["Meiosis",
	  "Mitosis",
	  "Replication",
	  "Codification"],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata35-1.jpg"
  },
  {//question-036 
	  q:"Of the following, which is not a type of chemical bond?",
	  options:["Ionic",
	  "Covalent",
	  "Polar",
	  "Magnetic"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-037 
	  q:"If the amount of hydrogen in a balloon of fixed size is doubled, what happens to the mass and density of the balloon?",
	  options:["The mass and density both decrease",
	  "The mass increases, but the density decreases",
	  "The mass decreases, but the density increases",
	  "The mass and density both increase"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-038 
	  q:"If you have 200 mL of a 60% sodium chloride solution, how much NaCl is dissolved in the solution?",
	  options:["20g",
	  "50g",
	  "80g",
	  "120g"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-039 
	  q:"How many carbon dioxide molecules are required to balance the following reaction: 4C6H12O6 + 24O2 → _ _CO2 + 24H2O + Energy",
	  options:["4",
	  "8",
	  "16",
	  "24"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-040 
	  q:"The graph above records the death rate of two types of male flies a certain number of days after a chemical pesticide is sprayed. What is the probability a male methuselah fly will be alive 75 days after exposure to the pesticide?",
	  options:["1/2",
	  "1/3",
	  "1/4",
	  "1/5"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-041 
	  q:"A scientist wants to write an equation using the variables X, Y, and Z. What is the proper relationship between the variables if X represents time, Y represents energy, and Z represents power?",
	  options:["2XY=Z",
	  "XZ=2Y",
	  "Z=X/Y",
	  "Z=Y/X"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-042 
	  q:"What type of correlation is presented between price and quality?",
	  options:["Strong direct correlation",
	  "Weak direct correlation",
	  "Strong indirect correlation",
	  "No correlation"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-043 
	  q:"What type of cells result from mitosis?",
	  options:["one diploid cell",
	  "two haploid cells",
	  "two diploid cells",
	  "four haploid cells"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-044 
	  q:"Cheetahs, rainbow trout, and inchworms belong to the same",
	  options:["Kingdom",
	  "Phylum",
	  "Class",
	  "Order"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-045 
	  q:"The presence of which hormone would NOT cause an increase in water retention?",
	  options:["Renin",
	  "ANP",
	  "ADH",
	  "Aldosterone"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-046 
	  q:"In which part of the heart does oxygenated blood flow out of?",
	  options:["Right ventricle",
	  "Left ventricle",
	  "Right atrium",
	  "Left atrium"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-047 
	  q:"Which of the following hormones are secreted directly by the hypothalamus?",
	  options:["Melatonin",
	  "Oxytocin",
	  "Dopamine",
	  "Calcitonin"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-048 
	  q:"Which of the following terms do these diagrams NOT portray?",
	  options:["Active transport",
	  "Facilitated Transport",
	  "Antiporter",
	  "Ion Channel"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
   
  }
]