$(document).ready(function(){
	$('.flipping img').click(function(){
		$(this).slideUp({
			duration: 1000, 
			easing: "Highlight", 
		});
	});
});// end document
