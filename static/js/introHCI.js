// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
        $(".jumbotron p").toggleClass("active");
	});
    
    $("#submitBtn").click(function(e) {
        project = $("#project").val();
        newWidth = $("#width").val();
        newDscrp = $("#description").val();
        
        $(project).animate({
            width : newWidth
        });
        
        $(".project-description").text(newDscrp);
    });

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
}

var cnt = 0;
function projectClick(e) {
  console.log("Project clicked");
    // prevent the page from reloading    
    e.preventDefault();
  // In an event handler, $(this) refers to
  // the object that triggered the event   
  $(this).css("background-color", "#e9e9e9");
    
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
//       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + " and you did it "+cnt+" times!</p>");
       description.fadeOut();
    }
    
    if ((cnt % 2) == 0)
        description.fadeIn();
    else
        description.fadeOut();
    cnt++;
}