"use strict";
//connect
console.log("Flashcard App Connected");
//chapter-49-KeyTerms

/* Change the questions to whatever you want!*/
var questions=[
    "Naturally occurring immune mechanisms",
    "Immune mechanisms that occur as the result of the antigen-antibody response",
    "The innate immune system's immune mechanisms",
    "The acquired immune system's immune mechanisms",
    "Microorganisms that cause infections",
    "Microorganisms that cause infections",
    "The manner with which infections are transmitted and carried",
    "The part of the chain of infection that is the environment or habitat, within which the pathogen lives, grows and reproduces. Reservoirs can include humans, animals, water, soil and insects.",
    "The part of the chain of infection that allows a pathogen, or disease causing germ, to move from its reservoir to its susceptible host.",
    "The mode of transmission that occurs with direct contact with the pathogen",
    "The mode of transmission that consists of direct contact with a spray of infectious material with can occur as the result of coughing and even speaking.",
    "The mode of transmission that involves the movement of an infectious agent from the reservoir to the host with inanimate, or nonliving, objects",
    "The mode of transmission that occurs when the. pathogen is carried in dust or droplets in the air that remain in place for a sufficiently enough time to infect a person exposed to this air",
    "The mode of transmission that occurs when a person comes into contact with an infectious agent that is in water, blood, and even inanimate objects like a toy or a door knob",
    "The mode of transmission that entails a mode of transportation with a vector which, unlike vehicles, are live beings like ticks and mosquitoes that spread infections with relatively direct mechanical means like an insect bite",
    "Diseases causing pathogens that are spread and transmitted to others via contact with blood and other bodily fluids",
    "Is a protein in the blood that is produced as the result of an exposure to an antigen or pathogen. They are protective proteins that bind to antigens and destroy them",
    "A foreign and unnatural substance that provokes the body to produce antibodies to fight if off.",
    "The process with which a person becomes immune with an injection",
    "Immunity that is acquired in a natural way",
    " immunity that is NOT acquired in a natural way",
    "Immunity that occurs as the result of getting a particular infection and also by being given an immunization against the particular infection, both of which will lead to the body's production of antibodies against the particular infection.",
    "Immunity that occurs without the antigen-antibody response, but instead, with the direct receiving of antibodies",
    "Singular cell beings that appear as spirals, rods, spheres and other shapes and can be pathogenic, leading to infection and also releasing tissue damaging toxins",
    "Pathogens are much smaller than bacteria; viruses have RNA, DNA and long molecules which comprise its genetic composition, a protein coat and an outer coating that contains lipids",
    "The first stage of viral growth",
    "The third stage of viral growth",
    "The fourth stage of viral growth Self-assembly",
    "The fifth stage of viral growth",
    "Plant source microorganisms that affect human beings and typically classified as superficial, cutaneous, subcutaneous and systemic.",
    "Fungal infections that affect and infect the skin's epidermis and the hair.",
    "Fungal infections that include invasive hair and nail infections that goes beyond the epidermis",
    "Fungal infections that infect all layers of the skin to the muscles and the fascia",
    "Fungal infections that can affect the entire body; these infections are typically highly virulent and they can spread to virtually all organs of the body",
    "A non living pathogen that consists of an abnormal folding of normal cellular, or prion, proteins",
    "A living organism that lives on or in a host and gets its food from or at the expense of its host",
    "Methods used to prevent the spread of infection. The two types of asepsis are medical asepsis, or clean procedure, and surgical, or sterile, asepsis.",
    "Having been in contact with a microorganism. Sterile items are contaminated when sterile technique is not scrupulously followed and clean or medically aseptic items are contaminated when they have not been managed and handled to a manner that preserves the state of medical asepsis",
    "Free from all living microorganisms",
    "The destruction of all microorganisms and large numbers of bacterial spores with the use of a chemical or physical sterilizer",
    "A germicidal solution that can be used on the skin to inhibit the growth of microorganisms, including pathogens",
    "The physical, manual removal of visible material from a device or surface using scrubbing, water and a detergent or surfactant",
    "The destruction of microorganisms including pathogens using a chemical or physical means of disinfection. Although disinfection destroys most pathogens, disinfection does not destroy spores.",
    "An infection caused by a microorganism that does not ordinarily cause disease but is capable of doing so under certain host conditions like a disease or disorder that adversely affects the person's immune system",
    "Specialized equipment and attire that is used by employees in healthcare to protect against infections. Examples of personal protective equipment include gowns, gloves, goggles and respirators.",
    "Any disorder or treatment, like chemotherapy for cancer, that causes the immune system to be dysfunctional and not functioning correctly to protect the body",
    "Human immunodeficiency virus and autoimmune deficiency syndrome are viral infections that lead the immune system to be dysfunctional and not functioning correctly to protect the body",
    "The autoimmune disorder that leads to thyroid gland damage and dysfunction",
    "A type of arthritis that is caused by an autoimmune disorder",
    "Also referred to as lupus, this is a chronic autoimmune disorder that causes one's own immune system to destroy its own organs",
    "The disorder that affects the thyroid gland and increases its activity",
    "An autoimmune disorder that leads to hypothyroidism, or low thyroid functioning",
    "An autoimmune disorder that leads to the lack of adrenal gland functioning",
    "A type of arthritis that is caused by a systemic autoimmune disorder",
    "A systemic autoimmune disorder that adversely affects the central nervous system",
    "Next!"
    ];

var answers=[
    "Innate immune system:",
    "Acquired immune system:",
    "Nonspecific immune responses:",
    "Specific immune responses:",
    "Germs:",
    "Pathogens:",
    "Chain of infection:",
    "The reservoir:",
    "Mode of transmission:",
    "Direct contact transmission:",
    "Droplet transmission:",
    "Indirect contact transmission:",
    "Airborne transmission:",
    "Vehicle transmission:",
    "Vector transmission:",
    "Bloodborne pathogens:",
    "Antibody ",
    "Antigen:",
    "Immunization:",
    "Natural immunity:",
    "Artificial immunity:",
    "Active immunity:",
    "Passive immunity:",
    "Bacteria:",
    "Viruses:",
    "Attachment:",
    "Uncoating:",
    "Replication:",
    "Release:",
    "Fungi:",
    "Superficial fungal infections:",
    "Cutaneous fungal infections:",
    "Subcutaneous fungal infections:",
    "Systemic fungi infections:",
    "A prion:",
    "A parasite:",
    "Asepsis:",
    "Contaminated:",
    "Sterile/sterility:",
    "Sterilization:",
    "Antiseptic:",
    "Cleaning:",
    "Disinfection:",
    "Opportunistic infection:",
    "Personal protective equipment (PPE):",
    "Immunosuppression: ",
    "HIV/AIDS:",
    "Hashimoto’s thyroiditis:",
    "Rheumatoid arthritis:",
    "Systemic lupus erythematosus:",
    "Grave's disease:",
    "Hashimoto’s thyroiditis:",
    "Addison’s disease: ",
    "Rheumatoid arthritis:",
    "Multiple sclerosis:",
    "What?"
];