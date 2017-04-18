var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
	delete req.session.authenticated;
	res.redirect('/');
});
module.exports = router;
