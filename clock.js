function updateImage() {

  var d = new Date();
  var h = d.getHours().toString();
  var m = d.getMinutes().toString();

  image = h + m + '.JPG';

  element = document.getElementById('coffeeclock');
  element.src = 'assets/images/clock/' + image;
}

updateImage(); // call the first time
setInterval(updateImage, 1 * 1000); // update each 1 second
