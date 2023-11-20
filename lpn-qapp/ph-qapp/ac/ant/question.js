
"use strict";
//focus on Nursing pharmacology 
//chapter-00 Poison v Antedote - Questions
//Items - 10
//console.log("hello")
//Array of objects 
const quiz = [
  {//question-001
	  q:'A patient is experiencing Digoxin Toxicity. What is the antidote for this medication?',
	  options:['Naloxone',
	  'Digibind',
	  'Acetylcysteine',
	  'Protamine Sulfate'],
	  answer:1	
	  // answer- b
  },
  {//question-002
	  q:'Protamine Sulfate is an antidote for what medication below?',
	  options:['Tricyclic antidepressants',
	  'Warfarin',
	  'Beta Blockers',
	  'Heparin'],
	  answer:3	
	  // answer- d	  
  },
  {//question-003
	  q:'A patient is admitted to the hospital with Diazepam (Benzodiazepine) overdose. What is an antidote for this medication?',
	  options:['Flumazenil',
	  'Naloxone',
	  'Fomepizole',
	  'Deferoxamine'],
	  answer:0	
	  // answer- a	  
  },
  {//question-004
	  q:'Vitamin K can be used to treat toxicity of which medication below?',
	  options:['Anticholinergic medications',
	  'Magnesium Sulfate',
	  'Warfarin',
	  'Heparin'],
	  answer:2	
	  // answer- c  
  },
  {//question-005
	  q:'Your patient is post-op from surgery. The patient is receiving Morphine. The patient is experiencing severe respiratory depression. What medication below do you anticipate the physician to order for the patient?',
	  options:['Hydroxocobalamin',
	  'Succimer',
	  'Atropine',
	  'Naloxone'],
	  answer:3
	  // answer- d  
  },
  {//question-006
	  q:'What type of overdose does Acetylcysteine treat?',
	  options:['Opioid',
	  'Acetaminophen',
	  'Ethylene glycol',
	  'Benzodiazepines'],
	  answer:1
	  // answer- b	  
  },
  {//question-007
	  q:'A 76-year-old male is admitted to the ER. The patient accidentally overdosed on Atenolol. The patient heart rate is 38 bpm and blood pressure 70/52. The patient is lethargic, sweaty, and vomiting. What is the antidote for this medication?',
	  options:['Digibind',
	  'Calcium Gluconate',
	  'Glucagon',
	  'Calcium Disodium Edetate'],
	  answer:2	
	  // answer- c
  },
  {//question-008
	  q:'Physostigmine is an antidote that can be used to treat what condition below?',
	  options:['Cyanide Poisoning',
	  'Cholinergic Toxicity',
	  'Iron Toxicity',
	  'Anticholinergic Toxicity'],
	  answer:3
	  // answer- d		  
  },
  {//question-009
	  q:'A 53-year-old male is admitted to the ER. The patient is a farmer and was out in a field spraying insecticide that is an organophosphate agent. The patient is experiencing severe muscle tremors, drooling, and diaphoresis. The diagnosis is organophosphate poisoning. What medication below do you anticipate the physician to order for this patient ?',
	  options:['Atropine',
	  'Glucagon',
	  'Physostigmine',
	  'Succimer'],
	  answer:0
	  // answer- a	  
  },
  {//question-010
	  q:'The antidote for Magnesium Sulfate is?',
	  options:['Calcium Disodium',
	  'Calcium Gluconate',
	  'Protamine Sulfate',
	  'Acetylcysteine'],
	  answer:1
	  // answer- b
  },
  {//question-001
	  q:'Hydroxocobalamin is an antidote to treat what condition below?',
	  options:['Iron Toxicity',
	  'Lead Toxicity',
	  'Cyanide Poisoning',
	  'Ethylene Glycol Poisoning'],
	  answer:2	
	  // answer- c
  },
  {//question-002
	  q:'EMS calls in to report that they are transporting a 22-year-old patient who attempted suicide by ingesting Ethylene Glycol. Prior to the patient arrival, what medication will you have readily available?',
	  options:['Fomepizole',
	  'Naloxone',
	  'Deferoxamine',
	  'Acetylcysteine'],
	  answer:0	
	  // answer- a	  
  },
  {//question-003
	  q:'A 31-year-old man lab result demonstrates lead toxicity. What is an antidote for this condition?',
	  options:['Vitamin K',
	  'Calcium Disodium edetate(EDTA)',
	  'Flumazenil',
	  'Hydroxocobalamin'],
	  answer:1	
	  // answer- b	  
  },
  {//question-004
	  q:'Deferoxamine is an antidote used to treat what condition below?',
	  options:['Iron Toxicity',
	  'Lead Toxicity',
	  'Digoxin Toxicity',
	  'Cholinergic Toxicity'],
	  answer:0	
	  // answer- a	  
  },
  {//question-005
	  q:'A child lab result demonstrates lead toxicity. What is an antidote for this condition?',
	  options:['Vitamin K',
	  'Succimer',
	  'Flumazenil',
	  'Hydroxocobalamin'],
	  answer:1
	  // answer- b  
  },
  {//question-006
	  q:'Dimercaprol is an antidote for treating what condition below ?',
	  options:['Iron Toxicity',
	  'Lead Toxicity',
	  'Cyanide Poisoning',
	  'Mercury Poisoning'],
	  answer:3
	  // answer- d	  
  },
  {//question-007
	  q:'Penicillamine is an antidote for treating what condition below?',
	  options:['Iron Toxicity',
	  'Lead Toxicity',
	  'Cyanide Poisoning',
	  'Copper'],
	  answer:3	
	  // answer- d 
  },
  {//question-008
	  q:'Your cancer patient is post-chemotherapy and having severe reactions from the use of Methotrexate. What medication below do you anticipate the physician to order for this patient?',
	  options:['Hydroxocobalamin',
	  'Leucovorin',
	  'Atropine',
	  'Naloxone'],
	  answer:1
	  // answer- b		  
  },
  {//question-009
	  q:'EMS calls in to report that they are transporting a 44-year-old homeless male patient who ingested an excessive amount of Methanol. Prior to the patients arrival, what medication will you have readily available?',
	  options:['Fomepizole',
	  'Naloxone',
	  'Deferoxamine',
	  'Acetylcysteine'],
	  answer:0
	  // answer- a	  
  },
  {//question-010
	  q:'A child lab result demonstrates lead toxicity. What is an antidote for this condition?',
	  options:['Vitamin K',
	  'Succimer',
	  'Flumazenil',
	  'Hydroxocobalamin'],
	  answer:1
	  // answer- b
  }	  	  
]