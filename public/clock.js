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
	});

// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", image, true);
// 	xhr.responseType = "arraybuffer";
// 	xhr.onload = function(e){
// 		var blob = new Blob([this.response], {type: "image/jpeg"});
// console.log(blob);
// 	        var loadingImage = loadImage(blob, function(img){
//                         document.getElementById('coffeetable').appendChild(img);
//                 console.log(blob); console.log(img)},
//                 {orientation: blob.exif.get('Orientation')}
//                 );
// 	}
// 	xhr.send();

};

$(document).ready(function(){
	updateImage() // call the first time
	setInterval(updateImage, 15 * 1000) // update each 5 seconds
});
