var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { contact: true, title: 'contact' });
});

module.exports = router;