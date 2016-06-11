function updateImage() {

	var debug = true;

	if (debug === true) {
		var image = 'http://labs.brunoamaral.eu/coffeeclock/public/assets/images/clock/0100.JPG';
	} else {
		var d = new Date();
		var h = d.getHours().toString();
		var m = d.getMinutes().toString();
			if (m < 10) { m = '0' + m};

		var image = 'http://labs.brunoamaral.eu/coffeeclock/public/assets/images/clock/' + h + '00.JPG';

	};

	$.get(image)
			.done(function(){
				element = $('.clock');
				element.src = image;
			}).fail(function(){
				console.log('oh no!')
		});

};

$(document).ready(function(){
	updateImage() // call the first time
	setInterval(updateImage, 15 * 1000) // update each 5 seconds
});
