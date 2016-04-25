$(document).ready(function(){
	
	//setInterval(function(){
	//	$('#socialWrapper').removeClass("animated bounce").addClass("animated bounce");
//		console.log("tick");
//	},1000);
	
	var triangebtndown = document.getElementById("triangle");
    triangebtndown.onclick = function (e) {
		var $len = $('#about').offset().top;
		
        $('html, body').animate({
            scrollTop: $len
        }, 1000);
    };
	
	var triangebtnup = document.getElementById("profileImage");
    triangebtnup.onclick = function (e) {
		var $len = 0;
		
        $('html, body').animate({
            scrollTop: $len
        }, 1000);
    };
	
	
	// Cache the Window object
	$window = $(window);
	            
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPositionY: coords });
		
}); // window scroll Ends

 });	

}); 

/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");