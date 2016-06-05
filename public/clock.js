function updateImage() {

	var d = new Date();
	var h = d.getHours().toString();
	var m = d.getMinutes().toString();
		if (m < 10) { m = '0' + m};

	var domain = 'http://labs.brunoamaral.eu/coffeeclock/'
	var image = domain + 'public/assets/images/clock/' + h + '00.JPG';

	var loadingImage = loadImage(image, function(img){
		var target = document.getElementById('coffeetable')
		target.appendChild(img);
		console.log(image);
		}, {
			orientation: image.exif.get('orientation')
		}
	);

};

$(document).ready(function(){
	updateImage() // call the first time
	setInterval(updateImage, 15 * 1000) // update each 5 seconds
});
