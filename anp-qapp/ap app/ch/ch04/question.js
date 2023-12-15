
"use strict";
//Anatomy and Physiology 
//chapter- Toxic Effects of Drugs
//Items - 10
//console.log("hello")
//Array of objects 
const quiz = [
  {//question-001 
	   q:"Simplify the expression below. Which of the following is correct? 5,344−57",
	  options:["5277",
	  "5283",
	  "5287",
	  "5288"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-002 
	   q:"Solve the equation below. 3(x−4)=18. Which of the following is correct?  ",
	  options:["x = 2/3",
	  "x = 22/3",
	  "x = 6",
	  "x = 10"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-003 
	   q:"The above is known as what type of graph?",
	  options:["Line Graph",
	  "Scatterplot",
	  "Bar Graph",
	  "Histogram"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata3-1.jpg"
  },
  {//question-004 
	    q:"Simplify the expression. (5x−1)(3x+2) Which of the following is correct?",
	  options:["a",
	  "b",
	  "c",
	  "d"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata4-1.jpg"  
  },
  {//question-005 
	  q:"Timmy can usually make six paper airplanes in an hour. However, if he gets interrupted by his parents, he can only make four per hour. His friend John can make seven paper airplanes per hour. One day, Timmy and John decide to have a three-hour long contest to see who can make the most paper airplanes. During the contest, Timmy is interrupted once every hour. John also had to take a break and do chores for an hour. How many more paper airplanes does the winner make?",
	  options:["1",
	  "2",
	  "3",
	  "4"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-006 
	  q:"If a car travels 360 kilometers in 5 hours, how far will it travel in 9 hours?",
	  options:["72",
	  "268",
	  "426",
	  "648"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-007 
	  q:"What degrees Fahrenheit is it at 30 degrees Celsius?",
	  options:["86",
	  "89",
	  "92",
	  "95"],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata7-1.jpg" 
  },
  {//question-008 
	  q:"A toy manufacturer makes 15,000 toys a year. The company randomly selects 300 of the toys to sample for inspection. The company discovers that there are 5 faulty toys in the sample. Based on the sample, how many of the 15,000 total toys are likely to be faulty?",
	  options:["25",
	  "250",
	  "300",
	  "600"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-009 
	  q:"At a comic book store, Robert purchased three comics for $2.65 each. If he paid with a $20 bill, how much change did he receive?",
	  options:["$10.95",
	  "$12.05",
	  "$13.15",
	  "$13.85"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-010 
	  q:"Simplify the expression below. 7 1/4 x 1/18",
	  options:["14/54",
	  "22/67",
	  "29/72",
	  "18/126"],
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata10-1.jpg" 
  },
  {//question-011 
	  q:"Express 5⁄8 as its closest rounded percentage.",
	  options:["56%",
	  "60%",
	  "63%",
	  "66%"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-012 
	  q:"Amanda wants to paint the walls of a room. She knows that each can of paint contains one gallon. A half gallon will cover a 55 square feet of wall. Each of the four walls is 10 feet high. Two of the walls are 10 feet wide and two of the walls are 15 feet wide. How many 1-gallon buckets of paint does Amanda need to buy in order to fully paint the room?",
	  options:["4",
	  "5",
	  "9",
	  "10"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-013 
	  q:"How many millimeters are there in 5 meters?",
	  options:["500",
	  "5,000",
	  "50,000",
	  "500,00"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-014 
	  q:"Kyra has a budget of $300 for her holiday spending. Kyra decides to buy shoes for her grandchildren. If each pair of shoes costs $40, and Kyra has n grandchildren, which of the following inequalities represents Kyra’s budget constraint?",
	  options:["a",
	  "b",
	  "c",
	  "d"],
	  answer:3,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata14-1.jpg" 
  },
  {//question-015 
	  q:"Which of the following is correct?",
	  options:["-6",
	  "-3/4",
	  "1",
	  "|2"],
	  answer:2,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata15-1.jpg"  
  },
  {//question-016 
	  q:"Which type of graph would best indicate the percentage of a school’s annual scholarship fund spent on freshman students?",
	  options:["pie chart",
	  "line graph",
	  "Scatterplot",
	  "Histogram"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-017 
	  q:"Which of the following is correct?",
	  options:["a",
	  "b",
	  "c",
	  "d"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc.
      img:"img/sata17-1.jpg"
  },
  {//question-018 
	  q:"Which of the following is correct?",
	  options:["a",
	  "b",
	  "c",
	  "d"],
	  answer:0,	// answer: A-0,B-1,C-2,D-3 etc.
	  img:"img/sata18-1.jpg"  
  },
  {//question-019 
	  q:"Which of the following is the solution set for the equation below? |2x-5|=19",
	  options:["{-7,-12}",
	  "{7,12}",
	  "{-7,12}",
	  "{7,-12}"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-020 
	  q:"If Maria left a $10.16 tip on a breakfast that cost $86.89, approximately what percentage was the tip?",
	  options:["12%",
	  "17%",
	  "25%",
	  "31%"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc..  
  },
  {//question-021 
	  q:"A nurse working at a medical clinic earns $17.81 per hour. The nurse works three 8-hour shifts and one 12-hour shift every week, and is paid weekly. Weekly deductions are: federal tax $102.80, state tax $24.58, federal insurance $18.13, and family health insurance $52.15. What is the nurse's take-home pay each week?",
	  options:["$158.54",
	  "$443.50",
	  "$514.74",
	  "$641.16"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-022 
	  q:"How many imperial gallons are there in 1,400 liters? Note: 1 kiloliter = 220 imperial gallons",
	  options:["308",
	  "3,080",
	  "30,800",
	  "308,000"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-023 
	  q:"Derek purchased concert tickets in the month of June for $73, $66, $96, $17, and $66 dollars. Which of the following is an accurate estimate of the total amount he spent on concert tickets in June?",
	  options:["$300",
	  "$330",
	  "$360",
	  "$400"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.
  },
  {//question-024 
	  q:"Solve the inequality below. 5y−8>32. Which of the following is correct?",
	  options:["y>8",
	  "y<8",
	  "y>6",
	  "y<6"],
	  answer:0	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-025 
	  q:"There are 48 students studying a foreign language at the community college. If the only two foreign languages offered are French and Spanish, and 28 students are studying French, which of the following represents the ratio of students studying Spanish to the total number of foreign language students?",
	  options:["2/7",
	  "1/2",
	  "1/3",
	  "5/12"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-026 
	  q:"What is 181.5% of 18?",
	  options:["3.267",
	  "14.67",
	  "32.67",
	  "3267"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-027 
	  q:"Which of the following is equivalent to 0.0009?",
	  options:["0.0009%",
	  "0.009%",
	  "0.09%",
	  "0.9%"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-028 
	  q:"A father is planning a birthday party for his son. He is expecting a total attendance of 7 adults and 13 children. Food costs will be $11.00 for each adult and $5.00 for each child. He will also need to spend $2.00 per child for party favors. Which of the following is the total cost of the birthday party?",
	  options:["$142.00",
	  "$168.00",
	  "$182.00",
	  "$192.00"],
	  answer:1	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-029 
	  q:"Simplify the expression below. 7×4+(9−6)+13. Which of the following is correct?",
	  options:["34",
	  "37",
	  "41",
	  "44"],
	  answer:3	// answer: A-0,B-1,C-2,D-3 etc. 
  },
  {//question-030 
	  q:"Write the number 1906 in Roman numerals.",
	  options:["MCMLXVIII",
	  "MCMXVI",
	  "MCMVI",
	  "XIXVI"],
	  answer:2	// answer: A-0,B-1,C-2,D-3 etc.  
  },
  {//question-031 
	  q:"Which of the following is correct?",
	  options:["145/34",
	  "174/35",
	  "168/35",
	  "159/34"],
	  answer:1,	// answer: A-0,B-1,C-2,D-3 etc. 
	  img:"img/sata31-1.jpg"  
  }
]