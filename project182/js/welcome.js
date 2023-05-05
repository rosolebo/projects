"use strict";

// Name: Rasaki Solebo
// Due date: 4/10/2023
// Program description: display a wecome message on page load
// the message fade out and removed from page after some time
// xxx
// Algorithm
// 1. display greetings for 5 seconds
// 2. fade out greetings for 1 seconds
// 3. remove message from display

$(document).ready( () => {
    $("#greetings").delay(5000).fadeOut(1000);
    
});// end ready

