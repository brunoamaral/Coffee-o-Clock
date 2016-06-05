function updateImage(loadImage) {

	var d = new Date();
	var h = d.getHours().toString();
	var m = d.getMinutes().toString();
		if (m < 10) { m = '0' + m};

	var domain = 'http://labs.brunoamaral.eu/coffeeclock/'
	image = domain + 'public/assets/images/clock/' + h + '00.JPG';
	var element = document.getElementById('coffeetable');

	var xhr = new XMLHttpRequest();

	xhr.open("GET", image, true);
	xhr.responseType = "arraybuffer";
	xhr.onload = function(e){
		var arrayBufferView = new Uint8Array(this.response);
		var blob = new Blob([arrayBufferView], {type: "image/jpeg"})
	}
	xhr.send();
	// $.get(image)
	// 	.done(function(){
	// 		element.src = image;
	// 	})
	// 	.fail(function(){
	// 		element.src = 'http://placekitten.com/g/600/600';
	// });

	var loadingImage = loadImage(blob, function (img){
			element.appendChild(img);
		},
		{orientation: blob.exif.get('Orientation')}
		);
};

$(document).ready(function(){
	updateImage() // call the first time
	setInterval(updateImage, 15 * 1000) // update each 5 seconds
});