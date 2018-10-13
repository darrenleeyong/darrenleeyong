// Node environment
// const tippy = require('tippy.js')

// With a module bundler (webpack/rollup/parcel)
// import tippy from 'tippy.js'

jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});

$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				} 
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});


$(window).scroll(function(){
    var scroll = ($(window).scrollTop()) / ($(document).height() - $(window).height()) * 100;
    $('.scroll').css( "width", scroll+"%" );
  });