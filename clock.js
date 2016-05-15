function updateImage() {

  var d = new Date();
  var h = d.getHours().toString();
  var m = d.getMinutes().toString();

  if (m < 10) { m = '0' + m};

  image = 'assets/images/clock/' + h + m + '.JPG';
	$.get(image)
		.done(function(){
			element = document.getElementById('coffeeclock');
			element.src = image;
		}).fail(function(){
			element = document.getElementById('coffeeclock');
			element.src = 'http://placekitten.com/g/600/600';
	});
};

$(document).ready(function(){
	updateImage() // call the first time
	setInterval(updateImage, 5 * 1000) // update each 5 seconds
});