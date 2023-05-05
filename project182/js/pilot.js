"use strict";

// Name: Rasaki Solebo
// Due date: 4/10/2023
// Program description: A form to collect information
// from user who needs to conact an organization
// xxx
// Algorithm
// 1. declare program variables
// 2. add ul element/ node to the DOM
// 3. create new li elements for each error message
// 4. replace existing ul node if necessary
// 5. get form controls to check for validity
// 6. check user entries for validity
// 7. submit the form or notify user of errors

const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const name = $("#name");
    const email = $("#email_address");
    const phone = $("#phone");
    const terms = $("#address");
    const country = $("#country");
    

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (name.value == "") {
        msgs[msgs.length] = "Please enter your full name."; 
    }
    if (purpose.value == "") {
        msgs[msgs.length] = "Please enter your contact topic / message."; 
    }
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    } 
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number."; 
    } 
    if (address.value == "") {
        msgs[msgs.length] = "Please enter your street address."; 
    }
    if (country.value == "") {
        msgs[msgs.length] = "Please select a country.";
    } 

    // submit the form or notify user of errors
    if (msgs.length == 0) {  // no error messages
        $("form").submit(); 
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    $("form").reset();
    
    // remove error messages
    $("ul").remove();
    
    $("#name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#submit1").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#name").focus();   
});