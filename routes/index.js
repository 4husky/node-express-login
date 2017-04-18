var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  if (req.session.authenticated == true) 
  	res.render('index', { authenticated: true ,  title: req.session.user.name});
  else
  	res.render('index', { authenticated: false, title: 'Express' });
});

module.exports = router;
