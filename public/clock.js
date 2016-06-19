function updateImage() {

	var debug = false;

	var main_url = 'http://coffeeclock.brunoamaral.eu/coffeeclock/public/assets/images/clock/';

	if (debug === true) {
		var image_url = main_url + '1500.JPG';
	} else {
		var d = new Date();
		var h = d.getHours().toString();
			if (h < 10) {h = '0' + h};
		var m = d.getMinutes().toString();
			if (m < 10) { m = '0' + m};

		var image_url = main_url + h + m + '.JPG';

	};

	// Show something if the clock was just started
	if ($('.clock').attr('src') == "" ){
		element = $('.clock').fadeOut("slow",function(){$(this).attr('src', main_url + h + '00.JPG') }).fadeIn(500);		
	}

	if ($('.clock').attr('src') != image_url){
		$.get(image_url)
			.done(function(image){

					element = $('.clock').fadeOut("slow",function(){$(this).attr('src', image_url) }).fadeIn(500);   

			}).fail(function(){
				console.log('oh no! Failed to get image.')
		});
	}else{ console.log('image source is equal to previous one')}
};

$(document).ready(function(){
	updateImage() // call the first time
	setInterval(updateImage, 15 * 1000) // update each 15 seconds
});
