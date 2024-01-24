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
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    
    // TODO: Add code to display the current date in the header of the page.
  });