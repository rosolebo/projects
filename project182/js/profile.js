"use strict";


// Name: Rasaki Solebo
// Date: 05/08/2023
// Program description: This javascript code validates 
// users entries using regular expressions
// Algorithm:
// 1. it splits date into day and month for easy use
// 2. it ensure that the month is between 1 and 12
// 3. that days of the month have a max of 31 days
// 4. if there error messages it is cleared
// 5. get values entered in textboxs 
// 6. uses regular expression to validate such values 
// 7. if values are valid it stores in appropriate variable
// 8. if not correct, it displays error messages
// 9. set focus on the first text box. 

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt( dateParts[0] );
    const day = parseInt( dateParts[1] );

    if ( month < 1 || month > 12 ) { return false; }
    if ( day > 31 ) { return false; }
    return true;
};

$( document ).ready( () => {

    $( "#save" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const fullname = $("#fullname").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        
        // check user entries for validity
        let isValid = true;
        if ( fullname === "" ) {
            isValid = false;
            $("#fullname").next().text("Please enter a valid fullname.");
        }
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || !zipPattern.test(zip) ) {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob, datePattern) ) {
            isValid = false;
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }
        
        if ( isValid ) { 
            // code that saves profile info goes here
        }
        
        $("#fullname").focus(); 
    });
    
    // set focus on initial load
    $("#fullname").focus();
});