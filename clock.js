function updateImage() {

  var d = new Date();
  var h = d.getHours().toString();
  var m = d.getMinutes().toString();

  if (m < 10) { m = '0' + m};

  image = h + m + '.JPG';

  element = document.getElementById('coffeeclock');
  element.src = 'assets/images/clock/' + image;
}

updateImage(); // call the first time
setInterval(updateImage, 5 * 1000); // update each 5 seconds
