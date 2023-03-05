"use strict";

//Name: Rasaki Solebo
//Date: 03/01/2023
//Purpose: In this assignment, you’ll develop an application 
//that tells how many quarters, dimes, nickels, and pennies 
//are needed to make change for any amount of change from 0 
//through 99 cents. One way to get the results is to use the 
//divide and modulus operators along with the parseInt() 
//method for truncating the results so they are whole numbers.
//xxxxxxxxxxxxx
//Algorithm
//1. The application provide input text field
//2. The user enter input (integer) number 
//3. The user clicks the calculate button
//4. The application takes the input and validates
//5. if the entry is invalid, application display 
//relevant error message
//6. If the input is validated without error
//7. The application process the entry
//8. The application outputs change information

const $ = selector => document.querySelector(selector);

const makeChange = (cents) => {
        const quarters = parseInt(cents / 25);
        cents = cents % 25;
        const dimes = parseInt(cents / 10);
            cents = cents % 10;
        const nickels = parseInt(cents / 5);
            cents = cents % 5;
        const pennies = parseInt(cents / 1);
     $("#quarters").value = quarters;
     $("#dimes").value = dimes;
     $("#nickels").value = nickels;
     $("#pennies").value = pennies;
};

const processEntry = () => {
    const cents = parseInt($("#cents").value);

    if (isNaN(cents)) {
        alert("Change cannot be empty and must be numeric")
    }else if (cents <= 0 || cents > 99) {
        alert("Change must be greater than 0 and less than or equal to 99")
    } else {
        makeChange(cents)   
    };

};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});