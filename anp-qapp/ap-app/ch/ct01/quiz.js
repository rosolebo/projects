let quiz_rules = [
    "You Have Only 55 Seconds For Each Question.",
    "Once You Select Any Answer.It Can't Be Undone",
    "You'll Get Points On The Basic Of Your Correct Answers."
];


let quiz_questions = [  
    {// question 1
        // question
        question: "Which of the following is located in the nucleus of an atom?",

        // options
        options : [
            "Protons & Electrons",
            "Protons & Neutrons",
            "Electrons & Neutrons",
            "Only Electrons",
        ],

        // correct answer
        answer: 2,
    }, 
    {// question 2
        // question
        question: "Which of the following is a physical change?",

        // options
        options : [
            "Rusting of iron",
            "Burning of wood",
            "Melting of ice",
            "Cooking of egg",
        ],

        // correct answer
        answer: 3,
    },
    {// question 3
        // question
        question: "In a balanced chemical equation, the number of atoms of each element on the reactant side equals the product side. This statement illustrates…",

        // options
        options : [
            "Law of conservation of mass",
            "Law of definite proportions",
            "Law of multiple proportions",
            "Gay Issac’s law",
        ],

        // correct answer
        answer: 1,
    },
    {// question 4
        // question
        question: "Increasing the temperature usually has what effect on chemical reaction?",

        // options
        options : [
            "Slow it down",
            "Stop it",
            "Speeds it up",
            "No effect",
        ],

        // correct answer
        answer: 3,
    },
    {// question 5
        // question
        question: "What happens to the solubility of most solid solutes in liquid solvents as the temperature increases?",

        // options
        options : [
            "It decreases",
            "It increases",
            "It remains the same",
            "It first increases and then decreases",
        ],

        // correct answer
        answer: 2,
    }, 
    {// question 6
        // question
        question: "What is the pH of a neutral solution such as pure water?",

        // options
        options : [
            "0",
            "7",
            "14",
            "1",
        ],

        // correct answer
        answer: 2,
    }, 
    {// question 7
        // question
        question: "Which part of an atom carries a negative charge?",

        // options
        options : [
            "Proton",
            "Neutron",
            "Electron",
            "Nucleus",
        ],

        // correct answer
        answer: 3,
    }, 
    {// question 8
        // question
        question: "Density is an example of which type of property?",

        // options
        options : [
            "Physical property",
            "Chemical property",
            "Both",
            "Neither",
        ],

        // correct answer
        answer: 1,
    }, 
	{// question 9
        // question
        question: "What is a substance called that speeds up a chemical reaction without being consumed by the reaction?",

        // options
        options : [
            "Reactant",
            "Product",
            "Catalyst",
            "Solvent",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 10
        // question
        question: "How does an increase in the concentration of reactants affect the rate of a chemical reaction?",

        // options
        options : [
            "Decrease the rate reaction",
            "Increase the rate of reaction",
            "No effect on the rate of reaction",
            "First increase, then decrease the rate of reaction",
        ],

        // correct answer
        answer: 2,
    }, 
	{// question 11
        // question
        question: "What does it mean when a solution is saturated?",

        // options
        options : [
            "It has no solute in it",
            "It can dissolve more solute",
            "It cannot dissolve anymore solute",
            "It contains an excess of undissolved solute",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 12
        // question
        question: "What ion is common to all acids?",

        // options
        options : [
            "Hydroxide (OH+)",
            "Hydrogen (H+)",
            "Sodium (Na+)",
            "Chloride (Cl-)",
        ],

        // correct answer
        answer: 2,
    }, 
	{// question 13
        // question
        question: "What is the atomic number of a atom?",

        // options
        options : [
            "Number of protons & neutrons in an atom",
            "Number of neutrons in an atom",
            "Number of protons in an atom",
            "Number of electrons in an atom",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 14
        // question
        question: "What is the term for a change in which a new substance if formed?",

        // options
        options : [
            "Physical change",
            "Chemical change",
            "Elemental change",
            "Molecular change",
        ],

        // correct answer
        answer: 2,
    }, 
	{// question 15
        // question
        question: "What is the term for the substances that are formed in a chemical reaction?",

        // options
        options : [
            "Reactants",
            "Products",
            "Catalysts",
            "Enzymes",
        ],

        // correct answer
        answer: 2,
    }, 
	{// question 16
        // question
        question: "A student is recording the temperature of a solid substance as he heats it over a Bunsen burner and notices that the temperature stays constant at 62 degrees centigrade for four minutes. How can the substance be described during these four minutes?",

        // options
        options : [
            "It is boiling",
            "It is melting",
            "It is entirely in the solid state",
            "It is entirely in the liquid state",
        ],

        // correct answer
        answer: 2,
    }, 
	{// question 17
        // question
        question: "A substance will __________ at the same temperature.",

        // options
        options : [
            "Melt & boil",
            "Condense & boil",
            "Freeze & sublime",
            "Freeze & condense",
        ],

        // correct answer
        answer: 2,
    }, 
	{// question 18
        // question
        question: "In which state of matter are the intermolecular forces between particles in a substance the strongest?",

        // options
        options : [
            "Gas",
            "Liquid",
            "Plasma",
            "Solid",
        ],

        // correct answer
        answer: 4,
    }, 
	{// question 19
        // question
        question: "At the end of which phase change will a substance have less energy than it did at the beginning?",

        // options
        options : [
            "Deposition",
            "Melting",
            "Sublimation",
            "Vaporization",
        ],

        // correct answer
        answer: 1,
    }, 
	{// question 20
        // question
        question: "When a sample of dry ice (solid carbon dioxide) undergo sublimation in a sealed bucket, what happens to its shape and volume?",

        // options
        options : [
            "It retains its original shape and its original volume",
            "It changes both its shape and its original volume to fit those of the bucket",
            "It retains its original shape, but its volume expands to fit that of the bucket",
            "It changes its original shape to fit that of the bucket, but its volume does not change.",
        ],

        // correct answer
        answer: 2,
    }, 
	{// question 21
        // question
        question: "Which element in a period 4 of the periodic table will not react to form a compound?",

        // options
        options : [
            "Arsenic",
            "Germanium",
            "Krypton",
            "Scandium",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 22
        // question
        question: "Which of the compounds below contains the strongest carbon – carbon bonds?",

        // options
        options : [
            "Acetylene (C2 H2)",
            "Ethane (C2 H6)",
            "Ethylene (C2 H4)",
            "Methanol (CH2 OH)",
        ],

        // correct answer
        answer: 1,
    }, 
	{// question 23
        // question
        question: "Which of the following statements is true regarding bond that forms between two oxygen atoms in a molecule of O2?",

        // options
        options : [
            "The oxygen atoms share electrons equally",
            "One oxygen atom pulls harder on shared electrons than the other",
            "One atom of oxygen loses two electrons, while the other gain two electrons",
            "There is not enough information to describe the bond in a molecule of oxygen",
        ],

        // correct answer
        answer: 1,
    }, 
	{// question 24
        // question
        question: "What type of rection is described by the following equation? 2Na(s) + ZnCl2(aq) -> Zn(s) + 2NaCl(ag",

        // options
        options : [
            "Synthesis",
            "Combustion",
            "Single-replacement",
            "Double-replacement",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 25
        // question
        question: "A teaspoon of sugar is added to a hot cup of tea. All the sugar dissolves. How can the resulting solution be described?",

        // options
        options : [
            "Saturated and homogeneous",
            "Saturated and heterogeneous",
            "Unsaturated and homogeneous",
            "Unsaturated and heterogeneous",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 26
        // question
        question: "A beaker contains 50mL of oil and 50mL of water. No matter how much the mixture is stirred, the oil and water still separate into two layers. Which statement accurately describe the mixture?",

        // options
        options : [
            "Oil is soluble in water",
            "It is an unsaturated solution",
            "It is a homogeneous mixture",
            "Water is good solvent for oil",
        ],

        // correct answer
        answer: 1,
    }, 
	{// question 27
        // question
        question: "If Sulfur sulfide (Na2S) and hydrochloric acid (HCI) react in a double-replacement reaction, what product(s) are form?",

        // options
        options : [
            "Na2 SHCl",
            "NaHCl + S",
            "NaCl + H2S",
            "NCl + Na2S",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 28
        // question
        question: "If Sulfur trioxide [SO3] reacts with water [H2O] in a synthesis reaction, what product(s) is form?",

        // options
        options : [
            "H2 SO4",
            "H2S + O2",
            "H2O + SO3",
            "H2O3 + S2O",
        ],

        // correct answer
        answer: 1,
    }, 
    {// question 29
        // question
        question: "Which is the product of neutralization reaction?",

        // options
        options : [
            "Acid",
            "Base",
            "Proton",
            "Salt",
        ],

        // correct answer
        answer: 4,
    }, 
	{// question 30
        // question
        question: "Which of the following partially dissolves into hydroxide ions in an aqueous solution?",

        // options
        options : [
            "KOH",
            "HCLO4",
            "C5H5N",
            "H2CO3",
        ],

        // correct answer
        answer: 3,
    }, 
	{// question 31
        // question
        question: "Water can act as an acid or a base. Because of this behavior, it is known to be?",

        // options
        options : [
            "amphoteric",
            "aqueous",
            "ionic",
            "pure",
        ],

        // correct answer
        answer: 1,
    }, 
	{// question 32
        // question
        question: "Which of the following is an acid?",

        // options
        options : [
            "KNO3",
            "BaCl2",
            "NaOH",
            "H3PO4",
        ],

        // correct answer
        answer: 4,
    }, 
	{// question 33
        // question
        question: "Which of the following determines the strength of a acidic solution?",

        // options
        options : [
            "Litmus paper that turns red",
            "Litmus paper that turns blue",
            "Measured pH value equal to 7",
            "Measured pH value less than 7",
        ],

        // correct answer
        answer: 4,
    }, 
    
];