"use strict";

// Name: Rasaki Solebo
// Due date: 4/10/2023
// Program description: display a wecome message on page load
// the message fade out and removed from page after some time
// xxx
// Algorithm
// 0. on plage load
// 1. display greetings for 2 seconds
// 2. fadeout greetings for 1 seconds
// 3. remove greetings from display
// 4. fadein greetings after 3 seconds

$(document).ready( () => {
    $("#greetings").delay(2000).fadeOut(1000).fadeIn(3000);
    
});// end ready

