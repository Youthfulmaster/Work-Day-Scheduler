// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // Add a listener for click events on the save button.
    $(".saveBtn").on("click", function() {
        // Get the id of the parent time-block.
        var timeBlockId = $(this).closest(".time-block").attr("id");
        
        // Get the user input from the textarea in this time-block.
        var userInput = $(this).siblings("textarea").val();
        
        // Save the user input in local storage with the time-block id as the key.
        localStorage.setItem(timeBlockId, userInput);
    });
    // Get the current hour using Day.js in 24-hour format.
    var currentHour = dayjs().hour();


      // Loop through each time-block to apply classes.
      $(".time-block").each(function() {
          var timeBlockId = $(this).attr("id");
          var timeBlockHour = parseInt(timeBlockId.split("-")[1]); // Extract hour from id
          
          // Compare the current hour with the time block's hour.
          if (currentHour === timeBlockHour) {
              $(this).addClass("present");
          } else if (currentHour > timeBlockHour) {
              $(this).addClass("past");
          } else {
              $(this).addClass("future");
          }
      });
     // Loop through each time-block to load user input from local storage.
     $(".time-block").each(function() {
        var timeBlockId = $(this).attr("id");
        var savedUserInput = localStorage.getItem(timeBlockId);
        
        // Set the textarea value with the saved user input (if any).
        if (savedUserInput !== null) {
            $(this).find("textarea").val(savedUserInput);
        }
    });
    
    // Get the current date using Day.js and display it in the header.
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
});
 