var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Coffee OClock", javascript: '<script src="clock.js"></script><script src="javascripts/bootstrap.min.js"></script>' });
});

router.get('/gallery', function(req, res, next){
	fs.readdir('public/assets/images/clock', function(err, files){
		if (!err){
			var photos = [];
			for (var i = 0; i < files.length; i++){
				photos[i] = '/assets/images/clock/' + files[i]
				console.log(photos)
			}; 
			res.render('gallery', { photos : photos, javascript: '<script src="javascripts/bootstrap.min.js"></script>' });
		}else{
			console.log(fs.readdirSync('public/assets/images/clock'));
		}
	})

});
	
// serve static html
// router.get('/home', function(req, res) {
//     res.sendFile('index.html', { root: path.join(__dirname, '../public') });
// });

module.exports = router;
