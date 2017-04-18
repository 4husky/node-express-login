var express = require('express');
var router = express.Router();

var adminUser = { email: "admin@gmail.com", name: "Administrator ", password: "123" }
var fs = require('fs');
var userArr;
fs.readFile('routes/users.json', 'utf8', function (err, data) {
  if (err) throw err;
  userArr = JSON.parse(data);
});
router.post('/', function(req, res, next) {
 	var loginForm = req.body;
	if (userArr == "undefined") new Error("Eowww!");
	
	var authenticated = false;

	for (var i=0; i < userArr.length; i++){
	   if (loginForm.email == userArr[i].email && loginForm.password == userArr[i].password) {
		authenticated = true;
		req.session.authenticated = authenticated;
            	req.session.user = userArr[i];
            	console.log(req.session);
            	res.redirect('/');		   	
		break;
	   }
	}
	if(!authenticated) {
	    req.flash('error', 'Username and password are incorrect!');
	    res.redirect('/login');
	}
});

router.get('/', function (req, res, next) {
	res.render('login', { flash: req.flash() } );
});
module.exports = router;
