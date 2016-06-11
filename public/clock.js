function updateImage() {

	var debug = false;

	var main_url = 'http://labs.brunoamaral.eu/coffeeclock/public/assets/images/clock/';

	if (debug === true) {
		var image_url = main_url + '0100.JPG';
	} else {
		var d = new Date();
		var h = d.getHours().toString();
		var m = d.getMinutes().toString();
			if (m < 10) { m = '0' + m};

		var image_url = main_url + h + '00.JPG';

	};

	$.get(image_url)
			.done(function(image){
				if ($('.clock').attr('src') != image_url){
					element = $('.clock').fadeOut("slow",function(){$(this).attr('src', image_url) }).fadeIn(500);   
					console.log(image_url + ' is not equal to previous')
				}else{ console.log('image source is equal to previous one')}

			}).fail(function(){
				console.log('oh no!')
		});

};

$(document).ready(function(){
	updateImage() // call the first time
	setInterval(updateImage, 15 * 1000) // update each 15 seconds
});
