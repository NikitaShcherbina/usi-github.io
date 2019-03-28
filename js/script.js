$(document).ready(function(){
	new WOW().init();
	var carousel = $("#carousel");
	carousel.owlCarousel({
		items: 1,
		navigation : true,
    	navigationText : [" "," "],
		itemsDesktop:      [1400, 1],
		itemsDesktopSmall: [900, 1],
		itemsTablet:       [770, 1],
		itemsMobile:       [768, 1],
	});
	var carousel2 = $("#carousel2");
	carousel2.owlCarousel({
		items: 1,
		navigation : true,
    	navigationText : [" "," "],
		itemsDesktop:      [1400, 1],
		itemsDesktopSmall: [900, 1],
		itemsTablet:       [770, 1],
		itemsMobile:       [768, 1],
	});
});

var height = $(document).height();
var height2 = $("header").height();
$(".line-all1, .line-all").css("height", +height - +height2 )

